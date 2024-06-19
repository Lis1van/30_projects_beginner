// В этом JavaScript-коде реализована логика для подсчета количества введенных символов в текстовом поле (`<textarea>`)
// и отображения общего количества введенных символов и оставшихся до максимума. Рассмотрим каждый блок кода детально,
// чтобы понять его функциональность.
//
// ### Обзор кода
//
// 1. **Получение элементов DOM:**
// - Получение ссылки на элементы HTML для работы с ними.
// 2. **Обработчик событий:**
// - Реализация функции, которая будет вызываться при каждом вводе текста пользователем.
// 3. **Обновление счетчика:**
// - Функция, которая обновляет значения счетчиков символов.
//
// ### Подробное объяснение кода
//
const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');
//
// - **`const textareaEl = document.getElementById('textarea');`**
// - Получает элемент `<textarea>` с `id="textarea"` и сохраняет его в переменную `textareaEl`.
// - Этот элемент используется для отслеживания и подсчета символов, введенных пользователем.
//
// - **`const totalCounterEl = document.getElementById('total-counter');`**
// - Получает элемент `<span>` с `id="total-counter"` и сохраняет его в переменную `totalCounterEl`.
// - Этот элемент отображает общее количество введенных символов.
//
// - **`const remainingCounterEl = document.getElementById('remaining-counter');`**
// - Получает элемент `<span>` с `id="remaining-counter"` и сохраняет его в переменную `remainingCounterEl`.
// - Этот элемент показывает количество оставшихся символов до достижения максимального предела, установленного в
// атрибуте `maxlength` у `<textarea>`.
//
textareaEl.addEventListener('keyup', () => {
    updateCounter()
})
//
// - **`textareaEl.addEventListener('keyup', () => { updateCounter() })`**
// - Устанавливает обработчик событий для `textareaEl`, который слушает событие `keyup` (срабатывает при отпускании клавиши).
// - Когда пользователь отпускает клавишу после ввода символа, вызывается функция `updateCounter()`.
// - **Почему `keyup`:** Использование `keyup` позволяет отслеживать момент, когда символ уже добавлен в `<textarea>`,
// что важно для точного подсчета.
//
updateCounter()

// - **`updateCounter()`**
// - Вызов функции `updateCounter` сразу при загрузке страницы, чтобы инициализировать счетчики на основании уже
// введенного текста (если есть).
// - Это полезно для случая, когда в `textarea` может быть предзаполненный текст, например, из сохраненных данных.
//
function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}
//
// - **`function updateCounter()`**
// - Определяет функцию `updateCounter`, которая обновляет счетчики символов.
//
// - **`totalCounterEl.innerText = textareaEl.value.length;`**
// - Устанавливает текстовое содержимое `totalCounterEl` равным количеству символов, введенных в `textareaEl` (свойство `value`).
// - **`textareaEl.value.length`**: возвращает длину строки, введенной в `textareaEl`, то есть общее количество символов.
//
// - **`remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length;`**
// - Рассчитывает оставшееся количество символов, вычитая текущую длину текста из значения атрибута `maxlength` у `textareaEl`.
// - **`textareaEl.getAttribute('maxlength')`**: получает значение атрибута `maxlength`, установленного у элемента `<textarea>`,
// что определяет максимальное допустимое количество символов.
// - **`textareaEl.value.length`**: возвращает количество введенных символов.
// - Разница между `maxlength` и текущим количеством символов устанавливается как текстовое содержимое `remainingCounterEl`.
//
// ### Резюме
//
// Этот JavaScript-код:
//
// - Получает ссылки на HTML-элементы для взаимодействия.
// - Реализует обработчик событий для обновления счетчиков при каждом вводе символа.
// - Обновляет общее количество введенных символов и оставшихся символов в реальном времени.
//
//     Такая реализация полезна для форм и текстовых полей, где важно следить за ограничением по количеству символов,
//     например, в социальных сетях или при написании комментариев.