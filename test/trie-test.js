import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';

describe('Trie', () => {
  let trie;
  
  beforeEach(() => {
    trie = new Trie();
  });

  it('should have a rootNode node defaulted to null', () => {
    expect(trie.rootNode).to.deep.equal(new Node());
  });

  describe('insert', () => {
    it('should be able to add a node to the Tree', () => {
      
      trie.insert('fumble');

      expect(trie.rootNode.children.f.value).to.deep.equal('f');
    });
    
    it('should be able to add multiple nodes to the tree', () => {
      trie.insert('hello');
      expect(trie.rootNode.children.h.children.e.children.l.children.l.children.o.value).to.equal('o');
    });

    it('should count total completed words', () => {
      trie.insert('this');
      trie.insert('is');
      trie.insert('funky');
      trie.countComplete();

      expect(trie.counter).to.equal(3);
    });
  });
});