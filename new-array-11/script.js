// 11) Дан массив с числами. Найдите сумму этих чисел

let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.reduce((sum, elem) => (sum + elem))
console.log(newArr)

