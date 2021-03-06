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
// Подписаться на событие update раутера.
Router.addEventListener("update", () => {
	const hashObject = Router.getHashObject()
	setState(hashObject)
})

init()
update()

// Функция вызывается единожды при инициализации приложения.
function init () {
	const hashObject = Router.getHashObject()

	byFilterNames(filterName => {
		// Если в хэш-объекте указан выбранный фильтр:
		if (hashObject[filterName]) {
			// Установить поле фильтра согласно хэш-объекту.
			document.querySelector(`[data-filter-${filterName}]`).value = hashObject[filterName]
			// Установить состояние согласно хэш-объекту.
			state[filterName] = hashObject[filterName]
		}

		/* 
			Повесить обработчики событий отжатия клавиши, изменения значения, 
			окончания изменения элемента на поля ввода и селекты фильтров. 
		*/
		const element = document.querySelector(`[data-filter-${filterName}]`)
		element.addEventListener('keyup', handler)
		element.addEventListener('change', handler)
		// element.addEventListener('input', handler)

		// Если в адресную строке есть № текущей страницы с заказами:
		if (hashObject.currentPage) {
			state.currentPage = hashObject.currentPage
		}

		function handler () {
			// Если в строке ввода есть хотя бы 1 символ:
			if (this.value) {
				// Если фильтр по дате:
				if (filterName === 'mindate' || filterName === 'maxdate') {
					const date = new Date(this.value)

					setState({
						[filterName]: date.getTime()
					})
				}
				
				// Если фильтр НЕ по дате:
				else {
					setState({
						[filterName]: this.value
					})
				}
			}
	
			// Если в строке ввода НЕТ ни одного символа:
			else {
				setState({
					[filterName]: null
				})
			}
		}
	})

	// Добавить обработчик клика кнопке пагинации "Назад".
	document.querySelector('[data-pagenav-prev]').addEventListener('click', event => {
		event.preventDefault()

		if (state.currentPage !== 1) {
			setState({
				currentPage: state.currentPage - 1
			})
		}
	})

	// Добавить обработчик клика кнопке пагинации "Вперед".
	document.querySelector('[data-pagenav-next]').addEventListener('click', event => {
		event.preventDefault()

		if (state.currentPage !== state.commonPages) {
			setState({
				currentPage: state.currentPage + 1
			})
		}
	})

	// Добавить обработчик клика контейнеру пагинации с кнопками с номерами страниц.
	document.querySelector('[data-pagination]').addEventListener('click', event => {
		event.preventDefault()

		// Номер текущей страницы с заказами.
		const pageNumber = parseInt(event.target.textContent)
		setState({
			currentPage: pageNumber
		})
	})
}

/* 
	Функция вызывает функцию, которая обновляет колонку 
	"Последние просматриваемые". Обновляет таблицу заказов на странице.
*/
function update () {
	updateLastReviewedList()

	byFilterNames(filterName => {
		const element = document.querySelector(`[data-filter-${filterName}]`)

		// Если установлен фильтр:
		if (state[filterName]) {
			element.value = state[filterName]
		}

		else {
			element.value = ''
		}
	})

	// Объект с заказами, подходящими под фильтр.
	const answer = Database.getOrders(state)
	// Заказы, подходящие под фильтр.
	state.orders = answer.orders
	// Текущая страница.
	state.currentPage = answer.currentPage
	// Количество страниц.
	state.commonPages = answer.commonPages

	updateTable()
	updatePagination()
}

// Функция изменяет состояния приложения на странице и раутера.
function setState (obj) {
	Object.assign(state, obj)

	// Объект, который передаётся в раутер.
	const hashObject = {}

	// Добавить № текущей страницы с заказами в адресную строку.
	if (state.currentPage !== 1) {
		hashObject.currentPage = state.currentPage
	}

	byFilterNames(filterName => {
		// Если указан выбранный фильтр:
		if (state[filterName]) {
			hashObject[filterName] = state[filterName]
		}
	})

	// Обновить раутер.
	Router.setHashObject(hashObject)

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

/* 
	Функция проходит по всем именам текущих фильтров 
	и запускает функцию handler, передавая ей текущее имя фильтра. 
*/
function byFilterNames (handler) {
	// Все фильтры.
	const filterNames = ['fullname', 'good', 'status', 'minprice', 'maxprice', 
		'mindate', 'maxdate']

	for (const filterName of filterNames) {
		handler(filterName)
	}
}

// Функция обновляет пагинацию.
function updatePagination () {
	// Точка монтирования кнопок с номерами пагинации.
	const numbersMount = document.querySelector('[data-pagination]')
	const prevButton = document.querySelector('[data-pagenav-prev]')
	const nextButton = document.querySelector('[data-pagenav-next]')

	numbersMount.innerHTML = ''

	// Создание и добавление в DOM кнопок с номерами пагинации.
	for (let i = 0; i < state.commonPages; i++) {
		const liElement = document.createElement('li')
		liElement.classList.add('page-item')

		// Если кнопка соответствует текущей странице заказов:
		if (state.currentPage === i + 1) {
			liElement.classList.add('active')
		}

		const aElement = document.createElement('a')
		aElement.classList.add('page-link')
		aElement.setAttribute('href', '#')
		aElement.textContent = i + 1

		liElement.append(aElement)
		numbersMount.append(liElement)
	}

	// <li class="page-item active"><a class="page-link" href="#">1</a></li>

	prevButton.classList.remove('disabled')
	nextButton.classList.remove('disabled')

	// Если текущая страница заказов - первая:
	if (state.currentPage === 1) {
		prevButton.classList.add('disabled')
	}

	// Если текущая страница заказов - последняя:
	if (state.currentPage === state.commonPages) {
		nextButton.classList.add('disabled')
	}
}