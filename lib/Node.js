export default class Node {
  constructor(value) {
    this.value = value;
    this.endNode = null;
    this.children = {};
    this.suggestions = [];
  }
}