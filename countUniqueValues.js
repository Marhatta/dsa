// Write a functinon to count unique values
// Input to the function would be a sorted array
// [1,1,1,1,2] -> 2 unique values

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let p1 = 0;
  let p2 = 1;
  let uniqueCount = 1;
  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      uniqueCount++;
    }
    p1++;
    p2++;
  }
  return uniqueCount;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
