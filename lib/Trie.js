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
    return this.counter; 
  }

  suggest(letters) {
    this.suggestions = [];
    let currentNode = this.rootNode;
    let letterArray = [...letters.toLowerCase()];
    let rootKeys = Object.keys(this.rootNode.children);

    if (!rootKeys.includes(letters[0])) {
      return this.suggestions;
    }

    letterArray.forEach(letter => {
      currentNode = currentNode.children[letter];
    });


    this.findWords(currentNode);
    return this.suggestions;
  }

  findWords(currentNode) {
    let childrenNodes = Object.keys(currentNode.children);

    childrenNodes.forEach((child) => {
      if (currentNode.children[child].complete) {
        this.suggestions.push(currentNode.children[child].complete);
      }
      this.findWords(currentNode.children[child]);
    });
  }

  // suggest(data) {
  //   let wordArray = [...data.toLowerCase()];
  //   let currentNode = this.rootNode.children;
  //   let letter;
    
  //   for (let i = 0; i < wordArray.length; i++) {
  //     letter = wordArray[i];
      
  //     if (currentNode[letter].value === letter) {
  //       currentNode = currentNode[letter].children;
  //       console.log(currentNode);
  //     }
  //   }

    
  //   while (currentNode.children !== {}) {
  //     // let key = Object.keys(currentNode);
  //     console.log(currentNode);
  //     currentNode = currentNode[key[0]].children;
  //   }
  // }
}