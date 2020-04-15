/*
	Модуль раутера.
	Раутер переносит данные от основной вкладки в другую.
*/

;(function () {
	"use strict"

	/*
		api - не просто объект, а экземпляр класса EventEmitter. Теперь можно 
		подписываться на события, которые могут возникать в базе данных.
	*/
	const api = new EventEmitter

	// Повесить обработчик события изменения состояния адресной строки.
	window.addEventListener('popstate', () => api.emit('update'))

	// Метод получает объект из адресной строки (после символа #).
	api.getHashObject = function getHashObject () {
		// Если в адресной строке отсутствует #:
		if (!location.hash) {
			return {}
		}

		/*
			Вернуть объект, который прочитали в адресной строке, 
			от первого символа "#" которого избавились, декодировали его, 
			и десериализовали.
		*/
		return JSON.parse(decodeURI(location.hash).slice(1))
	},

	// Метод записывает объект в адресную строку.
	api.setHashObject = function setHashObject (obj = null) {
		// Если объект не передали или передали объект без ключей:
		if (!obj || !Object.keys(obj).length) {
			location.hash = ''
		}

		// Если объект передали:
		else {
			location.hash = JSON.stringify(obj)
		}
	}

	// Сделать api доступным снаружи функции IIFE как Database.
	window.Router = api
})();