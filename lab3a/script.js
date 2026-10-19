// Находим HTML-кнопку по её id и сохраняем ссылку на неё в константе.
// Благодаря defer в HTML этот код выполняется, когда элементы страницы уже созданы.
const themeButton = document.getElementById('theme-button');

// Регистрируем обработчик: функция будет выполняться при каждом нажатии на кнопку.
themeButton.addEventListener('click', function () {
    // document.body — элемент <body>, classList — список его CSS-классов.
    // toggle добавляет класс dark, если его нет, и удаляет, если он есть.
    // Результат toggle: true, если класс теперь есть (тёмная тема), иначе false.
    const isDark = document.body.classList.toggle('dark');

    // Меняем надпись: кнопка предлагает включить противоположную тему.
    // Условие ? значение_если_true : значение_если_false — короткая запись выбора из двух вариантов.
    themeButton.textContent = isDark
        ? 'Включить светлую тему'
        : 'Включить тёмную тему';

    // Сообщаем программам чтения с экрана текущее состояние переключателя.
    // String превращает логическое значение в строку "true" или "false" для HTML-атрибута.
    themeButton.setAttribute('aria-pressed', String(isDark));
});
