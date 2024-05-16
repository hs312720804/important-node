function fn(str) {
    let st = []
    let res = 0
    
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')' && st.pop() === '(') {
            res++
        } else if (str[i] === ')' && st.pop() !== '(') {
            return -1
        } else if (str[i] === '(') {
            st.push(str[i])
        }
    }

    return st.length === 0 ? res : '-1'
}

console.log(fn(')('))
console.log(fn('(1+(2+3)*(3+(8+0))+1-2)'))
console.log(fn('(1+(2+3)*(3+2)'))