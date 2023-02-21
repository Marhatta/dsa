function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const calcAvg = (arr[start] + arr[end]) / 2;
    if (calcAvg === avg) {
      return true;
    } else if (calcAvg > avg) {
      end--;
    } else start++;
  }
  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
