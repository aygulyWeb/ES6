
// 3) Дан массив с числами.
// Сделайте из него массив, состоящий из квадратов этих чисел

let arr = [2, 3, 4, 5, 6];
let newArr = [];

arr.forEach((item) => {
	newArr.push(item * item)

});
console.log(newArr)