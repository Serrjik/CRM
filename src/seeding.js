// Здесь находятся функции, которые генерируют содержимое БД для отладки проекта.
;(function () {
    // const names = 'Алексей Александр Дмитрий Серьгей Ольга Виктор Светлана Оксана Тимофей Максим Петр Николай Вячеслав'.split(' ')
    // const surnames = 'Данчин Мельник Воронов Староброд Плохих Хороших Лумпа Дядков Черешников Попов Карманов Вечных'.split(' ')
    // const goods = ["Принтер", "Бумага для принтера", "Краски для принтера", "Катриджи для принтера", "Полимерная ванна"]
    // const prices = [12000, 500, 700, 1200, 2700]
    // const status = 'new process back archived'.split(' ')

    // // Стартовая дата (50 дней назад).
    // const startDate = Date.now() - 50 * 24 * 60 * 60 * 1000
    // // Финишная дата (3 дней назад).
    // const finishDate = Date.now() - 3 * 24 * 60 * 60 * 1000

    // // Сгенерировать заказы.
    // const orders = Array(200).fill(null).map(getRandomOrder)
    // // Добавить заказам id.
    // orders.forEach((x, i) => x.id = i + 1)

    // console.log(JSON.stringify(orders, null, 2))

    // // Функция генерирует случайный заказ.
    // function getRandomOrder () {
    //     const order = {}
    //     // Случайный индекс из массива товаров.
    //     const n = getRandom(0, goods.length - 1)
        
    //     // Полное имя.
    //     order.fullname = `${getRandomFrom(names)} ${getRandomFrom(surnames)}`
    //     order.status = getRandomFrom(status)
    //     order.price = prices[n]
    //     order.good = goods[n]
    //     order.date = getRandom(startDate, finishDate)

    //     return order
    // }

    // // Функция возвращает случайный товар.
    // function  getRandomGood () {
    //     return getRandomFrom(goods)
    // }

    // // Функция возвращает случайное число от минимального до максимального.
    // function getRandom (min, max) {
    //     return min + Math.floor(Math.random() * (max - min + 1))
    // }

    // // Функция принимает массив и возвращает случайный элемент этого массива.
    // function getRandomFrom (array) {
    //     return array[getRandom(0, array.length - 1)]
    // }

    const orders = [
        { fullname: "Тимофей Черешников", status: "process", price: 500, good: "Бумага для принтера", date: 1582739937251, id: 1 },
        { fullname: "Максим Черешников", status: "new", price: 700, good: "Краски для принтера", date: 1584261846002, id: 2 },
        { fullname: "Вячеслав Староброд", status: "process", price: 2700, good: "Полимерная ванна", date: 1585140602196, id: 3 },
        { fullname: "Виктор Лумпа", status: "process", price: 1200, good: "Катриджи для принтера", date: 1586003912029, id: 4 },
        { fullname: "Оксана Воронов", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1586290820593, id: 5 },
        { fullname: "Дмитрий Черешников", status: "archived", price: 2700, good: "Полимерная ванна", date: 1584627917925, id: 6 },
        { fullname: "Дмитрий Попов", status: "archived", price: 12000, good: "Принтер", date: 1583266649518, id: 7 },
        { fullname: "Алексей Карманов", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1585529901153, id: 8 },
        { fullname: "Алексей Вечных", status: "back", price: 12000, good: "Принтер", date: 1585140428022, id: 9 },
        { fullname: "Серьгей Староброд", status: "new", price: 500, good: "Бумага для принтера", date: 1584738077830, id: 10 },
        { fullname: "Виктор Воронов", status: "archived", price: 2700, good: "Полимерная ванна", date: 1583776450928, id: 11 },
        { fullname: "Максим Вечных", status: "archived", price: 700, good: "Краски для принтера", date: 1585751556867, id: 12 },
        { fullname: "Максим Черешников", status: "back", price: 500, good: "Бумага для принтера", date: 1585516837077, id: 13 },
        { fullname: "Петр Мельник", status: "back", price: 1200, good: "Катриджи для принтера", date: 1582927953366, id: 14 },
        { fullname: "Серьгей Дядков", status: "back", price: 1200, good: "Катриджи для принтера", date: 1583618181104, id: 15 },
        { fullname: "Петр Черешников", status: "back", price: 500, good: "Бумага для принтера", date: 1585744247701, id: 16 },
        { fullname: "Алексей Хороших", status: "new", price: 1200, good: "Катриджи для принтера", date: 1582311083141, id: 17 },
        { fullname: "Алексей Вечных", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585166127840, id: 18 },
        { fullname: "Виктор Староброд", status: "new", price: 500, good: "Бумага для принтера", date: 1582915499238, id: 19 },
        { fullname: "Светлана Данчин", status: "archived", price: 2700, good: "Полимерная ванна", date: 1586142586903, id: 20 },
        { fullname: "Вячеслав Плохих", status: "new", price: 2700, good: "Полимерная ванна", date: 1585701445729, id: 21 },
        { fullname: "Вячеслав Мельник", status: "process", price: 500, good: "Бумага для принтера", date: 1585751882115, id: 22 },
        { fullname: "Вячеслав Лумпа", status: "archived", price: 2700, good: "Полимерная ванна", date: 1584537777988, id: 23 },
        { fullname: "Тимофей Староброд", status: "back", price: 700, good: "Краски для принтера", date: 1583425883223, id: 24 },
        { fullname: "Александр Карманов", status: "new", price: 500, good: "Бумага для принтера", date: 1585995462354, id: 25 },
        { fullname: "Александр Лумпа", status: "process", price: 700, good: "Краски для принтера", date: 1584100145035, id: 26 },
        { fullname: "Серьгей Плохих", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1585788225661, id: 27 },
        { fullname: "Александр Староброд", status: "process", price: 12000, good: "Принтер", date: 1582311562211, id: 28 },
        { fullname: "Дмитрий Хороших", status: "process", price: 2700, good: "Полимерная ванна", date: 1583870503240, id: 29 },
        { fullname: "Петр Мельник", status: "process", price: 12000, good: "Принтер", date: 1585847776477, id: 30 },
        { fullname: "Серьгей Лумпа", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585488357674, id: 31 },
        { fullname: "Виктор Карманов", status: "process", price: 12000, good: "Принтер", date: 1585319340242, id: 32 },
        { fullname: "Оксана Плохих", status: "back", price: 12000, good: "Принтер", date: 1583559658245, id: 33 },
        { fullname: "Александр Лумпа", status: "new", price: 500, good: "Бумага для принтера", date: 1585908049319, id: 34 },
        { fullname: "Максим Плохих", status: "process", price: 12000, good: "Принтер", date: 1583130784817, id: 35 },
        { fullname: "Виктор Попов", status: "archived", price: 12000, good: "Принтер", date: 1586277041423, id: 36 },
        { fullname: "Серьгей Мельник", status: "new", price: 1200, good: "Катриджи для принтера", date: 1586008400860, id: 37 },
        { fullname: "Александр Карманов", status: "process", price: 500, good: "Бумага для принтера", date: 1585863995534, id: 38 },
        { fullname: "Максим Попов", status: "back", price: 700, good: "Краски для принтера", date: 1585935888653, id: 39 },
        { fullname: "Максим Дядков", status: "back", price: 500, good: "Бумага для принтера", date: 1584240137490, id: 40 },
        { fullname: "Алексей Плохих", status: "back", price: 1200, good: "Катриджи для принтера", date: 1583408897664, id: 41 },
        { fullname: "Николай Карманов", status: "archived", price: 500, good: "Бумага для принтера", date: 1583086611988, id: 42 },
        { fullname: "Светлана Попов", status: "process", price: 12000, good: "Принтер", date: 1582687634652, id: 43 },
        { fullname: "Вячеслав Мельник", status: "new", price: 12000, good: "Принтер", date: 1583833411126, id: 44 },
        { fullname: "Дмитрий Хороших", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1584745065215, id: 45 },
        { fullname: "Ольга Дядков", status: "archived", price: 2700, good: "Полимерная ванна", date: 1582621314372, id: 46 },
        { fullname: "Петр Попов", status: "new", price: 1200, good: "Катриджи для принтера", date: 1584432180882, id: 47 },
        { fullname: "Петр Староброд", status: "new", price: 700, good: "Краски для принтера", date: 1583086778641, id: 48 },
        { fullname: "Петр Староброд", status: "process", price: 1200, good: "Катриджи для принтера", date: 1583220484751, id: 49 },
        { fullname: "Дмитрий Плохих", status: "new", price: 500, good: "Бумага для принтера", date: 1584576360938, id: 50 },
        { fullname: "Тимофей Плохих", status: "archived", price: 700, good: "Краски для принтера", date: 1585808548993, id: 51 },
        { fullname: "Оксана Староброд", status: "process", price: 2700, good: "Полимерная ванна", date: 1584116968789, id: 52 },
        { fullname: "Алексей Мельник", status: "back", price: 500, good: "Бумага для принтера", date: 1585920566787, id: 53 },
        { fullname: "Светлана Мельник", status: "new", price: 500, good: "Бумага для принтера", date: 1582662413513, id: 54 },
        { fullname: "Николай Воронов", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585800727889, id: 55 },
        { fullname: "Серьгей Дядков", status: "new", price: 12000, good: "Принтер", date: 1585574199934, id: 56 },
        { fullname: "Ольга Черешников", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1585236372680, id: 57 },
        { fullname: "Дмитрий Данчин", status: "new", price: 2700, good: "Полимерная ванна", date: 1584592683685, id: 58 },
        { fullname: "Алексей Хороших", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1585331797164, id: 59 },
        { fullname: "Максим Карманов", status: "back", price: 500, good: "Бумага для принтера", date: 1583215049521, id: 60 },
        { fullname: "Вячеслав Хороших", status: "new", price: 500, good: "Бумага для принтера", date: 1584162207408, id: 61 },
        { fullname: "Виктор Лумпа", status: "process", price: 12000, good: "Принтер", date: 1585393956168, id: 62 },
        { fullname: "Петр Воронов", status: "process", price: 500, good: "Бумага для принтера", date: 1586177579754, id: 63 },
        { fullname: "Максим Черешников", status: "archived", price: 2700, good: "Полимерная ванна", date: 1586265248193, id: 64 },
        { fullname: "Ольга Карманов", status: "process", price: 2700, good: "Полимерная ванна", date: 1585063719108, id: 65 },
        { fullname: "Вячеслав Дядков", status: "new", price: 1200, good: "Катриджи для принтера", date: 1582869055634, id: 66 },
        { fullname: "Петр Попов", status: "back", price: 500, good: "Бумага для принтера", date: 1585687959099, id: 67 },
        { fullname: "Николай Мельник", status: "process", price: 700, good: "Краски для принтера", date: 1584482514830, id: 68 },
        { fullname: "Виктор Попов", status: "new", price: 2700, good: "Полимерная ванна", date: 1585853830127, id: 69 },
        { fullname: "Петр Дядков", status: "process", price: 700, good: "Краски для принтера", date: 1584345359679, id: 70 },
        { fullname: "Серьгей Лумпа", status: "process", price: 2700, good: "Полимерная ванна", date: 1583962097587, id: 71 },
        { fullname: "Оксана Карманов", status: "back", price: 1200, good: "Катриджи для принтера", date: 1585223085629, id: 72 },
        { fullname: "Оксана Вечных", status: "new", price: 700, good: "Краски для принтера", date: 1584735274685, id: 73 },
        { fullname: "Серьгей Данчин", status: "process", price: 12000, good: "Принтер", date: 1583502258072, id: 74 },
        { fullname: "Ольга Лумпа", status: "archived", price: 500, good: "Бумага для принтера", date: 1583120012055, id: 75 },
        { fullname: "Максим Мельник", status: "back", price: 700, good: "Краски для принтера", date: 1586134088392, id: 76 },
        { fullname: "Вячеслав Черешников", status: "process", price: 500, good: "Бумага для принтера", date: 1585471057193, id: 77 },
        { fullname: "Максим Лумпа", status: "process", price: 2700, good: "Полимерная ванна", date: 1584041939671, id: 78 },
        { fullname: "Оксана Староброд", status: "back", price: 12000, good: "Принтер", date: 1583353424913, id: 79 },
        { fullname: "Петр Черешников", status: "new", price: 700, good: "Краски для принтера", date: 1582911059255, id: 80 },
        { fullname: "Вячеслав Воронов", status: "archived", price: 2700, good: "Полимерная ванна", date: 1583517366146, id: 81 },
        { fullname: "Александр Дядков", status: "back", price: 2700, good: "Полимерная ванна", date: 1583691125010, id: 82 },
        { fullname: "Николай Черешников", status: "archived", price: 700, good: "Краски для принтера", date: 1582814576697, id: 83 },
        { fullname: "Виктор Воронов", status: "new", price: 1200, good: "Катриджи для принтера", date: 1582926445162, id: 84 },
        { fullname: "Вячеслав Попов", status: "process", price: 700, good: "Краски для принтера", date: 1585040541080, id: 85 },
        { fullname: "Оксана Староброд", status: "new", price: 12000, good: "Принтер", date: 1586165068603, id: 86 },
        { fullname: "Александр Плохих", status: "process", price: 500, good: "Бумага для принтера", date: 1584336191616, id: 87 },
        { fullname: "Петр Данчин", status: "process", price: 12000, good: "Принтер", date: 1584445204370, id: 88 },
        { fullname: "Оксана Карманов", status: "new", price: 1200, good: "Катриджи для принтера", date: 1584644900879, id: 89 },
        { fullname: "Тимофей Староброд", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585351851737, id: 90 },
        { fullname: "Серьгей Вечных", status: "back", price: 500, good: "Бумага для принтера", date: 1586223329629, id: 91 },
        { fullname: "Светлана Мельник", status: "new", price: 12000, good: "Принтер", date: 1582532956677, id: 92 },
        { fullname: "Максим Плохих", status: "archived", price: 12000, good: "Принтер", date: 1584899935678, id: 93 },
        { fullname: "Алексей Данчин", status: "archived", price: 500, good: "Бумага для принтера", date: 1583498710044, id: 94 },
        { fullname: "Алексей Черешников", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1584900962322, id: 95 },
        { fullname: "Александр Карманов", status: "archived", price: 12000, good: "Принтер", date: 1583344608649, id: 96 },
        { fullname: "Светлана Лумпа", status: "new", price: 2700, good: "Полимерная ванна", date: 1584075424454, id: 97 },
        { fullname: "Тимофей Староброд", status: "process", price: 12000, good: "Принтер", date: 1585514622412, id: 98 },
        { fullname: "Александр Черешников", status: "back", price: 700, good: "Краски для принтера", date: 1585231485285, id: 99 },
        { fullname: "Петр Попов", status: "new", price: 500, good: "Бумага для принтера", date: 1583084227281, id: 100 },
        { fullname: "Максим Лумпа", status: "process", price: 1200, good: "Катриджи для принтера", date: 1585709901045, id: 101 },
        { fullname: "Вячеслав Дядков", status: "new", price: 500, good: "Бумага для принтера", date: 1584909885506, id: 102 },
        { fullname: "Максим Попов", status: "archived", price: 500, good: "Бумага для принтера", date: 1585518678065, id: 103 },
        { fullname: "Серьгей Попов", status: "new", price: 2700, good: "Полимерная ванна", date: 1582407212454, id: 104 },
        { fullname: "Николай Вечных", status: "back", price: 1200, good: "Катриджи для принтера", date: 1583761117327, id: 105 },
        { fullname: "Александр Карманов", status: "back", price: 500, good: "Бумага для принтера", date: 1585497459526, id: 106 },
        { fullname: "Николай Хороших", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1583806146758, id: 107 },
        { fullname: "Петр Карманов", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1583281995984, id: 108 },
        { fullname: "Вячеслав Попов", status: "archived", price: 2700, good: "Полимерная ванна", date: 1583382162579, id: 109 },
        { fullname: "Светлана Попов", status: "process", price: 2700, good: "Полимерная ванна", date: 1584564663231, id: 110 },
        { fullname: "Александр Данчин", status: "new", price: 12000, good: "Принтер", date: 1582529062130, id: 111 },
        { fullname: "Оксана Попов", status: "process", price: 500, good: "Бумага для принтера", date: 1586081678932, id: 112 },
        { fullname: "Максим Хороших", status: "new", price: 1200, good: "Катриджи для принтера", date: 1583547801258, id: 113 },
        { fullname: "Вячеслав Черешников", status: "new", price: 2700, good: "Полимерная ванна", date: 1584360362309, id: 114 },
        { fullname: "Петр Карманов", status: "new", price: 12000, good: "Принтер", date: 1583668932204, id: 115 },
        { fullname: "Александр Попов", status: "new", price: 500, good: "Бумага для принтера", date: 1584572766350, id: 116 },
        { fullname: "Виктор Данчин", status: "back", price: 500, good: "Бумага для принтера", date: 1585382278181, id: 117 },
        { fullname: "Дмитрий Попов", status: "back", price: 1200, good: "Катриджи для принтера", date: 1585074153434, id: 118 },
        { fullname: "Петр Староброд", status: "back", price: 1200, good: "Катриджи для принтера", date: 1582429387922, id: 119 },
        { fullname: "Вячеслав Плохих", status: "archived", price: 500, good: "Бумага для принтера", date: 1584376847371, id: 120 },
        { fullname: "Оксана Мельник", status: "new", price: 1200, good: "Катриджи для принтера", date: 1584842596972, id: 121 },
        { fullname: "Тимофей Карманов", status: "new", price: 700, good: "Краски для принтера", date: 1585627444443, id: 122 },
        { fullname: "Оксана Плохих", status: "process", price: 500, good: "Бумага для принтера", date: 1584551689973, id: 123 },
        { fullname: "Алексей Хороших", status: "process", price: 700, good: "Краски для принтера", date: 1584043052383, id: 124 },
        { fullname: "Тимофей Данчин", status: "process", price: 700, good: "Краски для принтера", date: 1584473926611, id: 125 },
        { fullname: "Петр Вечных", status: "back", price: 500, good: "Бумага для принтера", date: 1583119080180, id: 126 },
        { fullname: "Максим Староброд", status: "new", price: 2700, good: "Полимерная ванна", date: 1583394601960, id: 127 },
        { fullname: "Оксана Мельник", status: "process", price: 2700, good: "Полимерная ванна", date: 1583990065267, id: 128 },
        { fullname: "Светлана Лумпа", status: "new", price: 700, good: "Краски для принтера", date: 1585002947574, id: 129 },
        { fullname: "Светлана Вечных", status: "archived", price: 500, good: "Бумага для принтера", date: 1583964435582, id: 130 },
        { fullname: "Вячеслав Дядков", status: "back", price: 12000, good: "Принтер", date: 1584882422697, id: 131 },
        { fullname: "Тимофей Хороших", status: "new", price: 12000, good: "Принтер", date: 1585962587324, id: 132 },
        { fullname: "Дмитрий Черешников", status: "back", price: 500, good: "Бумага для принтера", date: 1583127273163, id: 133 },
        { fullname: "Александр Данчин", status: "back", price: 500, good: "Бумага для принтера", date: 1583821790916, id: 134 },
        { fullname: "Серьгей Вечных", status: "process", price: 12000, good: "Принтер", date: 1584870061764, id: 135 },
        { fullname: "Николай Данчин", status: "process", price: 1200, good: "Катриджи для принтера", date: 1586237035985, id: 136 },
        { fullname: "Виктор Плохих", status: "process", price: 700, good: "Краски для принтера", date: 1582881091732, id: 137 },
        { fullname: "Николай Староброд", status: "new", price: 1200, good: "Катриджи для принтера", date: 1584075417236, id: 138 },
        { fullname: "Тимофей Карманов", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1584358637832, id: 139 },
        { fullname: "Серьгей Черешников", status: "process", price: 1200, good: "Катриджи для принтера", date: 1586047061399, id: 140 },
        { fullname: "Алексей Вечных", status: "back", price: 12000, good: "Принтер", date: 1585482188340, id: 141 },
        { fullname: "Максим Черешников", status: "new", price: 12000, good: "Принтер", date: 1583855379607, id: 142 },
        { fullname: "Дмитрий Черешников", status: "back", price: 12000, good: "Принтер", date: 1582433050686, id: 143 },
        { fullname: "Ольга Лумпа", status: "back", price: 2700, good: "Полимерная ванна", date: 1586318448140, id: 144 },
        { fullname: "Петр Попов", status: "new", price: 12000, good: "Принтер", date: 1583501412216, id: 145 },
        { fullname: "Серьгей Дядков", status: "back", price: 500, good: "Бумага для принтера", date: 1584485728529, id: 146 },
        { fullname: "Дмитрий Черешников", status: "archived", price: 700, good: "Краски для принтера", date: 1585840579995, id: 147 },
        { fullname: "Светлана Попов", status: "back", price: 700, good: "Краски для принтера", date: 1584067278851, id: 148 },
        { fullname: "Оксана Лумпа", status: "new", price: 2700, good: "Полимерная ванна", date: 1583388498504, id: 149 },
        { fullname: "Вячеслав Староброд", status: "process", price: 500, good: "Бумага для принтера", date: 1582656113196, id: 150 },
        { fullname: "Алексей Воронов", status: "back", price: 700, good: "Краски для принтера", date: 1583123245438, id: 151 },
        { fullname: "Светлана Дядков", status: "new", price: 700, good: "Краски для принтера", date: 1585789215032, id: 152 },
        { fullname: "Ольга Данчин", status: "new", price: 12000, good: "Принтер", date: 1585706020950, id: 153 },
        { fullname: "Серьгей Плохих", status: "process", price: 500, good: "Бумага для принтера", date: 1584778918048, id: 154 },
        { fullname: "Оксана Черешников", status: "back", price: 1200, good: "Катриджи для принтера", date: 1585061513782, id: 155 },
        { fullname: "Максим Хороших", status: "back", price: 500, good: "Бумага для принтера", date: 1585774885088, id: 156 },
        { fullname: "Серьгей Лумпа", status: "back", price: 500, good: "Бумага для принтера", date: 1582901603352, id: 157 },
        { fullname: "Николай Лумпа", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1583077769877, id: 158 },
        { fullname: "Дмитрий Воронов", status: "process", price: 1200, good: "Катриджи для принтера", date: 1585630574660, id: 159 },
        { fullname: "Вячеслав Плохих", status: "back", price: 1200, good: "Катриджи для принтера", date: 1582707025777, id: 160 },
        { fullname: "Светлана Попов", status: "back", price: 12000, good: "Принтер", date: 1584346760387, id: 161 },
        { fullname: "Светлана Плохих", status: "process", price: 500, good: "Бумага для принтера", date: 1584271738109, id: 162 },
        { fullname: "Вячеслав Староброд", status: "process", price: 12000, good: "Принтер", date: 1583127176349, id: 163 },
        { fullname: "Светлана Попов", status: "process", price: 500, good: "Бумага для принтера", date: 1584610573855, id: 164 },
        { fullname: "Светлана Вечных", status: "new", price: 12000, good: "Принтер", date: 1584852244723, id: 165 },
        { fullname: "Петр Попов", status: "process", price: 2700, good: "Полимерная ванна", date: 1583281598368, id: 166 },
        { fullname: "Дмитрий Карманов", status: "new", price: 700, good: "Краски для принтера", date: 1583660493694, id: 167 },
        { fullname: "Тимофей Воронов", status: "back", price: 1200, good: "Катриджи для принтера", date: 1584560236252, id: 168 },
        { fullname: "Оксана Староброд", status: "back", price: 1200, good: "Катриджи для принтера", date: 1582462632038, id: 169 },
        { fullname: "Серьгей Дядков", status: "process", price: 2700, good: "Полимерная ванна", date: 1583729566803, id: 170 },
        { fullname: "Серьгей Данчин", status: "back", price: 700, good: "Краски для принтера", date: 1584609052843, id: 171 },
        { fullname: "Максим Воронов", status: "back", price: 700, good: "Краски для принтера", date: 1585569300534, id: 172 },
        { fullname: "Николай Данчин", status: "back", price: 1200, good: "Катриджи для принтера", date: 1585979101297, id: 173 },
        { fullname: "Ольга Данчин", status: "process", price: 500, good: "Бумага для принтера", date: 1584477524854, id: 174 },
        { fullname: "Светлана Данчин", status: "new", price: 700, good: "Краски для принтера", date: 1584112657580, id: 175 },
        { fullname: "Виктор Черешников", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585763676741, id: 176 },
        { fullname: "Петр Вечных", status: "process", price: 12000, good: "Принтер", date: 1584648103503, id: 177 },
        { fullname: "Петр Лумпа", status: "back", price: 500, good: "Бумага для принтера", date: 1585718813399, id: 178 },
        { fullname: "Александр Мельник", status: "new", price: 1200, good: "Катриджи для принтера", date: 1583976255505, id: 179 },
        { fullname: "Вячеслав Хороших", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1585585809831, id: 180 },
        { fullname: "Дмитрий Лумпа", status: "process", price: 1200, good: "Катриджи для принтера", date: 1586093278480, id: 181 },
        { fullname: "Светлана Мельник", status: "back", price: 1200, good: "Катриджи для принтера", date: 1584366112350, id: 182 },
        { fullname: "Александр Карманов", status: "process", price: 2700, good: "Полимерная ванна", date: 1585030371865, id: 183 },
        { fullname: "Тимофей Воронов", status: "new", price: 12000, good: "Принтер", date: 1585141088756, id: 184 },
        { fullname: "Светлана Попов", status: "archived", price: 2700, good: "Полимерная ванна", date: 1584905226444, id: 185 },
        { fullname: "Ольга Черешников", status: "archived", price: 2700, good: "Полимерная ванна", date: 1582571960433, id: 186 },
        { fullname: "Александр Карманов", status: "back", price: 12000, good: "Принтер", date: 1584876491257, id: 187 },
        { fullname: "Светлана Воронов", status: "process", price: 700, good: "Краски для принтера", date: 1584113675483, id: 188 },
        { fullname: "Александр Мельник", status: "new", price: 12000, good: "Принтер", date: 1584603380977, id: 189 },
        { fullname: "Серьгей Данчин", status: "archived", price: 2700, good: "Полимерная ванна", date: 1585246134087, id: 190 },
        { fullname: "Дмитрий Староброд", status: "back", price: 500, good: "Бумага для принтера", date: 1585452241945, id: 191 },
        { fullname: "Ольга Мельник", status: "back", price: 2700, good: "Полимерная ванна", date: 1584525570942, id: 192 },
        { fullname: "Александр Попов", status: "archived", price: 12000, good: "Принтер", date: 1585502481088, id: 193 },
        { fullname: "Дмитрий Воронов", status: "process", price: 500, good: "Бумага для принтера", date: 1582438011669, id: 194 },
        { fullname: "Максим Вечных", status: "back", price: 12000, good: "Принтер", date: 1584226620802, id: 195 },
        { fullname: "Оксана Дядков", status: "new", price: 1200, good: "Катриджи для принтера", date: 1585036948712, id: 196 },
        { fullname: "Оксана Староброд", status: "archived", price: 1200, good: "Катриджи для принтера", date: 1582417639068, id: 197 },
        { fullname: "Оксана Карманов", status: "process", price: 2700, good: "Полимерная ванна", date: 1583015016539, id: 198 },
        { fullname: "Дмитрий Данчин", status: "new", price: 1200, good: "Катриджи для принтера", date: 1584752579976, id: 199 },
        { fullname: "Серьгей Вечных", status: "new", price: 12000, good: "Принтер", date: 1584920337579, id: 200 }
    ]

    Database.seed(orders)
})();
