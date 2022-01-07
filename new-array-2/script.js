
//2)  Дан массив с числами. Найдите сумму этих чисел.

let arr = [2, 3, 4, 5, 6];
let sum = 0;

arr.forEach((item) => { sum += item; })
console.log(sum)