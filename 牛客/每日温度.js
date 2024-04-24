var dailyTemperatures = function(temperatures) {
    // 单调递减的栈  最后的最小
    let st = []
    let len = temperatures.length
    let res = new Array(len).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        if (st.length) {
            let end = st[st.length - 1]
           
            while (temperatures[i] > temperatures[st[st.length - 1]]) {
                end = st.pop()
                res[end] =  i - end
            }
        }
        st.push(i)
    }
    return res
};

dailyTemperatures([73,74,75,71,69,72,76,73])