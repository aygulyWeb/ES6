// 13)  Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. 
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, 
// так как дальше стоит элемент с числом 0.

let arr = [1, 2, 3, 0, 4, 5, 6];

let summa1 = 0;

let newArr = arr.reduceRight((sum, elem) => {
	if (elem == 0) {
		summa1 = sum
	} else { return sum + elem }

})

console.log(summa1)


