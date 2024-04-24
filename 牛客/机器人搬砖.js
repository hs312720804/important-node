function a (arr) {
    if (arr.lenght > 8) return console.log(-1)
    let max =  Math.max(...arr)
    let energy = max  // 需要逐步减少
    let hour = getHours(energy)
    if (hour > 8) {
        return console.log(-1)
    } else {
        while (getHours(energy) <= 8) {
            energy--
        }
    }
    console.log(energy+1)
    function getHours (energy) {
        let hour = 0
        arr.forEach(item => {
            hour += Math.ceil(item / energy)
        })
        // console.log('energy-', energy,'   ' + 'hour', hour)
        return hour

    }
}
// a([30,12,25,8,19])
a([10,12,25,8,19,8,6,4,17,19,20,30])