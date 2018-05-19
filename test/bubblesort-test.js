import bubbleSort from '../lib/bubble-sort.js';
import arrayGenerator from '../lib/array-generator.js';

var chai = require('chai');
var expect = chai.expect;

describe('bubbleSort', function () {

  it('should be a function', () => {

    expect(bubbleSort).to.exist;
  });

  it('should sort an array of 5 numbers', () => {
    let array;

    array = arrayGenerator(5);
 
    let expected = array.sort();
    let actual = bubbleSort(array);

    expect(expected).to.deep.equal(actual);
  });

  it('should sort an array of 5000 numbers', () => {
    let array;

    array = arrayGenerator(5000);

    let expected = array.sort();
    let actual = bubbleSort(array);

    expect(expected).to.deep.equal(actual);
  });

  it('should sort a large array of numbers', () => {
    let array;

    array = arrayGenerator(30000);

    let expected = array.sort();
    let actual = bubbleSort(array);

    expect(expected).to.deep.equal(actual);
  });
});