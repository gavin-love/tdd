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

function insertionSort(array = [10, 2, 8, 4, 12]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {

      if (array[j + 1] > array[j] > array[0]) {
        [array[0], array[j]] = [array[j], array[0]];
      }
    }
  }
  return array;
}

insertionSort();