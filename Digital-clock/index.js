// Разберем по блокам JavaScript-код для создания и обновления цифровых часов в реальном времени.
// Этот код отвечает за получение текущего времени и его отображение на веб-странице, а также за обновление времени каждую секунду.
//
// ### Подробное описание JavaScript-кода
//
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
//
// - **Объявление переменных**:
// - **`const hourEl = document.getElementById("hour");`**: Получает элемент с `id="hour"` из DOM и сохраняет его в переменную `hourEl`. Этот элемент отображает часы.
// - **`const minuteEl = document.getElementById("minute");`**: Получает элемент с `id="minute"` и сохраняет его в переменную `minuteEl`. Этот элемент отображает минуты.
// - **`const secondEl = document.getElementById("seconds");`**: Получает элемент с `id="seconds"` и сохраняет его в переменную `secondEl`. Этот элемент отображает секунды.
// - **`const ampmEl = document.getElementById("ampm");`**: Получает элемент с `id="ampm"` и сохраняет его в переменную `ampmEl`. Этот элемент отображает AM или PM.
//
//     Эти элементы используются для обновления соответствующих частей времени (часы, минуты, секунды и AM/PM).
//
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h === 0 ? 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}
//
// - **`function updateClock()`**:
// - Эта функция обновляет отображение времени на странице.
//
// - **Получение текущего времени**:
// - **`let h = new Date().getHours();`**: Получает текущий час из объекта `Date`.
// - **`let m = new Date().getMinutes();`**: Получает текущую минуту из объекта `Date`.
// - **`let s = new Date().getSeconds();`**: Получает текущую секунду из объекта `Date`.
// - **`let ampm = "AM";`**: Инициализирует переменную `ampm` значением `"AM"`. Она будет изменена на `"PM"`, если текущее время после полудня.
//
// - **Преобразование времени**:
// - **`if (h >= 12)`**: Проверяет, если текущее время больше или равно 12 (после полудня).
// - **`h = h - 12;`**: Если да, уменьшает час на 12 для перевода в 12-часовой формат.
// - **`ampm = "PM";`**: Устанавливает значение `ampm` как `"PM"`.
// - **`h = h === 0 ? 12 : h;`**: Устанавливает часы на 12, если `h` равно 0 (т.е. полночь в 12-часовом формате).
// - **`h = h < 10 ? "0" + h : h;`**: Добавляет ведущий ноль к часам, если они меньше 10.
// - **`m = m < 10 ? "0" + m : m;`**: Добавляет ведущий ноль к минутам, если они меньше 10.
// - **`s = s < 10 ? "0" + s : s;`**: Добавляет ведущий ноль к секундам, если они меньше 10.
//
// - **Обновление DOM**:
// - **`hourEl.innerText = h;`**: Устанавливает текстовое содержимое элемента `hourEl` на текущее значение часа.
// - **`minuteEl.innerText = m;`**: Устанавливает текстовое содержимое элемента `minuteEl` на текущее значение минут.
// - **`secondEl.innerText = s;`**: Устанавливает текстовое содержимое элемента `secondEl` на текущее значение секунд.
// - **`ampmEl.innerText = ampm;`**: Устанавливает текстовое содержимое элемента `ampmEl` на текущее значение AM/PM.
//
// - **Автоматическое обновление**:
// - **`setTimeout(() => { updateClock(); }, 1000);`**: Использует `setTimeout`, чтобы вызвать функцию `updateClock`
// снова через 1 секунду (1000 миллисекунд). Это создает бесконечный цикл обновления времени каждую секунду.
//
updateClock();
//
// - **Запуск функции**:
// - **`updateClock();`**: Немедленно вызывает функцию `updateClock` после загрузки скрипта, чтобы сразу начать отображение текущего времени.
//
// ### Общий принцип работы
//
// 1. **Инициализация**:
// - Скрипт получает ссылки на элементы DOM, которые будут обновляться для отображения текущего времени.
//
// 2. **Обновление времени**:
// - Функция `updateClock` получает текущее время, преобразует его в 12-часовой формат, добавляет ведущие нули и обновляет соответствующие элементы на странице.
//
// 3. **Автоматическое обновление**:
// - После обновления времени `updateClock` вызывает сама себя через 1 секунду с помощью `setTimeout`, создавая бесконечный цикл обновления времени в реальном времени.
//
//     Этот код позволяет отображать цифровые часы на веб-странице, обновляющиеся каждую секунду, создавая эффект реального времени.