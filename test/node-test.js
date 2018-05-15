import { expect } from 'chai';
import Node from '../lib/Node.js';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node('k');
  });

  it('should be an object', () => {
    expect(node).to.exist;
  });

  it('should default children to {}', () => {
    expect(node.children).to.deep.equal({});
  });

  it('should default endNode to false', () => {
    expect(node.endNode).to.equal(null);
  });

  it('should take a letter and assign it to the letter property', () => {
    expect(node.value).to.equal('k');
  });

});