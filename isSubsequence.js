function isSubsequence_Iterative(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

function isSubsequence_Recursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0])
    return isSubsequence_Recursive(str1.slice(1), str2.slice(1));
  return isSubsequence_Recursive(str1, str2.slice(1));
}

console.log(isSubsequence_Recursive('abc', 'acb'));
