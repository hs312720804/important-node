var a = 1
let b= 1
function aa (x) {
  function bb (y) {
    function cc (z) {
      console.log(a + b + x + y + z)
    }
    cc(3)
  }
  bb(2)
}
aa(1)