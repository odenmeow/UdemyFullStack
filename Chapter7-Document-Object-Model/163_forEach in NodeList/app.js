/*                       ForEach                      */
/*    NodeList          */
console.log("-----------NodeList------------");
let hellos = document.querySelectorAll(".hello");
console.log(hellos);
hellos.forEach((e) => console.log(e));

/*    HTMLCollection          */
console.log("-----------HTMLCollection------------");
hellos = document.getElementsByClassName("hello");
console.log(hellos);
// hellos.forEach((e) => console.log(e));  //無法使用，這是NodeList才有。
