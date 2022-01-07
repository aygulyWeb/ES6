// 1) Дан массив с числами. 
// Создайте новый массив, состоящий из квадратов этих чисел


let arr = [2, 3, 5, 6]

let newArray = arr.map(index => (index * index))

console.log(newArray)