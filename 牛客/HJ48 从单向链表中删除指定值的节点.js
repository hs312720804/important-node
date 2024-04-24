function a (line) {
    let tokens = line.split(' ');
    tokens.shift()
    tokens.shift()
    const last = tokens.pop()
    let res = []
    for (let i = 0; i < tokens.length; i++) {
        if (i === 0) {
            res.push(tokens[i])
        }
        else if (i === 1) {
            res.unshift(tokens[i])
        } else if ( i%2 === 1)  {
            const index = res.findIndex(t => t === tokens[i])
            res.splice(index, 0, tokens[i-1])
        }
    }

    console.log(tokens)
    console.log(res)
    // const index = res.findIndex(t => t === last)
    // res.splice(index, 1)
    // console.log(res.join(' '))
}
a('6 2 1 2 3 2 5 1 4 5 7 2 2')