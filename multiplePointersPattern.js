// Write a function to find a pair or numbers whose sum is 0
// the input array  would be a sorted array [-4,-3.-2,-1,0,1,2,3,10]

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else left++;
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 5, 10]));
