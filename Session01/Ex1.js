for (let i = 0; i <= 5; i++) {
  console.log("Giá trị của i trong vòng lặp: " + i);
}

// Thử truy cập i bên ngoài vòng lặp
// console.log("Giá trị của i ngoài vòng lặp: " + i); // Lỗi: i is not defined
// Kết luận: Biến i được khai báo bằng let trong vòng lặp for chỉ có phạm vi trong vòng lặp đó.
// Khi cố gắng truy cập i bên ngoài vòng lặp, sẽ xảy ra lỗi "i is not defined".
// Điều này chứng minh rằng let có phạm vi khối (block scope).