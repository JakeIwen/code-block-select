const copyImg = chrome.runtime.getURL("copy.png");
const copiedImg = chrome.runtime.getURL("copied.svg");
var codeBlocks = document.getElementsByTagName("pre");
var selectBtn = document.createElement('span');
selectBtn.innerHTML =
'<img src="' + copyImg + '" class="clip" data-clipboard-action="copy" />';

for (var i = 0; i < codeBlocks.length; i++) {
  codeBlocks[i].className += " block" + i;
  var thisBtn = selectBtn.cloneNode(true);
  thisBtn.firstChild.className += " clip" + i;
  thisBtn.firstChild.setAttribute("data-clipboard-target", ".block" + i);

  var parent = codeBlocks[i].parentNode;
  if (parent.lastChild == codeBlocks[i]) {
    // add newElement after target element.
    parent.appendChild(thisBtn);
  } else {
    // else target has siblings, insert new element between target and next sibling.
    parent.insertBefore(thisBtn, codeBlocks[i].nextSibling);
  }
}

var clipboard = new Clipboard('.clip');
  clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    defaultImgs();
    e.trigger.setAttribute("src", copiedImg);
    console.info("e", e);
    e.clearSelection();
  });
  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

function defaultImgs() {
  var imgs = document.getElementsByClassName("clip");
  for (var i = 0; i < imgs.length; i++)
    imgs[i].setAttribute("src", copyImg);
}
