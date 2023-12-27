console.log("開始執行");
setTimeout(() => {
  console.log("兩秒號才會出現");
}, 2000);
console.log("結束");
let max = 1000000;
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  // 做到最後再去判斷n是否大於1，如果不大於1
  //    那就還是非質數
  return n > 1;
}
const random = (max) => Math.floor(Math.random() * max);
function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(max);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  console.log("被呼叫了" + quota);
  return primes;
}

const output = document.querySelector("div#output");
const button = document.querySelector("#generate");
button.addEventListener("click", () => {
  const quota = document.querySelector("#number");

  output.innerText = generatePrimes(quota.value);
});
