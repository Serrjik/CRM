// Главный файл скрипта для index.html (основное приложение).

// Состояние приложения на странице index.html.
const state = {
	/* 
		Фильтры, по которым должны отображаться данные. Если значение фильтра 
		равно null, то он не используется в текущей итерации отображения данных. 
	*/
	fullname: null,
	good: null,
	status: null,
	minprice: null,
	maxprice: null,
	mindate: null,
	maxdate: null,
	// Отрисовываемые заказы.
	orders: [],
	// Текущая страница.
	currentPage: 1,
	// Количество страниц.
	commonPages: 1
}

// Подписаться на событие update базы данных.
Database.addEventListener("update", update)

init()
update()

// Функция вызывается единожды при инициализации приложения.
function init () {
	// Повесить обработчик события отжатия клавиши на поле ввода фильтра по фИО.
	document.querySelector('[data-filter-fullname]')
		.addEventListener('keyup', function () {
		// Если в строке ввода есть хотя бы 1 символ:
		if (this.value) {
			setState({
				fullname: this.value
			})
		}

		// Если в строке ввода НЕТ ни одного символа:
		else {
			setState({
				fullname: null
			})
		}
	})

	/* 
		Повесить обработчик окончания изменения элемента 
		на селект фильтра по товару. 
	*/
	document.querySelector('[data-filter-good]')
		.addEventListener('change', function (event) {
		// Если в селекте выбран товар:
		if (this.value) {
			setState({
				good: this.value
			})
		}

		// Если значение селекта "Все":
		else {
			setState({
				good: null
			})
		}
	})

	/* 
		Повесить обработчик окончания изменения элемента 
		на селект фильтра по статусу. 
	*/
	document.querySelector('[data-filter-status]')
		.addEventListener('change', function (event) {
		// Если в селекте выбран статус заказа:
		if (this.value) {
			setState({
				status: this.value
			})
		}

		// Если значение селекта "Все":
		else {
			setState({
				status: null
			})
		}
	})

	/* 
		Повесить обработчик изменения значения элемента 
		на поле ввода фильтра по минимальной сумме.
	*/
	document.querySelector('[data-filter-minprice]')
		.addEventListener('input', function (event) {
		const minPrice = parseFloat(this.value)
		
		// Если в строке ввода есть число:
		if (minPrice) {
			setState({
				minprice: minPrice
			})
		}

		// Если в строке ввода НЕТ числа:
		else {
			setState({
				minprice: null
			})
		}
	})

	/* 
		Повесить обработчик изменения значения элемента 
		на поле ввода фильтра по максимальной сумме.
	*/
	document.querySelector('[data-filter-maxprice]')
		.addEventListener('input', function (event) {
		const maxPrice = parseFloat(this.value)
		
		// Если в строке ввода есть число:
		if (maxPrice) {
			setState({
				maxprice: maxPrice
			})
		}

		// Если в строке ввода НЕТ числа:
		else {
			setState({
				maxprice: null
			})
		}
	})

	/* 
		Повесить обработчик изменения значения элемента 
		на поле ввода фильтра по минимальной дате заказа.
	*/
	document.querySelector('[data-filter-mindate]')
		.addEventListener('input', function (event) {
		// Если в строке ввода есть дата:
		if (this.value) {
			const date = new Date(this.value)
			setState({
				mindate: date.getTime()
			})
		}

		// Если в строке ввода НЕТ даты:
		else {
			setState({
				mindate: null
			})
		}
	})

	/* 
		Повесить обработчик изменения значения элемента 
		на поле ввода фильтра по максимальной дате заказа.
	*/
	document.querySelector('[data-filter-maxdate]')
		.addEventListener('input', function (event) {
		// Если в строке ввода есть дата:
		if (this.value) {
			const date = new Date(this.value)
			setState({
				maxdate: date.getTime()
			})
		}

		// Если в строке ввода НЕТ даты:
		else {
			setState({
				maxdate: null
			})
		}
	})
}

/* 
	Функция вызывает функцию, которая обновляет колонку 
	"Последние просматриваемые". Обновляет таблицу заказов на странице.
*/
function update () {
	updateLastReviewedList()

	// Объект с заказами, подходящими под фильтр.
	const answer = Database.getOrders(state)
	// Заказы, подходящие под фильтр.
	state.orders = answer.orders
	// Текущая страница.
	state.currentPage = answer.currentPage
	// Количество страниц.
	state.commonPages = answer.commonPages

	updateTable()
}

// Функция изменяет состояние приложения на странице.
function setState (obj) {
	Object.assign(state, obj)
	update()
}

// Функция обновляет список заказов на главной странице.
function updateTable () {
	// Шаблон строки таблицы с заказом.
	const template = document.querySelector('[data-order-row]').content
		.querySelector('tr')
	// Точка монтирования заказов.
	const ordersListElement = document.querySelector('[data-orders-list]')

	// Форматтер валюты.
	const currencyFormatter = new Intl.NumberFormat('ru-Ru', {
		style: "currency",
		currency: "RUB"
	})

	// Форматтер даты.
	const dateFormatter = new Intl.DateTimeFormat('ru-Ru')

	ordersListElement.innerHTML = ''

	// Пройти по всем отрисовываемым заказам.
	for (const order of state.orders) {
		// Создать DOM-элемент для заказа.
		const trElement = template.cloneNode(true)
		// Дата заказа.
		const date = new Date(order.date)

		trElement.innerHTML = trElement.innerHTML
			.replace(/%ID%/g, order.id)
			.replace(/%FULLNAME%/g, order.fullname)
			.replace(/%GOOD%/g, order.good)
			.replace(/%STATUS%/g, order.status)
			.replace(/%STATUS_COLOR%/g, getStatusColor(order.status))
			.replace(/%PRICE%/g, currencyFormatter.format(order.price))
			.replace(/%DATE%/g, dateFormatter.format(date))

		// Вставить созданный элемент в точку монтирования.
		ordersListElement.append(trElement)
	}

	// Функция возвращает цвет, соответствующий статусу.
	function getStatusColor (status) {
		switch (status) {
			case 'new':
				return 'primary'
			case 'process':
				return 'warning'
			case 'back':
				return 'danger'
			case 'archived':
				return 'dark'
		}
	}
}