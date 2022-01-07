
// 9)  Дан массив с числами, найдите сумму элементов этого массива. 

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let sum = 0;

// for (let key of arr) {
// 	sum += key;
// }

arr.forEach(item => {
	sum += item
});

console.log(sum)