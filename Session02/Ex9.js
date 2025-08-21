let student = {
    name: "Dev",
    age: 20,
    listMonHoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score : 7.5},
        { subject: "Physics", score : 6},
        { subject: "Literature", score : 8.5},
    ]
}
function getStudentSummary(student) {
    //B1: lay cac thong tin can thiet (Destructuring)
    let { name, age, listMonHoc } = student;
    //B2: Tinh diem trung binh
    let average = listMonHoc.reduce((acc, value) => acc + value.score, 0) / listMonHoc.length;
    let rank = average >= 8.5 ? "Hoc sinh gioi" : average >= 7 ? "Hoc sinh kha" : average >= 5 ? "Trung Binh" : "Yeu";
    //B3: Sap xep mang cac mon hoc theo diem
    listMonHoc.sort((a, b) => a.score - b.score);
    //B4: In ra ket qua
    console.log(`Ten: ${name}, Tuoi: ${age}, Diem trung binh: ${average}, Xep loai: ${rank}, Mon hoc tot nhat : ${listSubjects[0].subject} (${listSubjects[0].score}), Mon hoc yeu nhat: ${listSubjects[listSubjects.length - 1].subject} (${listSubjects[listSubjects.length - 1].score})`);

}