function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  mergedArray.sort(function(a, b) {
    return a - b;
  });
  return mergedArray;
}

let arr1 = [1, 2, 3, 5, 9];
let arr2 = [4, 6, 7, 8];

let result = mergeSortedArrays(arr1, arr2);
console.log(result);