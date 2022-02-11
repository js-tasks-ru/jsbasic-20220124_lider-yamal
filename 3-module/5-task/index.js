const inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  let arr = str.split(" ");
  let min = 0;
  let max = 0;

  for (let item of arr) {
    let num;

    if ((num = Number(item))) {
      if (min > num) {
        min = num;
      } else if (max < num) {
        max = num;
      }
    }
  }
  return { min: min, max: max };
}
