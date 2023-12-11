/*       Array methods           */

let friends = ["apple", "banana", "cat", "dog", "umi"];

friends.push();
console.log(friends);

function callphone(number) {
  console.log("印出數字" + number);
  return 1 + number;
}
console.log(callphone());

/*       pop           */
console.log(friends);
console.log(friends.pop());
console.log(friends);
console.log("-------即將開始shift-----------");
/*       shift           */

console.log(friends.shift()); // apple
console.log(friends); // [ banana cat dog ]

/*       unshift(element)           */
let getForward = friends.shift(); //得到 banana 剩下 [cat dog]
console.log("-------開始unshift前先印出-----------");
console.log(friends);
console.log("-------即將開始unshift-----------");
console.log(friends.unshift(getForward));
console.log(friends);

/*     array in array */

let myArr = [
  ["name", "address", "age"],
  ["oni", "TW", 25],
  ["umi", "TW", 15],
];

console.log(myArr[2][0]); //umi
