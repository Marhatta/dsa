function countChars(str) {
  const result = {};
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      const _char = char.toLowerCase();
      result[_char] = ++result[_char] || 1;
    }
  }
  return result;
}

console.log(countChars('My name is Vishal1231!'));
