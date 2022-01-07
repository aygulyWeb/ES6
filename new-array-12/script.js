// 12) Дан массив с числами. Найдите сумму первых N элементов
// до первого нуля. 
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, 
// так как дальше стоит элемент с числом 0

let arr = [1, 2, 3, 0, 4, 5, 6];

let summa1 = 0;

let newArr = arr.reduce((sum, elem) => {
	if (elem == 0) {
		summa1 = sum
	} else { return sum + elem }

})

console.log(summa1)


