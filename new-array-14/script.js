
// 14) Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти)

let arr = [1, 2, 4, 3, 5, 6];

let count = 0;


let newArr = arr.reduce((sum, elem) => {

	if (sum > 10) {
		return count

	} else {
		count++;
		return sum + elem;
	}

})
console.log(count)


