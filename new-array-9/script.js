// 9) Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы

let arr = [1, 2, [3, 4], 5, [6, 7]];

let newArr = arr.filter(elem => Array.isArray(elem))
console.log(newArr)

