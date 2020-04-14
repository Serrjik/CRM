/*
	Здесь находятся функции, ответственные за наполнение левого блока 
	(сайд - панели сайта).
*/

// Функция обновляет колонку "Последние просматриваемые".
function updateLastReviewedList () {
	// Все последние просматриваемые заказы.
	const orders = Database.getLastReviewed()
	// Шаблон ссылки на последний просматриваемый заказ.
	const template = document.querySelector('[data-reviewed]').
		content.querySelector('li')
	// Контейнер для последних просматриваемых заказов.
	const reviewedListElement = document.querySelector('[data-reviewed-list]')

	// Очистить контейнер для последних просматриваемых заказов.
	reviewedListElement.innerHTML = ''

	// Пройти по каждому заказу.
	for (const order of orders) {
		// Сделать копию шаблона ссылки на заказ вместе со всем содержимым.
		const liElement = template.cloneNode(true)

		// Заменить в копии шаблона ссылки на заказ флаг на имя клиента.
		liElement.innerHTML = liElement.innerHTML.replace(/%FULLNAME%/g, order.fullname)
		/*
			Смонтировать копию шаблона в контейнер для 
			последних просматриваемых заказов.
		*/
		reviewedListElement.append(liElement)
	}

	// console.log({
	//     orders,
	//     template
	// })
}