/*            Fibonacci                */
// 其實有公式解
// 0, 1, 1, 2, 3, 5, 8 ,13 ,21 ,34 ,55 ,89...
function fibo(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
}
console.log(fibo(6)); // 0算第一項  !

// n越大   n 跟 n-1的比例 越接近 1.618.....黃金比例!

for (let i = 1; i < 30; i++) {
  console.log(fibo(i) / fibo(i - 1)); // 分母小心不能0
}

// Iteration解

function fiboIterative(n) {
  let fib = [0, 1];
  if (n <= 2) {
    return fib[n - 1];
  }
  for (let i = 2; i <= n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib[fib.length - 1];
}
console.log(fiboIterative(8));
// 但是上面其實還是占空間 因為沒必要用push一直增加 這屬於全都要
// 以下是只要答案

function fibTarget(n) {
  // 0 1 1   分別是 item 0,1,2
  // item 2-> 1   得第二項 做一次
  // item 3-> 2
  // item 4-> 3
  let fib = [0, 1, 1];
  if (n <= 0) {
    return "不可 < 1";
  }
  if (n <= 2) {
    return fib[n - 1];
  }
  for (let i = 1; i < n; i++) {
    fib[2] = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = fib[2];
  }
  return fib[2];
}
console.log(fibTarget(6));

// let aaa = [1, 2, 3];
// console.log(aaa[-2]);  undefined
// const arr = [1, 2, 3];
// arr[4] = 10;
// console.log(arr); // [1, 2, 3, <1 empty item>, 10]
