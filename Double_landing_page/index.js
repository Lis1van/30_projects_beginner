// Давайте разберем, как JavaScript-код добавляет интерактивность на странице с двумя половинами,
// каждая из которых представляет определенный бренд (Apple и Samsung).
// Этот код управляет изменением ширины левой и правой секций при наведении мыши.
//
// ### Подробное описание JavaScript-кода
//
// 1. **Выбор элементов DOM**
//
const containerEl = document.querySelector('.container');
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');

// - **`const containerEl = document.querySelector('.container');`**: Находит и сохраняет в переменную `containerEl` элемент
// с классом `.container`, который является родительским элементом для обеих половин.
// - **`const leftEl = document.querySelector('.left');`**: Находит и сохраняет в переменную `leftEl` элемент с классом `.left`,
// представляющий левую половину страницы (Apple).
// - **`const rightEl = document.querySelector('.right');`**: Находит и сохраняет в переменную `rightEl` элемент с классом `.right`,
// представляющий правую половину страницы (Samsung).
//
// 2. **Обработка событий для левой половины (`leftEl`)**
//
leftEl.addEventListener('mouseenter', () => {
    containerEl.classList.add('active-left');
});
leftEl.addEventListener('mouseleave', () => {
    containerEl.classList.remove('active-left');
});

// - **`leftEl.addEventListener('mouseenter', () => { ... });`**: Добавляет слушатель события для элемента `leftEl`.
// Когда курсор мыши входит в область `leftEl`, выполняется добавление класса `active-left` к элементу `containerEl`.
// - **`containerEl.classList.add('active-left');`**: Добавляет класс `active-left` к контейнеру, что, как мы видели в CSS,
// увеличивает ширину левой половины до 75% и уменьшает правую до 25%.
//
// - **`leftEl.addEventListener('mouseleave', () => { ... });`**: Добавляет слушатель события для элемента `leftEl`.
// Когда курсор мыши покидает область `leftEl`, выполняется удаление класса `active-left` у элемента `containerEl`.
// - **`containerEl.classList.remove('active-left');`**: Удаляет класс `active-left` у контейнера,
// возвращая размеры половин к исходным 50%.
//
// 3. **Обработка событий для правой половины (`rightEl`)**
//
rightEl.addEventListener('mouseenter', () => {
    containerEl.classList.add('active-right');
});
rightEl.addEventListener('mouseleave', () => {
    containerEl.classList.remove('active-right');
});

// - **`rightEl.addEventListener('mouseenter', () => { ... });`**: Добавляет слушатель события для элемента `rightEl`.
// Когда курсор мыши входит в область `rightEl`, выполняется добавление класса `active-right` к элементу `containerEl`.
// - **`containerEl.classList.add('active-right');`**: Добавляет класс `active-right` к контейнеру, что увеличивает ширину
// правой половины до 75% и уменьшает левую до 25%.
//
// - **`rightEl.addEventListener('mouseleave', () => { ... });`**: Добавляет слушатель события для элемента `rightEl`.
// Когда курсор мыши покидает область `rightEl`, выполняется удаление класса `active-right` у элемента `containerEl`.
// - **`containerEl.classList.remove('active-right');`**: Удаляет класс `active-right` у контейнера,
// возвращая размеры половин к исходным 50%.
//
// ### Итоговое описание
//
// Этот JavaScript-код добавляет интерактивность к странице, позволяя пользователю видеть изменения в ширине левой и
// правой половин при наведении курсора на них.
//
// - При наведении курсора на левую половину (`leftEl`), контейнер (`containerEl`) получает класс `active-left`,
// что изменяет размеры половин: левая становится шире, а правая — уже. При покидании левой половины класс удаляется,
// возвращая размеры в исходное состояние.
// - При наведении курсора на правую половину (`rightEl`), контейнер (`containerEl`) получает класс `active-right`,
// что увеличивает ширину правой половины и уменьшает левую. При покидании правой половины класс удаляется,
// возвращая размеры обратно.
//
//     Используя JavaScript и CSS, эта страница создает динамическую и визуально привлекательную интерактивную среду,
//     которая реагирует на действия пользователя.