
// 12)  Дан объект с настройками, например, {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}.
// Сделайте функцию, которая получает этот объект, извлекает из него все настройки в соответствующие переменные 
// и для элемента с указанным id (в нашем случае это 'elem') ставит заданные CSS свойства.
// В объекте могут быть только эти ключи, однако, какой-либо ключ (кроме id) может быть не задан -
// в этом случае пусть возьмутся следующие значения по умолчанию: color: 'blue', border: '1px solid red', font: '15px Arial'. 


let info = {
	id: 'elem',
	color: 'blue',
	border: '1px solid red',
	font: '15px Arial'
};


let keyInfo = ({ id = '1px solid', color = 'blue', border = '1px solid red', font = '15px Arial' }) => {
	console.log(`${id}\n${color}\n${border}\n${font}`)


}

keyInfo(info)

