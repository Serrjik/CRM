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
		orders: [
			// id заказа, ФИО заказчика, Заказанный товар, Цена товара, Статус заказа, Дата заказа.
			{ id: 1, fullname: "Алексей Данчин", good: "Бумага для принтера", price: 500, status: "new", date: Date.now() },
			{ id: 2, fullname: "Серьгей Лукян", good: "Краски для принтера", price: 2000, status: "process", date: Date.now() },
			{ id: 3, fullname: "Мария Крава", good: "Принтер", price: 12000, status: "back", date: Date.now() }
		]
	}

	/* ====================
		Наполнение БД
	==================== */

	// const names = ["Алексей Данчин", "Серьгей Лукян", "Мария Крава", 
	// 	"Сергей Григорович", "Иван Иванов", "Иван Петров", "Джуд Лоу", 
	// 	"Олег Тактаров", "Александр Уснич", "Аня Нехай", "Наташа Петрова", 
	// 	"Мария Распутина", "Дмитрий Титовец", "Максим Пашкевич"]

	// const goods = ["Бумага для принтера", "Краски для принтера", "Принтер", 
	// 	"Фотоальбом", "Полимерная ванна"]

	// const prices = [100, 300, 500, 1000, 1500, 1800, 2000, 12000, 16000, 15500, 
	// 	20000 ]

	// const statuses = ["new", "process", "back", "archived", ]

	// for (let i = 4; i < 101; i++) {
	// 	// const id = i

	// 	const name = names[getRandomInt(names.length)]

	// 	const good = goods[getRandomInt(goods.length)]

	// 	const price = prices[getRandomInt(prices.length)]

	// 	const status = statuses[getRandomInt(statuses.length)]
		
	// 	const order = {
	// 		"id": i,
	// 		"fullname": name,
	// 		"good": good,
	// 		"price": price,
	// 		"status": status,
	// 		"date": Date.now()
	// 	}
		
	// 	database.orders.push(order)
	// }

	/* ====================
		// Наполнение БД
	==================== */

	/*
		api - не просто объект, а экземпляр класса EventEmitter. Теперь можно 
		подписываться на события, которые могут возникать в базе данных.
	*/
	const api = new EventEmitter

	// Метод записывает в БД заказы для отладки проекта.
	api.seed = function seed (orders) {
		// Записать копию массива ради защиты от мутаций.
		database.orders = getCopy(orders)
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

			// Если просмотренный заказ не находится вначале массива.
			if (index !== 0) {
				// Поместить последний заказ в начало массива.
				database.lastReviewed.orderIds.
					unshift(database.lastReviewed.orderIds[index])

				/*
					Начиная с места, где был последний заказ, сдвинуть элементы 
					влево (поместить на место последнего заказа элемент справа).
				*/
				for (let i = index + 1; 
					i < database.lastReviewed.orderIds.length - 1; i++) {
					database.lastReviewed.orderIds[i] = database.lastReviewed.orderIds[i + 1]
				}

				// Удалить последний элемент массива.
				database.lastReviewed.orderIds.pop()
			}
		}
		
		// Если последний просмотренный заказ уже находится в массиве:
		else {
			// Массив из id не более maxLength последних заказов.
			database.lastReviewed.orderIds = 
				[orderId, ...database.lastReviewed.orderIds].
					slice(0, database.lastReviewed.maxLength)
		}
		
		// Сообщить об изменении базы данных (вызвать событие update).
		api.emit("update")
	}

	// Сделать api доступным снаружи функции IIFE как Database.
	window.Database = api

	function getCopy (x) {
		return JSON.parse(JSON.stringify(x))
	}

	// Функция возвращает случайное целое число от 0 до max невключительно.
	// function getRandomInt(max) {
	// 	return Math.floor(Math.random() * Math.floor(max));
	// }
})();