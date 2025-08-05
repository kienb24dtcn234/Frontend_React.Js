function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      total += number;
    }
  }
  return total;
}
const result = sum([1, 2, 3, 4, 5, 6]);

console.log(result); 
