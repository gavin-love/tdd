import Node from './Node.js';
export default class Trie {
  constructor() {
    this.rootNode = new Node();
    this.completedWordCount = 0;
  }

  insert(word) {
    let lettersArray = [...word.toLowerCase()];
    let currentNode = this.rootNode;

    for (let i = 0; i < lettersArray.length; i++) {
      let letter = lettersArray[i];

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    }

    if (!currentNode.complete) {
      currentNode.complete = lettersArray.join('');
      this.completedWordCount++;
    }
  }

  // delete(word) {
  //   let letterArray = [...word.toLowerCase()];
  //   let currentNode = this.rootNode;

  //   let rootNodeChildKey = object.keys(this.rootNode.children);

  //   if (!rootNodeChildKey.includes(letterArray[0])) {
  //     return;
  //   }

  //   letterArray.forEach(letter => {
  //     currentNode = currentNode.children[letter];
  //   })
  //   currentNode.complete = null;
  //   }
  // } 

  countComplete() {
    return this.completedWordCount; 
  }

  suggest(letters) {
    this.suggestions = [];
    let currentNode = this.rootNode;
    let letterArray = [...letters.toLowerCase()];
    let rootNodeChildKey = Object.keys(this.rootNode.children);

    if (!rootNodeChildKey.includes(letterArray[0])) {
      return this.suggestions;
    }

    letterArray.forEach(letter => {
      currentNode = currentNode.children[letter];
    });


    this.findWords(currentNode);
    return this.suggestions;
  }

  findWords(currentNode) {
    let childKeyArray = Object.keys(currentNode.children);

    childKeyArray.forEach((childKey) => {
      if (currentNode.children[childKey].complete) {
        this.suggestions.push(currentNode.children[childKey].complete);
      }
      this.findWords(currentNode.children[childKey]);
    });
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    });
  }
  
}