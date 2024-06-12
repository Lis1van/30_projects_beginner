// ### Разбор JavaScript-кода
//
const btnEl = document.querySelector('.btn');
//
// - **`const btnEl = document.querySelector('.btn');`**:
// - Использует метод `document.querySelector` для поиска элемента с классом `.btn` в DOM.
// - Присваивает найденный элемент переменной `btnEl`.
// - **Назначение**: Этот элемент (`<a href="#" class="btn"><span>Button</span></a>`) будет обрабатывать эффект ряби при наведении.
//
btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;
    btnEl.style.setProperty('--xPos', x + 'px');
    btnEl.style.setProperty('--yPos', y + 'px');
})
//
// - **`btnEl.addEventListener("mouseover", (event) => { ... });`**:
// - Добавляет обработчик события `mouseover` к элементу `btnEl`.
// - **Назначение**: Когда пользователь наводит курсор на кнопку, выполняется код внутри функции-обработчика.
//
// - **`const x = event.pageX - btnEl.offsetLeft;`**:
// - **`event.pageX`**: Получает горизонтальную координату курсора мыши относительно всей страницы.
// - **`btnEl.offsetLeft`**: Возвращает количество пикселей от левого края контейнера, содержащего кнопку,
// до самого левого края кнопки.
// - **Назначение**: Определяет горизонтальную координату курсора мыши относительно кнопки.
// Это необходимо для правильного позиционирования эффекта ряби внутри кнопки.
//
// - **`const y = event.pageY - btnEl.offsetTop;`**:
// - **`event.pageY`**: Получает вертикальную координату курсора мыши относительно всей страницы.
// - **`btnEl.offsetTop`**: Возвращает количество пикселей от верхнего края контейнера, содержащего кнопку,
// до самого верха кнопки.
// - **Назначение**: Определяет вертикальную координату курсора мыши относительно кнопки.
//
// - **`btnEl.style.setProperty('--xPos', x + 'px');`**:
// - **`btnEl.style.setProperty`**: Устанавливает значение CSS-свойства для элемента `btnEl`.
// - **`'--xPos'`**: Это имя CSS-переменной, определенной в файле CSS.
// - **`x + 'px'`**: Устанавливает координату X в пикселях, вычисленную ранее.
// - **Назначение**: Обновляет значение CSS-переменной `--xPos` для кнопки, чтобы координаты ряби изменились в
// зависимости от позиции курсора.
//
// - **`btnEl.style.setProperty('--yPos', y + 'px');`**:
// - **`btnEl.style.setProperty`**: Устанавливает значение CSS-свойства для элемента `btnEl`.
// - **`'--yPos'`**: Это имя CSS-переменной, определенной в файле CSS.
// - **`y + 'px'`**: Устанавливает координату Y в пикселях, вычисленную ранее.
// - **Назначение**: Обновляет значение CSS-переменной `--yPos` для кнопки, чтобы координаты ряби изменились в
// зависимости от позиции курсора.
//
// ### Общее назначение кода
//
// Этот JavaScript-код добавляет интерактивность к кнопке, создавая эффект ряби при наведении курсора. Основные шаги,
// выполняемые кодом, включают:
//
// 1. **Получение кнопки**: Код ищет и сохраняет ссылку на элемент с классом `.btn`.
// 2. **Добавление обработчика событий**: Код добавляет функцию, которая срабатывает при наведении курсора на кнопку.
// 3. **Вычисление позиции курсора**: Код вычисляет координаты курсора относительно кнопки.
// 4. **Обновление CSS-переменных**: Код динамически обновляет значения CSS-переменных `--xPos` и `--yPos`,
// которые используются для позиционирования ряби.
//
//     Эти шаги вместе создают плавный и привлекательный визуальный эффект, когда пользователь наводит курсор на кнопку,
//     делая интерфейс более интерактивным и приятным для пользователя.