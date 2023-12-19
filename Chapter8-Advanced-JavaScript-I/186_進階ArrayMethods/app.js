/*               進階array                 */

/*          arr.map (callbackfn)        */

let languages = ["Java", "C++", "Python", "JavaScript"];
// let result = languages.map(function (lang) {
//   return lang.toUpperCase();
// });
let result = languages.map((lang) => lang.toUpperCase());
console.log(result);

// 資源包
const languagesRes = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let resultRes = languagesRes.map((lang) => {
  return lang.name.toUpperCase();
});
console.log("RES: ", resultRes);
/*          arr.find (callbackfn)        */

let resultFind = languagesRes.find((lang) => {
  return lang.popularity > 9.5;
});
console.log(resultFind);
// { name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot' }

let resultFilter = languagesRes.filter((lang) => {
  return lang.trending == "hot";
});
console.log(resultFilter);

let resultSome = languagesRes.some((lang) => {
  return lang.popularity < 5;
});
console.log(resultSome);
let resultEvery = languagesRes.every((lang) => {
  return lang.popularity > 5;
});
console.log(resultEvery);
