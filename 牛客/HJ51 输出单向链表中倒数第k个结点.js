function a (line, num) {
    class listNode {
        constructor(val, next) {
            this.val = val
            this.next = next
        }
    }
let arr = line.split(' ')
    let head = new listNode(arr[0], undefined)
    let current = head

    for (let i = 1; i< arr.length; i++) {
        current.next = new listNode(arr[i], undefined)
        current = current.next
    }


    let slow = head
    let fast = head

    while (num--) {
        fast = fast.next
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    console.log(arr)
    console.log(slow)
}

a('1 2 3 4 5 6 7 8', 4)