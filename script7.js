let arr = [-10, "flowers", 125, "birds", 34, 0, true, 1000, 111, 4, 99, 33, 0, 11];
let even = [];
let odd = [];
let nullElem = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    if (arr[i] % 2 == 0 && arr[i] != 0) {
      even.push(arr[i]);
    } else if (arr[i] == 0) {
      nullElem.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
}

console.log('Четных чисел - ' + even.length);
console.log('Нечетных чисел - ' + odd.length);
console.log('Нулей - ' + nullElem.length);