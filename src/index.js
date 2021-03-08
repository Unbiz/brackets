module.exports = function check(str, bracketsConfig) {
  const flatConfig = bracketsConfig.flat();
  const strArr = str.split('');
  const stack = [];

  for (let i = 0; i < strArr.length; i += 1) {
    const bracket = strArr[i];
    const bracketIndex = flatConfig.indexOf(bracket);

    if (bracketIndex % 2 === 0) {
      if (bracket === flatConfig[bracketIndex + 1] && stack[stack.length - 1] === bracketIndex) {
        stack.pop();
      } else {
        stack.push(bracketIndex);
      }
    } else {
      if (stack.pop() !== bracketIndex - 1) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
