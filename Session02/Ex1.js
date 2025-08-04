function sum(numbers) {
  // Khởi tạo biến tổng là 0
  let total = 0;

  // Duyệt qua từng số trong mảng
  for (let number of numbers) {
    // Nếu là số chẵn thì cộng vào tổng
    if (number % 2 === 0) {
      total += number;
    }
  }

  // Trả về tổng cuối cùng
  return total;
}

// Gọi hàm thử với mảng ví dụ
const result = sum([1, 2, 3, 4, 5, 6]);

console.log(result); // Kết quả: 12
