const copyImg = chrome.runtime.getURL("img/copy.png");
const copiedImg = chrome.runtime.getURL("img/copied.svg");
const emptyImg = chrome.runtime.getURL("img/empty.svg");
const codeBlocks = document.getElementsByTagName("pre");
var selectBtn = document.createElement('div');
selectBtn.className = "clip";
selectBtn.setAttribute("data-clipboard-action", "copy");

for (var i = 0; i < codeBlocks.length; i++) {
  var thisBtn = selectBtn.cloneNode(true);
  codeBlocks[i].className += " block" + i;
  thisBtn.className += " clip" + i;
  thisBtn.setAttribute("data-clipboard-target", ".block" + i);
  codeBlocks[i].appendChild(thisBtn);
}

var clipboard = new Clipboard('.clip');
clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  defaultImgs();
  e.trigger.className = "clip copiedClip";
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
    imgs[i].className = "clip";
}
