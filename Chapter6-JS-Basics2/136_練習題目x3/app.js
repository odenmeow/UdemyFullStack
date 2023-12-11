/*      反轉陣列        */
const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
const reversed_friends = [];
console.log(reversed_friends.length);
console.log(reversed_friends.push("aaa"));
console.log(reversed_friends);
for (let i = friends.length - 1; i >= 0; i--) {
  reversed_friends.push(friends[i]);
}

console.log(reversed_friends);
/*      找出陣列中最大值        */

function findBiggest(arr) {
  if (arr.length == 0) return undefined;
  let biggestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}
console.log(findBiggest([1, 2, 3, 4, 5, 999]));

/*                    數值加總                    */

function addUpTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

let startTime = performance.now();
console.log(addUpTo(50505));
let endTime = performance.now();
console.log(endTime - startTime);

// 使ˇ用 (1+n)*n/2 更快!
