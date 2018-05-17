import fs from 'fs';
import { expect } from 'chai';
import Trie from '../lib/Trie.js';

describe('Trie', () => {
  const text = "/usr/share/dict/words";
  const dictionary = fs.readFileSync(text).toString().trim().split('\n');
  let trie = new Trie();

  trie.populate(dictionary);
  
  it('should count words in the dicitonary', () => {
    trie.countComplete();
    expect(trie.counter).to.equal(234371);
  });
    
  it('should suggest a word based on a prefix', () => {
    trie.suggest('world');
    expect(trie.suggestions).to.deep.equal(['worlded', 'worldful', 'worldish', 'worldless', 'worldlet',
      'worldlike', 'worldlily', 'worldliness', 'worldling', 'worldly', 'worldmaker', 'worldmaking', 'worldproof', 'worldquake', 'worldward', 'worldwards', 'worldway', 'worldy']);
  });

  it('should suggest more words based on a prefix', () => {
    trie.suggest('sad');
    expect(trie.suggestions).to.deep.equal(['sadachbia', 'sadalmelik', 'sadalsuud', 'sadden', 'saddening', 'saddeningly', 'saddik', 'saddirham', 'saddish', 'saddle', 'saddleback', 'saddlebag',
      'saddlebow', 'saddlecloth', 'saddled', 'saddleleaf', 'saddleless', 'saddlelike', 'saddlenose',
      'saddler', 'saddlery', 'saddlesick', 'saddlesore', 'saddlesoreness', 'saddlestead', 'saddletree',
      'saddlewise', 'saddling', 'sadducaic', 'sadducean', 'sadducee', 'sadduceeism', 'sadduceeist',
      'sadducism', 'sadducize', 'sade', 'sadh', 'sadhe', 'sadhearted', 'sadhu', 'sadic', 'sadie',
      'sadiron', 'sadism', 'sadist', 'sadistic', 'sadistically', 'sadite', 'sadly', 'sadness', 'sado',
      'sadomasochism', 'sadr']);
  });
});
