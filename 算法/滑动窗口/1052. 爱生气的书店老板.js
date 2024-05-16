/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let total = 0
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] == 0) {
            total += customers[i]
        }
    }

    let add = 0
    let max = 0

    // 把原本要生气的加进来
    for (let i = 0; i < minutes; i++) {
        max += grumpy[i] * customers[i]
    }

    for (let i = 1; i <= grumpy.length - minutes ; i++) {
        add  = add - customers[i-1] * grumpy[i-1] + customers[i+minutes-1] * grumpy[i+minutes-1]

        max = Math.max(max, add)

    }

    return max + total
};

customers = [3,2,5]

grumpy = [0,1,1]

minutes = 2


console.log(maxSatisfied(customers, grumpy, minutes))