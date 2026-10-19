// Находим элементы страницы по их id
const passwordElement = document.getElementById("randomPassword");
const generateButton = document.getElementById("generateButton");
const messageElement = document.getElementById("message");

// Наборы символов для пароля
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digitChars = "0123456789";

// \" — кавычка, \\ — обратный слеш
const specialChars = "@#$%^&*(){}[]!\";:'<>?/|\\`~";

// Все доступные символы
const allChars = lowerChars + upperChars + digitChars + specialChars;


// Возвращает один случайный символ из переданного набора
function getRandomChar(chars) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}


// Перемешивает элементы массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Меняем элементы массива местами
        [array[i], array[randomIndex]] =
            [array[randomIndex], array[i]];
    }

    return array;
}


// Создаёт новый пароль
function generatePassword() {
    // Сначала добавляем обязательные символы:
    // одну строчную букву, одну заглавную и один спецсимвол
    const passwordChars = [
        getRandomChar(lowerChars),
        getRandomChar(upperChars),
        getRandomChar(specialChars)
    ];

    // Добавляем ещё 5 случайных символов
    while (passwordChars.length < 8) {
        passwordChars.push(getRandomChar(allChars));
    }

    // Перемешиваем символы, чтобы обязательные символы
    // не находились всегда в начале пароля
    shuffle(passwordChars);

    // Объединяем массив символов в одну строку
    passwordElement.textContent = passwordChars.join("");

    // Показываем сообщение пользователю
    messageElement.textContent = "Пароль сгенерирован";
}


// Генерируем пароль сразу при открытии или обновлении страницы
generatePassword();


// Генерируем новый пароль при нажатии на кнопку
generateButton.addEventListener("click", generatePassword);
