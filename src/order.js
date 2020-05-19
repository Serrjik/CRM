// Главный файл скрипта для order.html.

// Состояние приложения на странице order.html.
const state = {}

init()
update()

function init () {
	// Повесить обработчик клика на кнопку "Отправить".
	document.querySelector('[data-createorder]').addEventListener('click', () => {
		const order = {
			fullname: document.querySelector('[data-order-fullname]').value,
			good: document.querySelector('[data-order-good]').value,
			price: parseInt(document.querySelector('[data-order-price]').value),
		}

		const orderId = Database.createOrder(order)
		location.href = `editor.html#{"orderId":${orderId}}`
	})
}

function update () {}