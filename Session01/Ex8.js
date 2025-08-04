function insertArray(array1, array2, position) {
  if (position < 0 || position > array1.length) {
    console.log("Vị trí không hợp lệ.");
    return;
  }

  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (i === position) {
      for (let j = 0; j < array2.length; j++) {
        newArray.push(array2[j]);
      }
    }
    newArray.push(array1[i]);
  }
  if (position === array1.length) {
      for (let j = 0; j < array2.length; j++) {
        newArray.push(array2[j]);
      }
  }
  return newArray;
}
let array1 = [1, 2, 3, 7, 8];
let array2 = [4, 5, 6];
let position = 3;
let result = insertArray(array1, array2, position);
console.log(result); 

array1 = ['a', 'b', 'e', 'f'];
array2 = ['c', 'd'];
position = 2;
result = insertArray(array1, array2, position);
console.log(result); 

array1 = [1, 2, 3];
array2 = [4, 5, 6];
position = 5;
result = insertArray(array1, array2, position); 