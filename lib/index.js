function bubbleSort(array = [10, 2, 8, 4, 12]) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        console.log(array);
      }
    }
  }
  return array;
}

bubbleSort();

const insertionSort = (array = [5, 4, 3, 2, 1]) => {

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

      if (array[i] < array[j]) {

        [array[i], array[j]] = [array[j], array[i]]
      }

      console.log(array);
    }
  }
  return array;
}

insertionSort();