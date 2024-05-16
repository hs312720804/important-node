let arr = [1, 2, 3]
for (let i =0; i < arr.length; i++) {
    if (i === 1) {
        arr.splice(i, 1)
    }
    console.log(i)
    // console.log(arr[i])
}