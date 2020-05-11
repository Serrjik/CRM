// Главный файл скрипта для editor.html.

// Состояние приложения на странице editor.html.
const state = {
	// id заказа из адресной строки.
	orderId: null,
	// Последний просмотренный заказ.
	order: null
}

// Подписаться на событие update базы данных.
Database.addEventListener("update", update)
// Подписаться на событие update раутера.
Router.addEventListener("update", update)

init()
update()

// Функция будет вызываться 1 раз при инициализации приложения.
function init () {
	const hashObject = Router.getHashObject()

	// Если у hashObject присутствует orderId:
	if (hashObject.orderId) {
		setState({
			// Запомнить id последнего просмотренного заказа.
			orderId: hashObject.orderId
		})
	}

	// Повесить обработчик клика на кнопку "Сохранить".
	document.querySelector('[data-save]').addEventListener('click', () => {
		// Перевести содержимое поля ввода "Дата" во временную метку.
		const date = new Date(document.querySelector('[data-order-date]').value)

		const updated = {
			fullname: document.querySelector('[data-order-fullname]').value,
			good: document.querySelector('[data-order-good]').value,
			price: document.querySelector('[data-order-price]').value,
			date: date.getTime(),
			status: document.querySelector('[data-order-status]').value
		}

		Database.updateOrderById(state.orderId, updated)
		alert("Заказ успешно сохранен.")
	})
}

/* 
	Функция вызывает функцию, которая обновляет колонку 
	"Последние просматриваемые".
*/
function update () {
	const hashObject = Router.getHashObject()

	// Если у hashObject присутствует orderId и НЕ совпадает с текущим:
	if (hashObject.orderId && hashObject.orderId !== state.orderId) {
		setState({
			// Запомнить id последнего просмотренного заказа.
			orderId: hashObject.orderId
		})
		// Запомнить последний просмотренный заказ.
		Database.addLastReviewed(hashObject.orderId)
	}

	// Последний просмотренный заказ.
	state.order = Database.getOrderById(hashObject.orderId)

	document.querySelector('[data-fullname]').textContent = state.order.fullname
	document.querySelector('[data-order-id]').value = state.order.id
	document.querySelector('[data-order-fullname]').value = state.order.fullname
	document.querySelector('[data-order-good]').value = state.order.good
	document.querySelector('[data-order-status]').value = state.order.status
	document.querySelector('[data-order-price]').value = state.order.price

	// Перевести дату из timestamp в формат поля ввода "Дата".
	const date = new Date(state.order.date)
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')

	document.querySelector('[data-order-date]').value = `${year}-${month}-${day}`
	
	updateLastReviewedList()
}

// Функция изменяет состояние.
function setState (obj) {
	Object.assign(state, obj)
	update()
}