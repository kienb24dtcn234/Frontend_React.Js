function tinhTongCacMang(...args) {
  let mangTong = [];

  for (let mang of args) {
    if (Array.isArray(mang)) {
      let tong = mang.reduce((acc, val) => acc + val, 0);
      mangTong.push(tong);
    } else {
      console.log("Tham số không phải là mảng:", mang);
    }
  }

  return mangTong;
}

let ketQua = tinhTongCacMang([1, 2], [6, 7, 8], [12, 8]);
console.log(ketQua); 