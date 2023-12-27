let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

// fetchPromise.then((response) => {
//   //   let jPromise = response.json(); // 本身也是promise物件
//   //   console.log(jPromise);
//   response.json().then((data) => {
//     // 把response轉成物件
//     console.log(data);
//   });
//   console.log(response);
// });

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
