// Находим элементы страницы по их id
const randomNumber = document.getElementById("randomNumber");
const minNumber = document.getElementById("minNumber");
const maxNumber = document.getElementById("maxNumber");
const generateButton = document.getElementById("generateButton");
const message = document.getElementById("message");

// Функция генерации случайного числа
function generateRandomNumber() {
    // Получаем текст из полей
    const minValue = minNumber.value.trim();
    const maxValue = maxNumber.value.trim();

    // Проверяем, заполнены ли оба поля
    if (minValue === "" || maxValue === "") {
        randomNumber.textContent = "—";
        message.textContent = "Введите обе границы диапазона";
        return;
    }

    // Преобразуем текст в числа
    const min = Number(minValue);
    const max = Number(maxValue);

    // Проверяем, являются ли значения целыми числами
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        randomNumber.textContent = "—";
        message.textContent = "Введите целые числа";
        return;
    }

    // Проверяем правильность диапазона
    if (min > max) {
        randomNumber.textContent = "—";
        message.textContent = "Минимальное число не может быть больше максимального";
        return;
    }

    // Генерируем случайное целое число
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Выводим результат и очищаем ошибку
    randomNumber.textContent = result;
    message.textContent = "";
}

// Запускаем функцию при нажатии на кнопку
generateButton.addEventListener("click", generateRandomNumber);

// Генерируем число сразу после загрузки страницы
generateRandomNumber();
