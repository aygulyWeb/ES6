// 5) Дан массив с числами. 
// Проверьте то, что в нем есть отрицательные элементы

let arr = [2, -3, 1, 0, -4, 5]

let newArr = arr.some(elem => elem < 0)
console.log(newArr)

