/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) {
      return false
  }
  const matchArr = ['(', '{', '[']

  let arr = []

  for (let ch of s) {
      if (matchArr.includes(ch)) {
          arr.push(ch)
      }
      switch (ch) {
          case ')':
              if (arr.pop() !== '(') {
                  return false
              }
              break;
          case '}':
              if (arr.pop() !== '{') {
                  return false
              }
              break;
          case ']':
              if (arr.pop() !== '[') {
                  return false
              }
              break;
      }
     
  }

  return arr.length === 0

};

let s = "(]"

isValid(s)



const aa = 'abc'

for (let a of aa) {
    if (a === 'b') {
        return false
    }
}