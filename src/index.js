module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const OPEN_BRACETS = bracketsConfig.map(arr => arr[0]);
  const BRACETS_PAIR = bracketsConfig.reduce((obj, arr) => {
    obj[arr[1]] = arr[0];
    return obj;
  }, {});

  for(let i = 0; i < str.length; i++) {
    const current = str[i];
    if(!stack.length) {
      if(OPEN_BRACETS.includes(current)) {
        stack.push(current);
      } else return false;
    } else if(BRACETS_PAIR[current] === stack[stack.length-1]) {
        stack.pop();
      } else if(OPEN_BRACETS.includes(current)) {
        stack.push(current);
        } else return false;
    }
    
    return stack.length === 0;
  }