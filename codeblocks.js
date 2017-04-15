const codeBlocks = document.getElementsByTagName("pre");
if (codeBlocks.length) {
  var flag = false;

  var selectBtn = document.createElement('div');
  selectBtn.className = "clip";
  selectBtn.setAttribute("data-clipboard-action", "copy");

  for (var i = 0; i < codeBlocks.length; i++) {
    codeBlocks[i].className += " block" + i;
    var thisBtn = selectBtn.cloneNode(true);
    thisBtn.setAttribute("data-clipboard-target", ".block" + i);
    codeBlocks[i].appendChild(thisBtn);
  }

  var clipboard = new Clipboard('.clip');
  clipboard.on('success', function(e) {
    flag && document.getElementById("copiedClip").removeAttribute("id");
    e.trigger.id = "copiedClip";
    flag = true;
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
}
