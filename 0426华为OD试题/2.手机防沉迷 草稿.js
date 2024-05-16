// 手机防沉迷
// https://blog.csdn.net/m0_56809046/article/details/135890424

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    // 几个App
    let num = await readline()
    if (num === 0) {
        console.log('NA') 
        return
    }
    // [appName, protity, start, end]
    let list = []
    while(line = await readline()){
        let tokens = line.split(' ');
        list.push(tokens)
    }
    let time = list.pop()
    // 时间
    time = parseInt(time.toString().replace(':', ''))
    list = list.map(item => {
        item[2] = item[2].replace(':', '')
        item[3] = item[3].replace(':', '')
        return [item[0], item[1], parseInt(item[2]), parseInt(item[3])]
    }) 
    // 优先级排序
    list.sort((a,b) =>  b[2] - a[2])
    let newArr = []
    for(let i = 0; i < list.length; i++) {
        const [appName, protity, start, end] = list[i]
        // const [appName2, protity2, start2, end2] = list[i]
        // 什么时候能添加： 1 没有时间冲突  2 如果有时间冲突，就看优先级  3, 如果优先级相同， 后面的不能添加

        const filterArr = list.filter(item => {
            if ((start >= item[2] || item[3] <= end) && item[1] > protity) {
                return true
            }
        })
        
        // const filterArr2 = newArr.filter(item => {
        //     if ((start >= item[2] || item[3] <= end) && item[1] > protity) {
        //         return true
        //     }
        // })
       const filterArr2 = newArr.filter(item => {
            if ((start >= item[2] || item[3] <= end) && item[1] === protity) {
                return true
            }
        })
        if (filterArr.length === 0 && filterArr2.length === 0) {
            newArr.push(list[i])
        } else {
            list.splice(i, 1)
            i--
        }
    }

    for(let i = 0; i < newArr.length; i++) {
        const [appName, protity, start, end] = newArr[i]
        if (time >= start && time <= end) {
            console.log(appName)
            return
        }
    }
    console.log('NA')
}()