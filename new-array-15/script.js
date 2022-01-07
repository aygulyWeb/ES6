
// 15)  Дан массив с числами. Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень и этих чисел

let arr = [9, 2, -4, 25, -5, 6];

let newArr = arr.filter(elem => elem > 0)
console.log(newArr)

let kvadrat = newArr.map(item => Math.round(Math.sqrt(item)))

console.log(kvadrat)


