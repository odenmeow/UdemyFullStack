/*       Reference Data Type比較            */
let x = 10;
let y = 10;
console.log(x == y); //true

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); //false

/*          字串池概念?            */
let r = "花";
let s = "花";
console.log("r==s : ", r == s); //  true
console.log("r===s : ", r === s); //  true
console.log("r=='花' : ", r == "花"); //  true
console.log("r==='花' : ", r === "花"); //  true
console.log("r=='花' : ", "花" == "花"); //  true

/* */
