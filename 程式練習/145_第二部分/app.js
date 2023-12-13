/*  編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。   */

function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);
}

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"

/* 2.編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。   */

function swap(str) {
  let bigAscii_arr = ["A".charCodeAt(0), "Z".charCodeAt(0)];
  let smallAscii_arr = ["a".charCodeAt(0), "z".charCodeAt(0)];
  let subMeToSmall = "A".charCodeAt(0) - "a".charCodeAt(0);
  let text = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].charCodeAt(0) >= bigAscii_arr[0] &&
      str[i].charCodeAt(0) <= bigAscii_arr[1]
    ) {
      // I am big  -> small  big-subMeToSmall =small
      text += String.fromCharCode(str[i].charCodeAt(0) - subMeToSmall);
    } else if (
      str[i].charCodeAt(0) >= smallAscii_arr[0] &&
      str[i].charCodeAt(0) <= smallAscii_arr[1]
    ) {
      // A - v = a ,   a + v = A     : v= subMeToSmall =variable
      text += String.fromCharCode(str[i].charCodeAt(0) + subMeToSmall);
    } else {
      text += str[i];
    }
  }
  return console.log(text);
}
console.log("---------大小互換--------");
swap("Aloha&+555SSLv"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."

/*編寫一個名為isPrime的函式，它接受一個整數作為參數，
回傳值為一個boolean，告訴我們參數是否為一個質數。 */

function isPrime(num) {
  let arr = new Array(num + 1).fill(true);
  // First (encounter/run into) true we check if really is true;
  arr[0] = false;
  arr[1] = false;
  for (let anchor = 2; anchor < num + 1; anchor++) {
    if (arr[anchor] == true) {
      let integer = 2;
      do {
        arr[integer * anchor] = false;
        integer++;
      } while (integer * anchor < num + 1);
    }
  }
  console.log(arr[num]);
}

isPrime(1); // returns false
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(17); // returns true
isPrime(1000000); // returns false

function isPrime2(num) {
  if (num <= 1) {
    return false; // 如果数小于等于 1，不是质数
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // 如果存在因数，则不是质数
    }
  }

  return true; // 如果没有因数，则是质数
}
console.log("--------GPT__版本----------");
// 测试函数
console.log(isPrime2(5)); // 输出 true，因为 5 是质数
console.log(isPrime2(9)); // 输出 false，因为 9 不是质数

/*4.編寫一個名為pyramid的函式，功能為按以下模式打印出星星層： */

function palindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return console.log(str == reversedStr);
}
console.log("------------4.回文 palindrome---------");
palindrome("bearaeb"); // returns true
palindrome("whatever revetahw"); // returns true
palindrome("Aloha, how are you today?"); // returns false

/*5.編寫一個名為pyramid的函式，功能為按以下模式打印出星星層： */

function pyramid(num) {
  let text = "";
  for (let i = 1; i <= num; i++) {
    if (i != 1) text += "\n";

    for (let space = num - i; space > 0; space--) {
      text += " ";
    }
    for (let stars = 1; stars <= i; stars++) {
      text += "*";
    }
    for (let paddingStar = 1; paddingStar < i; paddingStar++) {
      text += "*";
    }
  }
  console.log(text);
  return text;
}

console.log("------------5. pyramid---------");
pyramid(1);
//*
pyramid(2);
//  *
// ***
pyramid(4);
//    *
//   ***
//  *****
// *******

/*編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層： */

function inversePyramid(num) {
  let text = pyramid(num).split("\n");
  console.log(text);
  let inversedAnswer = "";
  do {
    inversedAnswer = inversedAnswer + text.pop() + "\n";
  } while (text.length > 0);
  console.log(inversedAnswer);
}

console.log("------------6. inverse-pyramid---------");
inversePyramid(4);
// *******
//  *****
//   ***
//    *

console.log("------------7. factorPrime---------");

/*編寫一個名為factorPrime的函式，唯一的參數是個整數n，
回傳值是一個String，表示n的質因數分解結果。 */

function factorPrime(num) {
  let text = "";
  let arr = [];
  for (let divisor = 2; num >= divisor; ) {
    // console.log(num, ",", divisor);
    if (num % divisor == 0) {
      arr.push(divisor);

      num /= divisor;
    } else {
      divisor++;
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    text = text + arr[i];
    if (i < arr.length - 1) {
      text += " x ";
    }
  }
  console.log(text);
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
