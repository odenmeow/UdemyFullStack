let names = ["Onini", "Umi", "Davinci", "Cate"];

names.sort((a, b) => {
  if (a.length > b.length) {
    return 1; // 1 代表 第二個參數要在後面
  } else if (a.length < b.length) {
    return -1; // -1 代表 第二個參數要在前面
  } else {
    return 0; // 保持不變
  }
});
console.log(names);