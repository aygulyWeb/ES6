// 10) Дан массив с числами. 
// Посчитайте количество отрицательных чисел в этом массиве

let arr = [-1, 2, -3, 4, -5, -6, 7];

let newArr = arr.filter(elem => elem < 0)
console.log(newArr.length)

