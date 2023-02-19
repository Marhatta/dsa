// Write a program to find if one string is an anagram of another string
// 'aaz', 'zza' -> false   'anagram', 'nagaram' ->  true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookup = {};

  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  for (let char of str2) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }

  return true;
}

console.log(validAnagram('anagram', 'nagaram'));
