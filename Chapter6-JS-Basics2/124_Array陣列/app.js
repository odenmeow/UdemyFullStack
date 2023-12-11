/*       return關鍵字            */

let friend1 = "apple";
let friend2 = "banana";
let friend3 = "cat";
let friend4 = "dog";
let friend5 = "umi";

let friends = ["apple", "banana", "cat", "dog", "umi"];

let anotherArray = [null, , undefined, false, "String", 3.14];
console.log(anotherArray);
console.log(anotherArray[0]);
console.log(anotherArray[1]);
console.log(anotherArray[2]);
console.log(anotherArray[3]);

let f_copy = friends;
f_copy[0] = "pig";
console.log(" -   - - - 經過複製與修改後- - - - - - -");
console.log("friends= " + friends);
// friends 陣列會被改 因為複製的是Reference 而不是deep copy (甚至不是shadow copy)
console.log("f_copy= " + f_copy);

/*        跟JAVA 相似，物件會複製目標reference 原始型態則複製value    */

let deposit = 500;
let anotherDeposit = deposit;
anotherDeposit = 600;
console.log(" -   - - - 經過複製與修改後- - - - - - -");
console.log("deposit: " + deposit);
console.log("anotherDeposit: " + anotherDeposit);
