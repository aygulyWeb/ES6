
// 6)  Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. 
// Запишите соответствующие значения в переменные name, surname и age. 
// Сделайте так, чтобы, если какое-то значение не задано - 
// оно принимало следующее значение по умолчанию: 
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.  

let info = {
	// name: 'Петр',
	surname: 'Петров',
	age: '20 лет',
}

let { name = 'Аноним', surname = 'Анонимович', age = '? лет' } = info;

console.log(name)
console.log(surname)
console.log(age)


