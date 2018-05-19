const insertionSort = (array = [5, 4, 3, 2, 1]) => {

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

      if (array[i] < array[j]) {

        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

export default insertionSort;

