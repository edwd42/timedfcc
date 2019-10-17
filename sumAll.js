// my time 8:25
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
    console.log(i, sum);
  }
  console.log("the sum is == ", sum);
  return sum;
}

sumAll([1, 4]);
sumAll([5, -10]);
sumAll([10, 5]);
