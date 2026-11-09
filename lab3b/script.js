const text = document.getElementById('text');
const keyboard = document.getElementById('keyboard');
const caps = document.getElementById('caps');

// false — строчные буквы, true — заглавные.
let uppercase = false;

// Каждый элемент массива — отдельный ряд клавиатуры.
const rows = [
    '1234567890',
    'йцукенгшщзхъ',
    'фывапролджэ',
    'ячсмитьбюё'
];

// Вставляем символ на месте курсора или вместо выделенного текста.
function insertText(value) {
    text.setRangeText(
        value,
        text.selectionStart,
        text.selectionEnd,
        'end'
    );

    // Возвращаем фокус в поле, чтобы можно было продолжать печатать.
    text.focus();
}

// Создаём ряды клавиатуры.
for (const letters of rows) {
    const row = document.createElement('div');
    row.className = 'row';

    // Для каждого символа создаём кнопку.
    for (const letter of letters) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = letter;

        button.addEventListener('click', function () {
            insertText(button.textContent);
        });

        row.appendChild(button);
    }

    keyboard.appendChild(row);
}

// Переключаем регистр букв. Цифры при этом не изменяются.
caps.addEventListener('click', function () {
    uppercase = !uppercase;
    caps.classList.toggle('active', uppercase);
    caps.setAttribute('aria-pressed', String(uppercase));

    for (const button of keyboard.querySelectorAll('button')) {
        if (uppercase) {
            button.textContent = button.textContent.toUpperCase();
        } else {
            button.textContent = button.textContent.toLowerCase();
        }
    }
});

// Добавляем пробел.
document.getElementById('space').addEventListener('click', function () {
    insertText(' ');
});

// Добавляем перенос строки.
document.getElementById('enter').addEventListener('click', function () {
    insertText('\n');
});

// Удаляем выделенный текст или один символ слева от курсора.
document.getElementById('backspace').addEventListener('click', function () {
    let start = text.selectionStart;
    const end = text.selectionEnd;

    // Если ничего не выделено, захватываем предыдущий символ.
    if (start === end) {
        start = Math.max(0, start - 1);
    }

    text.setRangeText('', start, end, 'end');
    text.focus();
});
