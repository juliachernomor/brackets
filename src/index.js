
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let obj = Object.fromEntries(bracketsConfig);
  for (let char of str) {
    if ((Object.keys(obj).join('')).localeCompare(char) == 0) {
      stack.push(char)
    } else if ((Object.values(obj).join('')).localeCompare(char) == 0) {
        if (stack.length == 0 || stack.pop() !== getKeyByValue(obj, char)) {
        return false;
      }
    }
  }
  if (stack.length == 0) {
    return true
}
}


function getKeyByValue(object, value) {//получаю ключ по значению
  return Object.keys(object).find(key =>
      object[key] === value);
}

