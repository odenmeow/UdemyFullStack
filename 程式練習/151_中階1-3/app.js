function isSubsequence(subStr, str) {
  let adder = 0;
  let deviation = str.length - subStr.length;
  while (adder <= deviation) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i + adder] == subStr[i]) {
        console.log(counter, "目前");
        counter++;
        if (counter == subStr.length) {
          return true;
        }
      } else {
        adder++;
        break;
      }
    }
  }
  return false;
}

console.log(isSubsequence("bc", "abbc"));

/* 
老鼠毒藥問題: 
有 100 個一模一樣的瓶子，其中有 99 瓶是普通的水，有一瓶是毒藥。
任何喝下毒藥的生物都會在一星期之後死亡。
現在，你有一星期的時間，請問你最少可以用幾隻老鼠就檢測出毒藥是哪一瓶，以及如何檢驗出哪個瓶子裡有毒藥？
若有1000個一模一樣的瓶子，其中有 999 瓶是普通的水，有一瓶是毒藥，那又需要最少用幾隻老鼠呢?*/
// 000=0
// 001=1
// 010=2
// 011=3
// 100=4
// 101=5
// 110=6
// 111=7
function whoIsPoison() {}

/*
100位囚犯排排站，站在奇數位的人槍斃，偶數位留下，不斷重複這個過程直到剩下一個人。
請問，若要活到最後，一開始要站在100中的第幾號位置? 

1 2 3 4 ..... 100  = 100            2^0   

2 4 6 .....98 = 50                  2^1

4 8 12 16 ...96 = 25                2^2

8 16 24 .....   = 12.5 0.5奇數=消失  2^3   從8開始能活著  ，100=2^7 =128 , 2^6=64

16 32 48 64 80 96 = 6 個            2^4  = 10 00

32 64 96 = 3 個  /2=1.5             2^5  = 10 000

64 = 1個留下                        2^6  = 100 000

會發現 每次都除二 所以往後移 1 位元

能夠承受最多shift才能活到最後!  反而數字大未必能活到最後 !

能除最多次、least digital 又不會等於1 (或者說最後等於1) 才能活


若有1000名囚犯呢?一開始要站在第幾號位置? */
// 類推， 512 可活
