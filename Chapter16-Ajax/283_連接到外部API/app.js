// let output = document.querySelector("#output");
// async function hello() {
//   try {
//     let result = await fetch(
//       "https://v2.jokeapi.dev/joke/Programming?type=single"
//     );
//     let data = await result.json();
//     output.innerText += data.joke + "\n";
//     console.log(data.joke);
//   } catch (err) {
//     console.log(err);
//   }
// }
// let btn = document.querySelector("#new-joke");
// btn.addEventListener("click", (e) => {
//   hello();
// });

//            openWeather

let key = "26cf0689f2e001e6feedad0188f8a6d6";
let lat;
let lon;
async function weather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

weather("Taipei");
