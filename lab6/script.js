// Находим кнопку-круг в HTML по её id и сохраняем ссылку на элемент.
const circle = document.getElementById('circle');

// Счётчик нажатий: при открытии страницы по кругу ещё не нажимали.
let clicks = 0;

// Эта функция выполняется при каждом клике по кругу.
circle.addEventListener('click', function () {
    // Увеличиваем счётчик на единицу, чтобы определить действие.
    clicks++;

    // Первый клик: добавляем CSS-класс, который запускает анимацию.
    // Увеличение и изменение цвета выполняет CSS, а не JavaScript.
    if (clicks === 1) {
        circle.classList.add('enlarged');
    } else if (clicks === 2) {
        // Снова действуют исходные стили: диаметр 100px и синий цвет.
        circle.classList.replace('enlarged', 'shrinked');
    } else if (clicks === 3) {
        circle.classList.remove('shrinked');
        circle.classList.add('outlined');
    } else if (clicks === 4) {
        // Четвёртый клик: полностью удаляем элемент из структуры страницы (DOM).
        // Чтобы круг появился снова, нужно обновить страницу.
        circle.remove();
    }
});
