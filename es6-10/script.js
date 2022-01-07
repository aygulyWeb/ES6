
//10) Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней. 

let str = "abocdofgo";

let count = 0;

for (let letter of str) {
	if (letter == 'o') {
		count++;
	}
}
console.log(count)


