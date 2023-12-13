/*             child node、NodeList             */
let body = document.querySelector("body"); // element object
console.log(body);

console.log(body.childNodes);

// 幾乎都是文件 沒寫到code= =

// ## 表格1 :

// | Methods                    | Rt Type                          |
// |:--------------------------:|:--------------------------------:|
// | getElementById(id)         | Element Object                   |
// | ...ByClassName(className)  | HTML Collection內部為Element Object |
// | querySelector(selector)    | Element Object                   |
// | querySelectorAll(selector) | NodeList 內部為Nodes                |

// ## 表格2 :

// |           | NodeList                     | HTML Collection              |
// | --------- | ---------------------------- | ---------------------------- |
// | 特徵        | 類Array、no push pop (un)shift | 類Array、no push pop (un)shift |
// | motion    | static                       | dynamic                      |
// | elements  | nodes                        | element objects              |
// | attribute | length,index                 | length,inde                  |
// | forEach   | allowed                      | not allowed                  |
