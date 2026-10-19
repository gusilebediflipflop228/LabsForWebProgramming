// Находим поле ввода по его id в HTML.
const input = document.getElementById('input');
// Находим область, в которой появится напечатанный текст.
const output = document.getElementById('output');
// Получаем кнопку запуска анимации.
const startButton = document.getElementById('start');
// Получаем кнопку остановки анимации.
const stopButton = document.getElementById('stop');

const letterDelay = 70; // Время печати одного символа в миллисекундах.
// Храним номер запланированного кадра для его отмены; null означает отсутствие ожидающего кадра.
let animationId = null;
// Массив символов текста, зафиксированного при нажатии «Старт».
let letters = [];

// Показываем часть текста: progress меняется от 0 до 1.
function draw(progress) {
    // Определяем число видимых символов и округляем вниз, чтобы показывать их целиком.
    const count = Math.floor(progress * letters.length);
    // Берём первые count символов и собираем строку. textContent выводит даже HTML-теги как обычный текст.
    output.textContent = letters.slice(0, count).join('');
}

// Останавливаем анимацию, не очищая уже напечатанный текст.
function stopAnimation() {
    // Отменяем следующий запланированный кадр.
    cancelAnimationFrame(animationId);
    // Сбрасываем сохранённый номер кадра.
    animationId = null;
    // Делаем кнопку «Стоп» неактивной, поскольку печать остановлена.
    stopButton.disabled = true;
}

// Каждое нажатие «Старт» начинает печать текущего содержимого поля с начала.
function startAnimation() {
    // Отменяем предыдущую анимацию, если снова нажали «Старт».
    stopAnimation();
    // Разбиваем ввод на символы Unicode; обычные эмодзи не разделяются на две половины UTF-16.
    letters = Array.from(input.value);
    // Очищаем результат предыдущего запуска.
    output.textContent = '';

    // При пустом вводе сразу выходим: анимировать нечего.
    if (letters.length === 0) return;

    // Разрешаем остановить начавшуюся печать.
    stopButton.disabled = false;
    // Запоминаем момент запуска по точным часам браузера, в миллисекундах.
    let startTime = null;
    // Общая длительность зависит от длины текста: по letterDelay миллисекунд на символ.
    const duration = letters.length * letterDelay;

    // Обработчик кадра. Браузер передаёт время кадра в той же шкале, что и performance.now().
    function animate(time) {
        if (startTime === null) {
            startTime = time;
        }
        // Делим прошедшее время на длительность; Math.min ограничивает прогресс значением 1 (100%).
        const progress = Math.min((time - startTime) / duration, 1);
        // Обновляем видимый текст в соответствии с прогрессом.
        draw(progress);

        // Если текст ещё не напечатан полностью, продолжаем анимацию.
        if (progress < 1) {
            // Просим браузер вызвать animate перед следующей отрисовкой и сохраняем номер запроса.
            animationId = requestAnimationFrame(animate);
        // При достижении 100% больше не планируем кадры.
        } else {
            // Анимация завершена: ожидающего кадра больше нет.
            animationId = null;
            // После завершения кнопка остановки больше не нужна.
            stopButton.disabled = true;
        }
    }

    // Планируем первый кадр; последующие кадры запрашивает сама функция animate.
    animationId = requestAnimationFrame(animate);
}

// Связываем нажатие кнопки «Старт» с функцией запуска.
startButton.addEventListener('click', startAnimation);
// Связываем нажатие кнопки «Стоп» с функцией остановки.
stopButton.addEventListener('click', stopAnimation);
