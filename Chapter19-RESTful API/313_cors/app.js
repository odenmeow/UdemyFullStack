async function getData() {
  try {
    let data = await fetch("http://127.0.0.1:3000/students");
    let result = await data.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getData();
