function reverseArray<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
const nums = [1, 2, 3];
const words = ["a", "b", "c"];
console.log(reverseArray(nums));      
console.log(reverseArray(words));    