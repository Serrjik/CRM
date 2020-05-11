// Главный файл скрипта для order.html.

// Состояние приложения на странице order.html.
const state = {}

// Повесить обработчик клика на кнопку "Отправить".
document.querySelector('[data-add]').addEventListener('click', () => {
    const newOrder = {
        fullname: document.querySelector('[data-order-fullname]').value,
        status: "new",
        price: document.querySelector('[data-order-price]').value,
        good: document.querySelector('[data-order-good]').value,
        date: new Date().getTime()
    }

    const lastId = Database.createOrder(newOrder)
    console.log(lastId)
    window.location = `./editor.html#{"orderId":${lastId}}`
})