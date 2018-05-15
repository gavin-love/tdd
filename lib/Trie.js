import Node from './Node.js';

export default class Trie {
  constructor() {
    this.rootNode = new Node();
    this.counter = 0;
  }

  insert(data) {
    let wordArray = [...data.toLowerCase()];
    let currentNode = this.rootNode;

    for (let i = 0; i < wordArray.length; i++) {
      let letter = wordArray[i];

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    }

    if (!currentNode.complete) {
      this.counter++;
      currentNode.complete = wordArray.join('');
    }
  }

  countComplete() {
    this.counter; 
  }
}