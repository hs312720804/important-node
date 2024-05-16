function a (a,b,c) {
    const num = a.toString(parseInt(c))
    const arr = num.split('')
    const filter = arr.filter(item => item == b)
    console.log(filter.length);
}
a(10,2,4)