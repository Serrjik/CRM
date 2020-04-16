// Модуль для работы с базой данных.

;(function () {
	"use strict"

	// БД.
	const database = {
		// Последние просматриваемые заказы.
		lastReviewed: {
			// Сколько должно быть последних просматриваемых заказов.
			maxLength: 4,
			// id тех заказов, которые просматривали.
			orderIds: [1, 2, 3, 4]
		},
		
		// Каждый элемент массива orders - отдельный заказ.
		// id заказа, ФИО заказчика, Заказанный товар, Цена товара, Статус заказа, Дата заказа.
		orders: []
	}

	// Загрузить БД из localStorage.
	load()

	/*
		api - не просто объект, а экземпляр класса EventEmitter. Теперь можно 
		подписываться на события, которые могут возникать в базе данных.
	*/
	const api = new EventEmitter

	// Метод записывает в БД заказы для отладки проекта.
	api.seed = function seed (orders) {
		// Записать копию массива ради защиты от мутаций.
		database.orders = getCopy(orders)
		// Сохранить состояние БД.
		save()
		// Сообщить об изменении базы данных (вызвать событие update).
		api.emit("update")
	}

	// Метод возвращает заказ по его id.
	api.getOrderById = function getOrderById (id) {
		const order = database.orders.find(x => x.id === id)

		// Если заказ найден:
		if (order) {
			return getCopy(order)
		}

		return null
	}

	// Функция возвращает последние просматриваемые заказы.
	api.getLastReviewed = function getLastReviewed () {
		// Просто id заказов.
		// return database.lastReviewed.orderIds
		// Заказы.
		return database.lastReviewed.orderIds.map(x => api.getOrderById(x))
	}

	/*
		Функция добавляет заказ в последние просматриваемые заказы. 
		Принимает id последнего просмотренного заказа.
	*/
	api.addLastReviewed = function addLastReviewed (orderId) {
		/*
			Вставить последний просмотренный заказ в начало массива последних 
			заказов. Если в массиве станет заказов больше, чем максимально 
			разрешенное количество, последний в массиве заказ убрать.
		*/
		// Если последний просмотренный заказ уже находится в массиве:
		if (database.lastReviewed.orderIds.includes(orderId)) {
			const index = database.lastReviewed.orderIds.indexOf(orderId)

			// Если просмотренный заказ находится НЕ вначале массива:
			if (index !== 0) {
				// Вырезать из массива последний просмотренный заказ:
				database.lastReviewed.orderIds.splice(index, 1)
				// Поместить последний просмотренный заказ в начало массива.
				database.lastReviewed.orderIds.unshift(orderId)
			}
		}
		
		// Если последний просмотренный заказ ещё НЕ находится в массиве:
		else {
			// Массив из id не более maxLength последних заказов.
			database.lastReviewed.orderIds = 
				[orderId, ...database.lastReviewed.orderIds].
					slice(0, database.lastReviewed.maxLength)
		}
		
		// Сохранить состояние БД.
		save()
		// Сообщить об изменении базы данных (вызвать событие update).
		api.emit("update")
	}

	// Сделать api доступным снаружи функции IIFE как Database.
	window.Database = api

	// Функция возвращает копию объекта.
	function getCopy (x) {
		return JSON.parse(JSON.stringify(x))
	}

	/* 
		Функция сохраняет текущую БД в localStorage. Должна вызываться 
		каждый раз, когда изменяется состояние БД.
	*/
	function save () {
		localStorage.setItem('__CRM_DATABASE__', JSON.stringify(database))
	}

	// Функция загружает БД из localStorage.
	function load () {
		// Если в localStorage уже присутствует сохранённая БД:
		if (localStorage.getItem('__CRM_DATABASE__')) {
			// Объединить сохранённую БД с текущим состоянием БД.
			Object.assign(
				database, 
				JSON.parse(localStorage.getItem('__CRM_DATABASE__'))
			)
		}
	}
})();