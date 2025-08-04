// Khai báo biến số nguyên với const
const a = 5;

// Khai báo biến mảng với const
const arr = [1, 2, 3];

// Thử thay đổi giá trị của biến số nguyên
// a = 10; // Lỗi: Assignment to constant variable.

// Thêm một phần tử vào mảng
arr.push(4);

// In ra giá trị của các biến
console.log("Giá trị của a:", a);
console.log("Giá trị của arr:", arr);

// Giải thích:
// - const dùng để khai báo một biến hằng, tức là giá trị của biến không thể bị gán lại sau khi đã được khởi tạo.
// - Vì vậy, khi cố gắng gán lại giá trị mới cho biến 'a' (a = 10), trình duyệt sẽ báo lỗi "Assignment to constant variable.".
// - Tuy nhiên, const không có nghĩa là giá trị bên trong biến là bất biến (immutable).
// - Trong trường hợp biến 'arr' là một mảng, 'arr' vẫn trỏ đến cùng một vùng nhớ trong bộ nhớ.
// - Do đó, chúng ta có thể thay đổi giá trị bên trong mảng (ví dụ: thêm, sửa, xóa phần tử) mà không gây ra lỗi.
// - Bởi vì chúng ta không gán lại 'arr' cho một mảng mới, mà chỉ thay đổi nội dung của mảng mà 'arr' đang tham chiếu đến.