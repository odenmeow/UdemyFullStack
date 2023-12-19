/*              map,forEach 差別比較                */

/*         map,forEach 差別比較        */

let arrMap = [1, 2, 3, 4, 5, 6];
let newArrMap = arrMap.map((i) => i ** 2);
console.log(newArrMap); // [ 1, 4, 9, 16, 25, 36 ]
let arrForEach = [1, 2, 3, 4, 5, 6];
let newArrForEach = arrForEach.forEach((i) => i ** 2);
console.log(newArrForEach); //undefined

newArrMap = arrMap.map((i) => 1);
console.log(newArrMap);

newArrForEach = arrForEach.forEach((i) => {
  return i;
});
console.log(newArrForEach); //undefined

/*      私下實驗          */

let Oni = {
  name: "Oni",
  age: 25,
};

let Umi = {
  name: "Umi",
  age: 16,
};

let arr = [1, 2, 3, Oni, Umi];
let newArr = arr.map((obj) => {
  if (typeof obj == "number") {
    return obj ** 2;
  } else {
    obj.age = 100;
    return obj;
  }
});
console.log(newArr);
console.log("原始arr:", arr);
