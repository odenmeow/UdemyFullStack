class Product {
  static products = [];
  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.products.push(this);
  }

  static historyRetrieve() {
    const data = JSON.parse(localStorage.getItem("yoichiProducts"));

    if (data == null || data.includes(null)) {
      console.log("沒歷史紀錄或短缺");

      console.log("localData=", data);
      return "沒歷史紀錄或短缺";
    }
    Product.products = [];
    data.map(({ name, price }) => {
      new Product(name, Number(price));
      // 這邊直接改變了所以才不用回傳!
    });
  }
  static historyUpdate() {
    localStorage.setItem("yoichiProducts", JSON.stringify(Product.products));
  }
}
// 讀取商品資料
Product.historyRetrieve();

class PickedProduct {
  // 數字按鈕按下去，增加數量的同時， 創造物件
  // 物件不會全部被static log陣列接收 ， 如果有重複則覆蓋值。
  static pickedProducts = [];
  constructor(pickedName, pickedNumber) {
    this.pickedName = pickedName;
    this.pickedNumber = pickedNumber;
    let successChanged = 0;
    // 如果數字是空字串 從陣列移除
    if (this.pickedNumber == "") {
      let i;
      PickedProduct.pickedProducts.forEach((e, index) => {
        if (e.pickedName == this.pickedName) {
          i = index;
        }
      });
      // 下面會直接刪除 第i個物件
      console.log("i=", i);
      if (i != undefined) {
        PickedProduct.pickedProducts.splice(i, 1);
      }
    }
    // 非空字串 且 名稱重複則 改變數量
    PickedProduct.pickedProducts = PickedProduct.pickedProducts.map((p) => {
      if (p.pickedName == this.pickedName && this.pickedNumber != "") {
        if (isNaN(Number(this.pickedNumber))) {
          alert("不可非數字");
          return;
        }
        p.pickedNumber = this.pickedNumber;
        successChanged = 1;
      }
      return p;
    });
    // 如果數字是空字串就不理 不加入
    if (!successChanged && this.pickedNumber != "")
      PickedProduct.pickedProducts.push(this);
  }
}
class Order {
  static orders = [];
  // 生成訂單按鈕 按下去之後會把PickedProduct.pickedProducts=[] 清空 !
  constructor(productsLog, details, totalPrice, orderTime) {
    // 短路做法  JS 獨有 特性 ，JAVA無。
    this.productsLog = productsLog || Product.products;
    this.details = details || PickedProduct.pickedProducts;
    this.totalPrice = totalPrice || this.counting();
    this.orderTime = orderTime || generateTime();
    Order.orders.push(this);
    // 生成完畢.........無論 [選取資料] 從何取得都 清空。
    PickedProduct.pickedProducts = [];
  }
  counting() {
    let total = 0;
    // 不想改變、只想做事
    this.productsLog.map((product) => {
      let seletedProduct = this.details.find(
        (p) => product.name == p.pickedName
      );
      // 如果有東西自然會是 [] = truthy 如沒 則undefined =falsy
      if (seletedProduct) {
        total += seletedProduct.pickedNumber * product.price;
      }
    });
    return total;
  }
  // 只有當需要讀取歷史紀錄才改變物件的static 內容，不用擔心一般訂單
  static historyRetrieve() {
    let data = JSON.parse(localStorage.getItem("yoichiOrders"));

    if (data == null || data.includes(null)) {
      console.log("沒歷史紀錄或短缺");

      console.log("localData=", data);
      return "沒歷史紀錄或短缺";
    }
    Order.orders = [];
    // 針對每一筆訂單 解構
    data = data.map(({ productsLog, details, totalPrice, orderTime }) => {
      Product.products = []; //前後都要清空 ， 我只是做map 創新物件。
      PickedProduct.pickedProducts = [];
      //  如果displayProducts有需求 則使用讀取後的Order.orders內的資訊去查詢才正確!
      productsLog = productsLog.map(({ name, price }) => {
        return new Product(name, price);
      });
      details = details.map(({ pickedName, pickedNumber }) => {
        return new PickedProduct(pickedName, pickedNumber);
      });
      Product.products = [];
      PickedProduct.pickedProducts = [];
      return new Order(productsLog, details, totalPrice, orderTime); //如果有傳入則用傳入的資訊
    });
    Order.orders = data;
  }
  static historyUpdate() {
    localStorage.setItem("yoichiOrders", JSON.stringify(Order.orders));
  }
}

Order.historyRetrieve();
console.log(Order.orders);
// new Order();
// console.log(Order.orders);
// 下面是新增訂單addbtn、預設時、依照Product.products出現的。
// 後續我還會做修改頁面時使用的 (remove跟append)
function displayProducts(info, index) {
  let productsInfo;
  if (info == "new") {
    Product.historyRetrieve(); //依照最新設定顯示
  } else if (info == "revise") {
    // 如果要求顯示舊訂單則依log去顯示
    // Product.products = Order.orders[index].productsLog;
    Order.historyRetrieve(); // 這邊就會更改Product.products使用Order的歷史紀錄囉
    // 不能update覆蓋 商家的編輯售價
  }
  let block = document.querySelector(".cal-Area form");

  Product.products.forEach((product, index) => {
    let section = document.createElement("section");
    section.classList.add("yoichi-block", "yoichi-block-items");
    section.innerHTML = `<label class="yoichi-p-name" for="yoichi-product-${index}">
              <p>${product.name}</p></label
            >
            <input
              class="yoichi-p-number"
              type="text"
              id="yoichi-product-${index}"
              name="yoichi-product-${index}"
            />
            <div class="yoichi-p-btns">
              
              <div class="y-p-b-4">
                <button type="button" class="btn btn-warning">清空</button>
              </div>
              <div class="y-p-b-3">
                <button type="button" class="btn btn-info">3</button>
              </div>
              <div class="y-p-b-2">
                <button type="button" class="btn btn-info">2</button>
              </div>
              <div class="y-p-b-1">
                <button type="button" class="btn btn-info">1</button>
              </div>
              <div class="y-p-b-minus-1">
                <button type="button" class="btn btn-info">-</button>
              </div>
            </div>`;
    block.append(section);
  });
}
displayProducts("new");

(function numberBtnsAppendFunction() {
  let btnsGroup = document.querySelectorAll(".yoichi-p-btns");
  btnsGroup.forEach((group) => {
    let btns = group.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // console.log(e.target.innerText);  + - 1 2 3 4 5
        // 先得知目前數字為多少
        let section = e.target.parentElement.parentElement.parentElement;
        // console.log(section);
        let pName = section.querySelector(".yoichi-p-name p");
        let pNumber = section.querySelector(".yoichi-p-number");
        if (
          !(pNumber.value == "") && // 空字串is ok 視為0
          !Number(pNumber.value) && // 數字 is ok
          !(Number(pNumber.value) == 0) // 數字 0 is ok     以上皆可繼續執行
        ) {
          return;
        }
        if (pNumber.value == null) pNumber.value = 0;
        let theNumber = Number(pNumber.value);
        switch (e.target.innerText) {
          case "1":
            theNumber++;
            break;
          case "-":
            theNumber--;
            break;
          case "2":
            theNumber += 2;
            break;
          case "3":
            theNumber += 3;
            break;
          case "清空":
            theNumber = "";
        }
        if (theNumber <= 0) {
          pNumber.value = "";
        } else {
          pNumber.value = theNumber;
        }
        new PickedProduct(pName.innerText, pNumber.value);
        // console.log(pName.innerText, pNumber.value);
        // console.log(PickedProduct.pickedProducts);
        calculateAll();
      });
    });
  });
})();
function calculateAll() {
  let subTotal = document.querySelector(".yoichi-subtotalValue");
  let subSum = 0;
  let discountSum = 0;
  // 如果revise則以 order歷史紀錄算錢 如果new則自動以localStorage算錢
  PickedProduct.pickedProducts.forEach((pp) => {
    // undefined if not found.
    let product = Product.products.find(
      (product) => product.name == pp.pickedName
    );
    subSum += product.price * pp.pickedNumber;
    if (pp.pickedName == "蔥肉串" && Number(pp.pickedNumber) >= 3) {
      discountSum += Math.floor(Number(pp.pickedNumber) / 3) * 5;
    }
  });
  subTotal.innerText = subSum;
  let discount = document.querySelector(".yoichi-discountValue");
  discount.innerText = discountSum;
  let total = document.querySelector(".yoichi-totalValue");
  total.innerText = subSum - discountSum;
  if (subTotal.innerText == "0") {
    subTotal.innerText = "";
    discount.innerText = "";
    total.innerText = "";
  }
}
function calcuDiscount() {
  PickedProduct.pickedProducts.forEach((pp) => {
    let;
  });
}
function calcuTotal() {}

(function createOrderBtn() {
  let btnSend = document.querySelector(".yoichi-order-send");
  btnSend.addEventListener("click", (e) => {
    // new Order();
    let total = document.querySelector(".yoichi-totalValue");
    if (total.innerText == "" || total.innerText == "0") {
      return; //不做事
    }
    // if找不到 .revise 則新增訂單，否則修改Orders的Order內容即可 !
    new Order();
    Order.historyUpdate();
    // else{ 修改ooxx}
    console.log(Order.orders);
    (function clearScreen() {
      let discount = document.querySelector(".yoichi-discountValue");
      discount.innerText = "";
      let total = document.querySelector(".yoichi-totalValue");
      total.innerText = "";
      let subTotal = document.querySelector(".yoichi-subtotalValue");
      subTotal.innerText = "";
      let numberInputs = document.querySelectorAll(".yoichi-p-number");
      numberInputs.forEach((numberInput) => {
        numberInput.value = "";
      });
    })();
  });
})();
function generateTime() {
  let now = new Date();

  // 处理日期部分
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Taipei",
  };
  let dateStr = now.toLocaleDateString("zh-TW", dateOptions);

  // 处理时间部分
  let timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Asia/Taipei",
  };
  let timeStr = now.toLocaleTimeString("zh-TW", timeOptions);
  let hour = timeStr.substring(0, 2);
  let other = timeStr.substring(2);
  hour = Number(hour) % 24;
  timeStr = hour.toString().padStart(2, "0") + other;
  return { dateStr, timeStr };
}
