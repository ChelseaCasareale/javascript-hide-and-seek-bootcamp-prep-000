function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  // div #grand-node deepest child
  var grandNodeDiv = document.querySelector('div#grand-node');
  var nextNode = grandNodeDiv.children[0];

  while (nextNode) {
    var node = nextNode;
    nextNode = node.children[0];
  }
  
  return node;
}
