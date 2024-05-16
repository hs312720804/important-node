// 1561. 你可以获得的最大硬币数目

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort()
    let res = 0
    console.log(res)
    while (piles.length > 1) {
        piles.pop()
        res += piles.pop()
        piles.shift()
    }

    return res 
};


console.log(maxCoins([2,4,1,2,7,8]))