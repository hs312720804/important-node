// a(2, 
// [
//     ['App1', 1, '09:00', '10:00'],
//     ['App2', 1, '10:10', '10:30'],
//     ['App3', 3, '10:35', '10:50'],
//     ['App4', 1, '10:20', '10:40'],
// ], 
//     '10:25')   
// a(1, [['App1', 1, '09:00', '10:00']], '09:30')
// a(2, [['App1', 1, '09:00', '10:00'],['App2', 2, '09:10', '09:30']], '09:20')
a(2, [['App1', 1, '09:00', '10:00'],['App2', 2, '09:10', '09:30']], '09:50')
function a (num, arr, time) {
    let list = arr
    
    // 时间
    time = parseInt(time.replace(':', ''))
    list = list.map(item => {
        item[2] = item[2].replace(':', '')
        item[3] = item[3].replace(':', '')
        return [item[0], item[1], parseInt(item[2]), parseInt(item[3])]
    }) 

    // 重点：根据优先级排序 ， 然后遍历 决定是否 push 进新数组
    list.sort((a,b) => b[1] - a[1] )
    let newArr = []
    for(let i = 0; i < list.length; i++) {
        const [appName, protity, start, end] = list[i]
        // const [appName2, protity2, start2, end2] = list[i]
        // 什么时候能添加： 
        // 1 没有时间冲突  
        // 2 如果有时间冲突，就看优先级  
        // 3, 如果优先级相同， 后面的不能添加

        let isConflict = false
        
        isConflict = newArr.some(item => {
            const [aitemApName, itemProtity, itemStart, itemEnd] = item

            if (start <= itemEnd && itemStart <= end  && itemProtity >= protity) {
                return true
            }
        })
        if (!isConflict) {
            newArr.push(list[i])
        } 

        // 有冲突的就删除
        // for (let j = 0;  j < newArr.length; j++) {
        //     const [aitemApName, itemProtity, itemStart, itemEnd] = newArr[j]

        //     if (start <= itemEnd && end >= itemStart && itemProtity < protity) {
        //         newArr.splice(j,1)
        //     }
        // }
        
       
  
    }
    console.log(newArr)
    console.log(time)
    for(let i = 0; i < newArr.length; i++) {
        const [appName, protity, start, end] = newArr[i]
        if (time > start && time < end) {
            console.log(appName)
            return
        }
    }

    console.log('NA')
}