// Модуль для работы с базой данных.

;(function () {
	"use strict"

	// БД.
	const database = {
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

	const api = {}

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