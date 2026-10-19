// Строгий режим помогает находить ошибки, например использование необъявленных переменных.
"use strict";

// Границы диапазона включаются в игру: можно загадать и 1, и 100.
// Нижняя граница допустимого ответа.
const MIN_NUMBER = 1;
// Верхняя граница допустимого ответа.
const MAX_NUMBER = 100;
// Имя записи, под которым предыдущий секрет хранится в браузере.
const STORAGE_KEY = "lab4.previousSecret";

// Получаем элементы один раз, чтобы затем обновлять их при действиях игрока.
// getElementById находит HTML-элемент по его id. Здесь это поле ввода.
const input = document.getElementById("guess-input");
// Кнопка, по нажатию которой проверяем ответ.
const guessButton = document.getElementById("guess-button");
// Кнопка для начала нового раунда.
const restartButton = document.getElementById("restart-button");
// Область для подсказок, картинок и поздравления.
const feedback = document.getElementById("feedback");
// Список, в который добавляем принятые ответы.
const historyList = document.getElementById("history");
// Надпись, которая видна, пока список попыток пуст.
const emptyHistory = document.getElementById("empty-history");
// Счётчик попыток рядом с заголовком истории.
const attemptCount = document.getElementById("attempt-count");

// Состояние текущей игры: секрет, список ответов и признак завершения.
// Текущий секрет. До первого запуска значение ещё не задано.
let secretNumber;
// Пустой массив: сюда будем записывать числа игрока.
let guesses = [];
// false означает, что игра продолжается; true — что число угадано.
let isFinished = false;

// sessionStorage хранит предыдущий секрет в этой вкладке после обновления.
// В некоторых браузерах хранилище для file:// запрещено настройками.
// В таком случае игра продолжит работать, но после обновления возможен повтор.
function readPreviousNumber() {
  // try/catch позволяет обработать запрет доступа к хранилищу без остановки игры.
  try {
    // getItem возвращает строку или null; Number преобразует её в число. null станет 0, который ниже исключается из диапазона.
    return Number(sessionStorage.getItem(STORAGE_KEY));
  } catch {
    // Если хранилище недоступно, сообщаем, что предыдущий секрет неизвестен.
    return null;
  }
}

// Генерируем случайное целое число, исключая предыдущий секрет.
function generateNumber(previousNumber) {
  // Проверяем, что прошлый секрет — целое число из нашего диапазона. && означает «и».
  const hasPrevious = Number.isInteger(previousNumber)
    && previousNumber >= MIN_NUMBER && previousNumber <= MAX_NUMBER;
  // Количество чисел в диапазоне с учётом обеих границ: 100 − 1 + 1 = 100.
  const count = MAX_NUMBER - MIN_NUMBER + 1;

  // ! меняет логическое значение на противоположное: прошлый секрет отсутствует или некорректен.
  if (!hasPrevious) {
    // Math.random() даёт число от 0 включительно до 1 не включительно.
    // Math.floor() отбрасывает дробную часть, + MIN_NUMBER сдвигает диапазон.
    return Math.floor(Math.random() * count) + MIN_NUMBER;
  }

  // Выбираем из 99 вариантов и «перепрыгиваем» через прошлое число.
  // Так повтор исключается без потенциально бесконечного цикла.
  const number = Math.floor(Math.random() * (count - 1)) + MIN_NUMBER;
  // Условие ? вариант1 : вариант2 выбирает результат. Числа от прежнего секрета сдвигаем на единицу.
  return number >= previousNumber ? number + 1 : number;
}

// Выводим текст и задаём тип сообщения. Если kind не передали, используем обычную подсказку.
function showMessage(message, kind = "hint") {
  // textContent заменяет всё содержимое, поэтому старая картинка тоже удаляется.
  feedback.textContent = message;
  // dataset.kind меняет атрибут data-kind: CSS выбирает по нему цвет сообщения.
  feedback.dataset.kind = kind;
}

// Создаём новую игру и очищаем только состояние текущего раунда.
function startGame() {
  // ?? берёт значение справа, только если слева null или undefined. При первом запуске читаем хранилище.
  const previousNumber = secretNumber ?? readPreviousNumber();
  // Получаем новый секрет, который отличается от предыдущего.
  secretNumber = generateNumber(previousNumber);

  try {
    // Хранилище принимает строки. Сохраняем секрет для следующего обновления страницы.
    sessionStorage.setItem(STORAGE_KEY, String(secretNumber));
  } catch {
    // Отсутствие хранилища не должно мешать угадыванию числа.
  }

  // Очищаем массив попыток предыдущего раунда.
  guesses = [];
  // Снова разрешаем проверять ответы.
  isFinished = false;
  // Без аргументов replaceChildren удаляет все пункты списка на странице.
  historyList.replaceChildren();
  // Показываем сообщение о пустой истории.
  emptyHistory.hidden = false;
  // Обнуляем видимый счётчик.
  attemptCount.textContent = "0";
  // Очищаем поле от введённого числа.
  input.value = "";
  // Разрешаем ввод после завершения предыдущей игры.
  input.disabled = false;
  // Снова делаем кнопку проверки доступной.
  guessButton.disabled = false;
  // Убираем признак ошибки и красную рамку поля.
  input.removeAttribute("aria-invalid");
  // Возвращаем начальную подсказку и одновременно убираем картинку предыдущего раунда.
  showMessage("Начни с любого числа. У тебя сколько угодно попыток.", "initial");
}

// Добавляем каждую принятую попытку, в том числе повтор и правильный ответ.
function addAttempt(number, result) {
  // push добавляет ответ в конец массива. Повторы также сохраняются.
  guesses.push(number);
  // length — количество записанных ответов; выводим его в счётчике.
  attemptCount.textContent = String(guesses.length);
  // После первой попытки скрываем надпись «Пока здесь пусто».
  emptyHistory.hidden = true;

  // Создаём отдельный HTML-пункт списка для этой попытки.
  const item = document.createElement("li");
  // Назначаем CSS-класс, который оформляет плашку попытки.
  item.className = "attempt";
  // Сохраняем результат в data-result; правильный ответ получит особый цвет в CSS.
  item.dataset.result = result;

  // Внутри плашки создаём элемент для самого числа.
  const value = document.createElement("span");
  // Этот класс делает число крупнее и жирнее.
  value.className = "attempt-number";
  // Преобразуем число в текст и записываем в элемент.
  value.textContent = String(number);

  // Создаём второй элемент для краткой подсказки рядом с числом.
  const hint = document.createElement("span");
  // Для краткой подсказки используем более мелкий шрифт.
  hint.className = "attempt-hint";
  // Уточняем направление словами, чтобы не полагаться только на цвет/стрелку.
  hint.textContent = result === "correct" ? "✓ угадано"
    : result === "higher" ? "↑ нужно больше" : "↓ нужно меньше";

  // Сначала помещаем число и подсказку внутрь новой плашки.
  item.append(value, hint);
  // Затем добавляем готовую плашку в конец истории на странице.
  historyList.append(item);
}

// Проверяем введённое число при нажатии кнопки «Проверить».
// addEventListener связывает событие click с функцией. Код внутри выполнится при нажатии кнопки.
guessButton.addEventListener("click", () => {
  // return сразу завершает обработчик, если игра уже выиграна.
  if (isFinished) return;

  // value содержит текст поля. trim убирает пробелы по краям.
  const rawValue = input.value.trim();
  // Преобразуем текст в число, чтобы сравнивать именно числовые значения.
  const number = Number(rawValue);

  // Для нуля показываем особое сообщение с картинкой. Пустое поле — не ноль.
  if (rawValue !== "" && number === 0) {
    // Помечаем поле как ошибочное: CSS выделит его красной рамкой.
    input.setAttribute("aria-invalid", "true");
    // Создаём HTML-элемент картинки; он появится на странице после добавления в feedback.
    const image = document.createElement("img");
    // src указывает на файл картинки, лежащий рядом с index.html.
    image.src = "zero-reaction.png";
    // alt — текстовое описание изображения, в том числе на случай ошибки загрузки.
    image.alt = "Мем-реакция на ввод нуля";
    // CSS-класс задаёт размер картинки и отступы.
    image.className = "zero-reaction";
    // Заменяем прошлую подсказку тремя частями: текстом, картинкой и продолжением текста.
    feedback.replaceChildren("Ах ты ", image, " — так нельзя!");
    // Выбираем оформление сообщения об ошибке.
    feedback.dataset.kind = "error";
    return; // Неверное число не добавляется в историю попыток.
  }

  // Пустая строка превращается в 0, поэтому проверяем её отдельно.
  // || означает «или»: достаточно пустого поля, дроби либо выхода за границы, чтобы отклонить ответ.
  if (rawValue === "" || !Number.isInteger(number)
      || number < MIN_NUMBER || number > MAX_NUMBER) {
    // Помечаем поле как ошибочное: CSS выделит его красной рамкой.
    input.setAttribute("aria-invalid", "true");
    // Объясняем допустимый ввод; эта функция также удаляет прежние картинки.
    showMessage("Введи целое число от 1 до 100. Такой ответ не считается попыткой.", "error");
    // Выходим до записи в историю: некорректный ввод не считается попыткой.
    return;
  }

  // Убираем признак ошибки и красную рамку поля.
  input.removeAttribute("aria-invalid");

  // === проверяет точное совпадение введённого и загаданного чисел.
  if (number === secretNumber) {
    // Записываем победный ответ в историю с результатом correct.
    addAttempt(number, "correct");
    // Запоминаем завершение игры.
    isFinished = true;
    // Выводим надпись о победе и убираем предыдущую подсказку с картинкой.
    showMessage("Число угадано!", "success");
    // Создаём отдельную картинку для правильного ответа.
    const image = document.createElement("img");
    // Файл лежит рядом с index.html и загружается без интернета.
    image.src = "success-reaction.png";
    // Описываем картинку текстом на случай, если она не загрузится.
    image.alt = "Земной поклон тебе, боярин";
    // Этот CSS-класс задаёт размер и расположение картинки победы.
    image.className = "success-reaction";
    // Добавляем картинку перед надписью «Число угадано!».
    feedback.prepend(image);
    // После победы новые ответы не принимаются до начала следующей игры.
    // Блокируем поле, чтобы после победы не вводили новые ответы.
    input.disabled = true;
    // Блокируем кнопку проверки до следующего раунда.
    guessButton.disabled = true;
  } else {
    // Если ответ меньше секрета, нужно большее число (higher); иначе меньшее (lower).
    const result = number < secretNumber ? "higher" : "lower";
    // Сохраняем неверный, но допустимый ответ в истории.
    addAttempt(number, result);
    // Выбираем полный текст подсказки в зависимости от результата сравнения.
    showMessage(result === "higher"
      ? `Загаданное число больше ${number}. Попробуй ещё!`
      : `Загаданное число меньше ${number}. Попробуй ещё!`);
    // При неверной попытке добавляем картинку перед подсказкой.
    // Создаём HTML-элемент картинки; он появится на странице после добавления в feedback.
    const image = document.createElement("img");
    // Используем отдельную картинку для допустимого, но неугаданного числа.
    image.src = "wrong-reaction.png";
    // Текстовое описание соответствует надписи на картинке.
    image.alt = "Хорошая попытка, но нет!";
    // Назначаем класс с размером и отступами картинки.
    image.className = "wrong-reaction";
    // prepend добавляет картинку перед текстом. showMessage выше уже удалил старое изображение.
    feedback.prepend(image);
    // После неверной попытки освобождаем поле для следующего ответа.
    input.value = "";
  }
});

// Кнопка «Новая игра» запускает новый раунд.
// Передаём функцию без скобок: браузер вызовет её при нажатии кнопки.
restartButton.addEventListener("click", startGame);

// При каждом открытии или обновлении страницы начинается новый раунд.
// Здесь скобки нужны: запускаем функцию сразу после загрузки скрипта.
startGame();
