function findElement<T>(arr: T[], value: T): T | undefined {
  for (const item of arr) {
    if (item === value) return item;
  }
  return undefined;
}
console.log(findElement([1, 3, 5, 7, 9], 5));          
console.log(findElement(["a", "b", "c"], "d"));        
console.log(findElement([true, false, true], false));  
