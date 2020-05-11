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
		// Максимальное количество отображаемых на странице заказов.
		maxOrders: 10,
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

	// Метод обновляет заказ в БД. Принимает id заказа и объект с данными заказа.
	api.updateOrderById = function updateOrderById (orderId, updated) {
		// Заказ, соответствующий принятому orderId.
		const order = database.orders.find(x => x.id === orderId)

		// Обновить информацию о заказе.
		order.fullname = updated.fullname
		order.good = updated.good
		order.price = updated.price
		order.date = updated.date
		order.status = updated.status

		// Сохранить состояние БД.
		save()
	}

	/* 
		Метод возвращает объект с заказами, подходящими под фильтр, 
		и количеством страниц, по которым разбились эти заказы. 
		*/
	api.getOrders = function getOrders (state) {
		// Копия состояния приложения.
		state = getCopy(state)

		// Копия всех заказов.
		let orders = getCopy(database.orders)

		// Если фильтр по ИФО не пустой:
		if (state.fullname) {
			const fullnameLowercase = state.fullname.toLowerCase()

			orders = orders.filter(x => x.fullname.toLowerCase()
				.includes(fullnameLowercase))
		}

		// Если фильтр по товару не пустой:
		if (state.good) {
			orders = orders.filter(x => x.good === state.good)
		}

		// Если фильтр по статусу не пустой:
		if (state.status) {
			orders = orders.filter(x => x.status === state.status)
		}

		// Если фильтр по минимальной сумме заказа не пустой:
		if (state.minprice) {
			orders = orders.filter(x => x.price >= state.minprice)
		}

		// Если фильтр по максимальной сумме заказа не пустой:
		if (state.maxprice) {
			orders = orders.filter(x => x.price <= state.maxprice)
		}

		// Если фильтр по минимальной дате заказа не пустой:
		if (state.mindate) {
			orders = orders.filter(x => x.date >= state.mindate)
		}

		// Если фильтр по максимальной дате заказа не пустой:
		if (state.maxdate) {
			orders = orders.filter(x => x.date <= state.maxdate)
		}

		return {
			orders: orders.slice((state.currentPage - 1) * database.maxOrders, 
				state.currentPage * database.maxOrders),
			// Текущая страница.
			currentPage: state.currentPage,
			// Количество страниц.
			commonPages: Math.ceil(orders.length / database.maxOrders)
		}
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