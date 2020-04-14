// Главный файл скрипта для index.html (основное приложение).

// Состояние приложения на странице index.html.
const state = {

}

// Подписаться на событие update базы данных.
Database.addEventListener("update", update)

update()

/* 
    Функция вызывает функцию, которая обновляет колонку 
    "Последние просматриваемые".
*/
function update () {
    updateLastReviewedList()
}