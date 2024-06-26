// Разберем JavaScript-код, который реализует анимацию текста, демонстрируя профессию с эффектом "набора".
// Код последовательно отображает список профессий, добавляя по одному символу, создавая иллюзию печати.
// Рассмотрим каждый блок кода и его функциональность.
//
// ## Разбор JavaScript-кода
//
const containerEl = document.querySelector('.container');
const careers = ['YouTuber', 'Web-developer', 'Freelancer', 'Instructor'];
let careerIndex = 0;
let characterIndex = 0;
updateText();
//
// ### Инициализация переменных и запуск функции
//
// 1. **Получение элемента контейнера**:
// - `const containerEl = document.querySelector('.container');`: Использует метод `querySelector` для получения
// элемента с классом `container`. Этот элемент будет использоваться для отображения текста с анимацией.
//
// 2. **Определение списка профессий**:
// - `const careers = ['YouTuber', 'Web-developer', 'Freelancer', 'Instructor'];`: Массив `careers` содержит список профессий,
// которые будут анимированно отображаться. В данном случае, это `"YouTuber"`, `"Web-developer"`, `"Freelancer"` и `"Instructor"`.
//
// 3. **Индексы для отслеживания текущей позиции**:
// - `let careerIndex = 0;`: Переменная `careerIndex` отслеживает текущую профессию из массива `careers`.
// Изначально установлена на 0, что соответствует первой профессии в списке.
// - `let characterIndex = 0;`: Переменная `characterIndex` отслеживает количество символов текущей профессии,
// которые уже отображены. Изначально установлена на 0.
//
// 4. **Запуск функции обновления текста**:
// - `updateText();`: Вызов функции `updateText`, которая отвечает за обновление текста и управление анимацией.
//
function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;
//
// ### Функция обновления текста `updateText`
//
// Эта функция отвечает за обновление текста в контейнере, добавляя по одному символу из текущей профессии и создавая эффект набора текста.
//
// 1. **Увеличение индекса символа**:
// - `characterIndex++;`: Увеличивает `characterIndex` на 1, что позволяет отображать следующий символ текущей профессии при каждом вызове функции.
//
// 2. **Обновление содержимого контейнера**:
// - `containerEl.innerHTML = \`
//     <h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>
// \`;`: Обновляет HTML содержимое контейнера `.container`. Строка формируется с использованием шаблонных литералов (template literals):
// - Проверка `careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'` определяет, следует ли использовать "an" или "a" перед профессией.
// Это основано на первом символе текущей профессии.
// - `careers[careerIndex].slice(0, characterIndex)` берет подстроку текущей профессии от начала до `characterIndex`.
// Это создает эффект постепенного отображения (печати) текста.
//
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}
//
// ### Управление переходом между профессиями
//
// 1. **Переход к следующей профессии**:
// - `if (characterIndex === careers[careerIndex].length) { ... }`: Проверяет, достиг ли `characterIndex` длины текущей профессии.
// Если да, это значит, что вся профессия была "напечатана", и нужно перейти к следующей.
// - `careerIndex++;`: Увеличивает `careerIndex`, чтобы перейти к следующей профессии в массиве.
// - `characterIndex = 0;`: Сбрасывает `characterIndex` на 0, чтобы начать печатать новую профессию с начала.
//
// 2. **Циклический переход в начало списка профессий**:
// - `if (careerIndex === careers.length) { ... }`: Проверяет, достиг ли `careerIndex` конца массива `careers`.
// Если да, это значит, что все профессии были отображены.
// - `careerIndex = 0;`: Сбрасывает `careerIndex` на 0, чтобы начать цикл заново с первой профессии.
//
// 3. **Рекурсивный вызов функции с задержкой**:
// - `setTimeout(updateText, 400);`: Использует `setTimeout`, чтобы вызвать `updateText` снова через 400 миллисекунд.
// Это создает задержку между "набором" каждого символа, контролируя скорость анимации.
//
// ## Общий процесс
//
// 1. **Инициализация**:
// - Получается элемент контейнера, задается список профессий и устанавливаются начальные индексы для текущей профессии и символа.
//
// 2. **Обновление текста**:
// - Функция `updateText` управляет отображением текста. Она увеличивает `characterIndex`, обновляет содержимое контейнера,
// показывая часть текущей профессии, и управляет переходом к следующей профессии.
//
// 3. **Переход между профессиями**:
// - Когда вся профессия отображена, функция переходит к следующей, сбрасывая `characterIndex`. Когда все профессии были отображены, цикл начинается снова.
//
// 4. **Анимация с задержкой**:
// - С помощью `setTimeout` вызывается `updateText` снова через 400 миллисекунд, что позволяет создать анимацию печати текста.
//
//     Таким образом, этот JavaScript-код создает эффект анимации текста, последовательно отображая профессии из массива,
//     как будто они "набираются" на экране, и циклически повторяет процесс.