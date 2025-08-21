function toNumber(value: string | number): number | null {
  if (typeof value === "number") {
    return value;
  }
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);

  if (numA === null || numB === null) {
    return "Dữ liệu không hợp lệ";
  }

  return numA + numB;
}

function subtract(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);

  if (numA === null || numB === null) {
    return "Dữ liệu không hợp lệ";
  }

  return numA - numB;
}

function multiply(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);

  if (numA === null || numB === null) {
    return "Dữ liệu không hợp lệ";
  }

  return numA * numB;
}

function divide(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);

  if (numA === null || numB === null || numB === 0) {
    return "Dữ liệu không hợp lệ";
  }

  return numA / numB;
}
console.log(add("10", 5));         
console.log(subtract("20", "4"));  
console.log(multiply("a", 3));     
console.log(divide(12, "0"));      