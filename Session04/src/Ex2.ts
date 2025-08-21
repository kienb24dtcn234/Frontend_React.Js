let diemSinhVien: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let tongDiem: number = 0;
for (let i = 0; i < diemSinhVien.length; i++) {
    tongDiem += diemSinhVien[i];
}
let diemTrungBinh: number = tongDiem / diemSinhVien.length;
let diemTrungBinhLamTron = parseFloat(diemTrungBinh.toFixed(2));
console.log("Điểm trung bình:", diemTrungBinhLamTron);
