// Давайте разберем JavaScript код, который используется для динамического обновления элементов мини-календаря с текущей датой.
// Этот код берет текущую дату и отображает ее части (месяц, день недели, число и год) в соответствующих элементах календаря.
//
// ## JavaScript
//
// ### Получение элементов DOM
//

const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

//
// - Здесь мы используем метод `document.getElementById()` для получения ссылок на элементы DOM, которые будут отображать части текущей даты. Эти элементы идентифицируются по их `id` атрибутам:
//     - `monthNameEl` для элемента с `id="month-name"`, который будет отображать название месяца.
// - `dayNameEl` для элемента с `id="day-name"`, который будет отображать название дня недели.
// - `dayNumberEl` для элемента с `id="day-number"`, который будет отображать номер дня.
// - `yearEl` для элемента с `id="year"`, который будет отображать текущий год.
//
// ### Получение текущей даты
//

const date = new Date();

//
// - Создается новый объект `Date`, который содержит текущую дату и время. Этот объект `date` будет использован для извлечения различных частей текущей даты.
//
// ### Получение и установка месяца
//

const month = date.getMonth();
monthNameEl.innerText = date.toLocaleDateString('en-US', {month: 'long'});

//
// - Метод `getMonth()` объекта `Date` возвращает текущий месяц в виде числа от 0 (январь) до 11 (декабрь). Однако, мы не используем эту переменную `month` в дальнейшем коде.
// - Метод `toLocaleDateString()` с опцией `{month: 'long'}` форматирует дату и возвращает полное название месяца на английском языке. Здесь мы используем параметр `en-US` для указания языка формата.
// - Это название месяца устанавливается как текстовое содержимое элемента `monthNameEl` с помощью свойства `innerText`.
//
// ### Получение и установка дня недели
//

dayNameEl.innerText = date.toLocaleDateString('en-US', {weekday: 'long'});

//
// - Метод `toLocaleDateString()` с опцией `{weekday: 'long'}` форматирует дату и возвращает полное название дня недели на английском языке.
// - Это название дня недели устанавливается как текстовое содержимое элемента `dayNameEl` с помощью свойства `innerText`.
//
// ### Получение и установка номера дня
//

dayNumberEl.innerText = date.getDate();

//
// - Метод `getDate()` объекта `Date` возвращает текущий номер дня месяца (от 1 до 31).
// - Этот номер устанавливается как текстовое содержимое элемента `dayNumberEl` с помощью свойства `innerText`.
//
// ### Получение и установка года
//

yearEl.innerText = date.getFullYear();

//
// - Метод `getFullYear()` объекта `Date` возвращает текущий год в формате 4-значного числа (например, 2024).
// - Этот год устанавливается как текстовое содержимое элемента `yearEl` с помощью свойства `innerText`.
//
// ## Итоговое объяснение
//
// В этом коде используется объект `Date`, чтобы получить текущие дату, месяц, день недели и год.
// Затем эти данные отображаются в соответствующих элементах мини-календаря с помощью их `innerText` свойств. Это позволяет динамически обновлять календарь с текущей датой каждый раз, когда страница загружается.
//
// ### Как это работает вместе:
//
//     1. **HTML** предоставляет структуру и идентификаторы для элементов, которые будут отображать дату.
// 2. **CSS** обеспечивает стилизацию, чтобы календарь выглядел красиво и был центрирован на странице.
// 3. **JavaScript** динамически заполняет эти элементы данными о текущей дате, извлекая их из объекта `Date`.
//
//     Этот подход хорошо подходит для приложений, которые требуют отображения текущей даты в определенном формате,
//     и может быть легко адаптирован для локализации на другие языки или для добавления дополнительных функций (например,
//     обновление даты в реальном времени).