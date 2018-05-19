const arrayGenerator = (x) => {
  let array = [];
  let randomNumber = 0;

  for (let i = 0; i < x; i++) {
    randomNumber = Math.floor(Math.random() * 50 - 10);

    array.push(randomNumber);
  }
  return array;
};

export default arrayGenerator;