/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let st = []
  for (let i = 0; i < tokens.length; i++) {
      const cur = tokens[i]
      if (isNumber(cur)) {
          st.push(Number(cur))
      } else {
          const num1 = st.pop()
          const num2 = st.pop()

          let exp
          if (cur === '+') {
              exp = num1 + num2
          } else if (cur === '-') {
              exp= num1 - num2
          } else if (cur === '*') {
              exp= num1 * num2
          } else if (cur === '/') {
              exp= Math.floor(num2 / num1)
          }
          st.push(exp)
      }
  }   

  return st.pop()

};
function isNumber (value) {
  return value !== '+' && value !== '-'&& value !== '*'&& value !== '/'
}

// tokens = ["2","1","+","3","*"]
tokens =["4","13","5","/","+"]
console.log(evalRPN(tokens))