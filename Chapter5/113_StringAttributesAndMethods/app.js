/*         StringAttributesAndMethods             */
/*         length             */
let str = "oni ";
console.log("'oni ',Length is " + str.length);
/*         [n]             */
let str2 = "helloween oni";
console.log("str2[4] is: " + str2[4]);
console.log("證明從0開始數");

/*     [-100]    [100]  ==undefined           */
console.log("str2[100] is: " + str2[100]);
console.log("str2[-100] is: " + str2[-100]);
/*            slice()              */

let str3 = "oni umi wonderful";
console.log("str3.slice(2,5)= " + str3.slice(2, 6));
console.log("str3.slice(2)= " + str3.slice(2));

/*           indexOf(subString) 回傳substr開頭位置 找不到return -1         */

let str4 = "oni umi wonderful";
console.log("oni umi wonderful ，找到了，從" + str4.indexOf("wond") + "開始");
console.log("oni umi wonderful ，找不到=" + str4.indexOf("wondd"));

/*           toUpper/Lower Case()         */
let str5 = "oni";
let str6 = "UMI";

console.log("str5變大" + str5.toUpperCase());
console.log("str6變小" + str6.toLowerCase());
console.log("str5,str6=" + str5 + "," + str6);
// 不會影響原始物件大小寫!

/*         split(pattern)           */
let sentence = "Today is a good day";
// "Today","is","a","nice","day"
let result = sentence.split(" ");
console.log(result);
result = sentence.split("o");
console.log(result);

/*         startsWith           */
console.log(sentence.startsWith("Tod"));
console.log(sentence.endsWith("ay"));
console.log(sentence.includes("a "));
/*        charCodeAt       */
console.log(sentence.indexOf("a "));
console.log(sentence.charAt(9));
console.log(sentence.charCodeAt(9));
