// Главный файл скрипта для editor.html.

// Состояние приложения на странице editor.html.
const state = {
	// id заказа из адресной строки.
	orderId: null
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

	updateLastReviewedList()
}

// Функция изменяет состояние.
function setState (obj) {
	Object.assign(state, obj)
	update()
}