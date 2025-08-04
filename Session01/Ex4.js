function checkParity(a) {
  // Kiểm tra nếu a không phải là số
  if (typeof a !== 'number') {
    return "a is not a number";
  }

  // Nếu là số chẵn
  if (a % 2 === 0) {
    return a + " is an even number";
  }

  // Nếu là số lẻ
  return a + " is an odd number";
}
