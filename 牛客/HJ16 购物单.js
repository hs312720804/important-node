function a () {
    const total = '50 5'
    let [totalMoney, num] = total.split(' ')
    totalMoney = parseInt(totalMoney)
    num = parseInt(num)
    let arr = [
        [20, 3, 5],
        [20, 3, 5],
        [10, 3, 0],
        [10, 2, 0],
        [10, 1, 0]
    ]
    // while(line = await readline()){
    //     let tokens = line.split(' ');
    //     arr.push(tokens)
    // }
    let cost = new Array(num+1).fill([]).map(() => new Array(3).fill(Infinity))
    let important = new Array(num+1).fill([]).map(() => new Array(3).fill(-Infinity))

    // arr.forEach((item,index) => {
    // })
        // console.log(arr)
    for (let index = 1; index < num+1; index++) {
        const item = arr[index-1]
        // console.log(index, item)
        const v  = parseInt(item[0])// 价格
        const p = parseInt(item[1]) // 重要度
        const q = parseInt(item[2])// 主件还是附
        if (q === 0) {
            cost[index][0] = v
            important[index][0] =  p * v
        } else {
            if (cost[q][1] < Infinity) { // 附件1
                cost[q][2] = v
                important[q][2] =  p * v
            } else {  // 附件2
                cost[q][1] = v
                important[q][1] = p * v
            }
        }

    
    }
    console.log(cost)
    console.log(important)
    let dp = new Array(num+1).fill([]).map(() => new Array(totalMoney/10 + 1).fill(0))

    // 初始化
    
    // console.log(dp)
    for (let i = 1; i < num+1; i++) { // 遍历物品
        for (let w = 1; w <= totalMoney/10; w++) {  // 遍历价格
            let cost0 = cost[i][0]  // 主件1
            let cost1 = cost[i][0] + cost[i][1] // 主件1 + 附件1
            let cost2 = cost[i][0] + cost[i][2] // 主件1 + 附件2
            let cost3 = cost[i][0] + cost[i][1] + cost[i][2] // 主件1 + 附件1 + 附件2               
            // 重要度
            let p0 = important[i][0]  // 主件1
            let p1 = important[i][0] + important[i][1] // 主件1 + 附件1
            let p2 = important[i][0] + important[i][2] // 主件1 + 附件2
            let p3 = important[i][0] + important[i][1] + important[i][2] // 主件1 + 附件1 + 附件2           
            // console.log('i' ,i)
            // console.log('w' ,w)
            // if (cost0 > w) {  // 不放
                dp[i][w] = dp[i-1][w]
            // } 
            if (cost0 <= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i-1][w-cost0] + p0 )
            }
            if (cost1 <= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i-1][w-cost1] + p1 )
            }
            if (cost2 <= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i-1][w-cost2] + p2 )
            }
            if (cost3 <= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i-1][w-cost3] + p3 )
            }
            
        }
    }
    
    console.log(dp)
}

a()