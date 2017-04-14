var codeBlocks = document.getElementsByTagName("pre");
console.log('codeblock', codeBlocks);

var selectBtn = document.createElement('span');
selectBtn.innerHTML = '<button onclick="selectText()">Select Code Block</button>';

console.log('selectBtn', selectBtn);

for (var i = 0; i < codeBlocks.length; i++) {
  var parent = codeBlocks[i].parentNode;
  console.log('parent', parent);
  // if the parents lastchild is the codeBlocks[i]...
  // parent.insertBefore(selectBtn.cloneNode(true), codeBlocks[i]);
  if (parent.lastChild == codeBlocks[i]) {
      // add the newElement after the target element.
      parent.appendChild(selectBtn.cloneNode(true));
  } else {
      // else the target has siblings, insert the new element between the target and it's next sibling.
      parent.insertBefore(selectBtn.cloneNode(true), codeBlocks[i].nextSibling);
  }
}

function selectText() {
  return 1;
}
