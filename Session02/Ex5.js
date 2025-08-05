let phoneBooks = [];
function addContact(name, phone, email) {
  const contact = {
    name: name,
    phone: phone,
    email: email
  };
  phoneBooks.push(contact);
}
function displayContact() {
  console.log("Danh bạ điện thoại:");
  if (phoneBooks.length === 0) {
    console.log("Chưa có liên hệ nào.");
    return;
  }
  for (let i = 0; i < phoneBooks.length; i++) {
    const contact = phoneBooks[i];
    console.log(`${i + 1}. Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${contact.email}`);
  }
}
displayContact();
addContact("Nguyễn Thế Kiên", "0984178465", "thekien780@gmail.com");
addContact("Nguyễn Thị B", "0987654321", "b@gmail.com");
