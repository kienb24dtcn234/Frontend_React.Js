function findFirst<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of arr) {
    if (predicate(item)) return item;
  }
  return undefined;
}
const numbers = [1, 5, 7, 9, 12, 15];
const firstDivisibleByTwo = findFirst(numbers, n => n % 2 === 0);
console.log(firstDivisibleByTwo); 
