setImmediate(function A() {
  setImmediate(function B() {
      console.log(1);
      setImmediate(function D() {
          console.log(2);
      });
  });
  setImmediate(function C() {
      console.log(3);
      setImmediate(function E() {
          console.log(4);
      });
  });
});
console.log('Started...');