let newData = /**@class*/ (function () {
  function newData() {}
  newData.prototype.setProperty = function (k, v) {
    if (`merit` !== k && "other" != k) {
      this[k] = v;
    } else {
      this[`scholarship.${k}`] = v;
    }
  };
  console.log(newData);
  return newData;
})();

let n = new newData();
n.setProperty("name", "umi");
n.setProperty("age", 10);
n.setProperty("merit", 1000);
console.log(n);
