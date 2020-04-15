// Главный файл скрипта для index.html (основное приложение).

// Состояние приложения на странице index.html.
const state = {

}

// Подписаться на событие update базы данных.
Database.addEventListener("update", update)

init()
update()

// Функция вызывается единожды при инициализации приложения.
function init () {
    
}

/* 
    Функция вызывает функцию, которая обновляет колонку 
    "Последние просматриваемые".
*/
function update () {
    updateLastReviewedList()
}

// Функция изменяет состояние.
function setState (obj) {
	Object.assign(state, obj)
	update()
}