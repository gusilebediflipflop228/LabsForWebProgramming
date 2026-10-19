// JavaScript хранит состояние игры, обрабатывает нажатия и обновляет HTML.
// Порядок работы: создание кнопок → startRound → makeMove → проверка результата.
// const запрещает переназначить переменную, let позволяет присвоить новое значение.
// SIZE — число строк и столбцов; WIN_LENGTH — длина победной последовательности.
const SIZE = 5;
const WIN_LENGTH = 3;
// Объект-справочник: по ключу cat или photo получаем символ и имя игрока.
const players = {
  cat: { emoji: '🐱', name: 'котик' },
  photo: { image: 'player-photo.png', name: 'игрок с фото' }
};

// querySelector находит HTML-элемент. Знак # означает поиск по его id.
// Сохраняем ссылки на часто используемые элементы страницы.
const boardElement = document.querySelector('#board');
const turnElement = document.querySelector('#turn');
const dialog = document.querySelector('#result-dialog');
const nextRoundButton = document.querySelector('#next-round');

// Всё хранится в памяти: обновление страницы сбрасывает игру и счёт.
// board — массив из 25 клеток: null означает пусто, cat и photo — сделанные ходы.
let board = Array(SIZE * SIZE).fill(null);
// Ключ игрока, который сейчас ходит. Котик всегда начинает.
let currentPlayer = 'cat';
// Флаг окончания раунда: true запрещает дальнейшие ходы.
let roundFinished = false;
// Число завершённых раундов, включая ничьи.
let rounds = 0;
// Победы каждого игрока. const не мешает менять свойства объекта, например wins.cat.
const wins = { cat: 0, photo: 0 };
// Ссылки на HTML-кнопки. В board лежат данные, а в cells — элементы интерфейса.
const cells = [];

// Один раз при загрузке создаём 25 кнопок с индексами от 0 до 24.
for (let index = 0; index < board.length; index++) {
  const cell = document.createElement('button');
  // type="button" задаёт обычную кнопку, class связывает её с оформлением .cell в CSS.
  cell.type = 'button';
  cell.className = 'cell';
  // При клике вызываем makeMove с индексом этой клетки. Стрелка создаёт функцию-обработчик.
  cell.addEventListener('click', () => makeMove(index));
  // append помещает кнопку на страницу; push добавляет её в массив ссылок.
  boardElement.append(cell);
  cells.push(cell);
}

// Создаём символ игрока: текстовый эмодзи для котика или HTML-картинку для второго игрока.
// Новый элемент создаётся при каждом вызове, чтобы фото могло стоять сразу в нескольких клетках.
function createSymbol(player) {
  if (player === 'cat') return document.createTextNode(players.cat.emoji);

  const image = document.createElement('img');
  image.src = players[player].image; // Файл лежит рядом с index.html и работает без интернета.
  image.className = 'player-photo'; // Размер и форма картинки задаются в CSS.
  image.alt = ''; // Имя игрока уже указано в подписи клетки или рядом с изображением.
  return image;
}

// Проверяем тройки по горизонтали, вертикали и двум диагоналям.
// Границы проверяются по строкам и столбцам, чтобы ряд не «переносился».
// field — массив клеток. Возвращаем индексы первой найденной тройки или пустой массив [].
function findWinningCells(field) {
  // Каждая пара — изменение строки и столбца за один шаг:
  // вправо, вниз, по диагонали вниз-вправо, по диагонали вниз-влево.
  const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

  // Пробуем каждую клетку в качестве начала возможной победной тройки.
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      // Переводим координаты в индекс: строка 1, столбец 2 → 1 * 5 + 2 = 7.
      // В коде строки и столбцы нумеруются с нуля.
      const start = row * SIZE + col;
      // Пустая клетка не может начать победную тройку. continue пропускает её.
      if (field[start] === null) continue;

      // Из каждой пары извлекаем dr (сдвиг строки) и dc (сдвиг столбца).
      for (const [dr, dc] of directions) {
        // Здесь собираем индексы одинаковых символов в выбранном направлении.
        const line = [];

        // Проверяем начало и ещё две клетки: step принимает значения 0, 1, 2.
        for (let step = 0; step < WIN_LENGTH; step++) {
          const r = row + dr * step;
          const c = col + dc * step;
          // || означает «или». Если вышли за любой край, break прерывает проверку направления.
          if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) break;

          const index = r * SIZE + c;
          // Пустая клетка или чужой символ разрывает последовательность.
          if (field[index] !== field[start]) break;
          line.push(index);
        }

        // Собрали три одинаковых символа: return завершает функцию и отдаёт их индексы.
        if (line.length === WIN_LENGTH) return line;
      }
    }
  }

  // Перебрали всё поле, но ни одной тройки нет.
  return [];
}

// Обрабатываем один ход. index — номер нажатой клетки.
function makeMove(index) {
  // Защита от хода после завершения игры и от повторного хода в занятую клетку.
  if (roundFinished || board[index] !== null) return;

  // Сначала записываем ход в данные, затем показываем символ и отключаем кнопку.
  board[index] = currentPlayer;
  cells[index].replaceChildren(createSymbol(currentPlayer));
  cells[index].disabled = true;
  // Обновляем текстовое описание для пользователя программы чтения с экрана.
  cells[index].setAttribute('aria-label', cellLabel(index, players[currentPlayer].name));

  // Победу проверяем раньше ничьей: последний ход на полном поле тоже может выиграть.
  const winningCells = findWinningCells(board);
  if (winningCells.length > 0) {
    // forEach выполняет действие для каждого индекса; класс winning включает подсветку в CSS.
    winningCells.forEach(cellIndex => cells[cellIndex].classList.add('winning'));
    finishRound(currentPlayer);
  // every возвращает true, только если условие выполнено для всех клеток: поле заполнено.
  } else if (board.every(value => value !== null)) {
    // null вместо победителя обозначает ничью.
    finishRound(null);
  } else {
    // Оператор «условие ? значение_если_да : значение_если_нет» переключает игрока.
    currentPlayer = currentPlayer === 'cat' ? 'photo' : 'cat';
    updateTurn();
  }
}

// Завершаем раунд. winner — cat, photo или null при ничьей.
function finishRound(winner) {
  roundFinished = true;
  // ++ прибавляет единицу. Раунд учитывается всегда, победа — только при наличии победителя.
  rounds++;
  if (winner !== null) wins[winner]++;

  // textContent заменяет текст внутри HTML-элемента актуальным значением счётчика.
  document.querySelector('#rounds').textContent = rounds;
  document.querySelector('#cat-wins').textContent = wins.cat;
  document.querySelector('#photo-wins').textContent = wins.photo;
  // Блокируем всё поле, в том числе ещё пустые клетки.
  cells.forEach(cell => { cell.disabled = true; });

  // Выбираем один из трёх итоговых заголовков: ничья, победа котика или победа игрока с фото.
  const title = winner === null
    ? 'Ничья!'
    : winner === 'cat' ? 'Победил котик!' : 'Победил игрок с фото!';
  // Показываем итог и над полем, и в окне; добавляем соответствующий символ и пояснение.
  turnElement.textContent = title;
  document.querySelector('#result-title').textContent = title;
  const resultSymbol = document.querySelector('#result-emoji');
  if (winner === null) {
    resultSymbol.textContent = '🤝';
  } else {
    resultSymbol.replaceChildren(createSymbol(winner));
  }
  document.querySelector('#result-description').textContent = winner === null
    ? 'Поле заполнено. Никто не набрал три подряд.'
    : 'Три символа подряд — раунд выигран!';
  // Кнопка под полем позволит продолжить, даже если пользователь закроет окно через Escape.
  nextRoundButton.hidden = false;
  // Открываем окно поверх страницы. Пока оно открыто, остальная страница недоступна для нажатий.
  dialog.showModal();
}

// Составляем доступное текстовое описание клетки.
// Math.floor(index / SIZE) даёт строку, остаток от деления index % SIZE — столбец.
// Прибавляем 1, чтобы пользователь видел привычную нумерацию 1–5 вместо 0–4.
// Обратные кавычки и ${...} позволяют вставить значения внутрь строки.
function cellLabel(index, content) {
  return `Строка ${Math.floor(index / SIZE) + 1}, столбец ${index % SIZE + 1}: ${content}`;
}

// Обновляем подпись текущего игрока по его ключу из currentPlayer.
function updateTurn() {
  // replaceChildren заменяет содержимое подписью и символом текущего игрока.
  turnElement.replaceChildren(
    document.createTextNode(`Ходит ${players[currentPlayer].name} `),
    createSymbol(currentPlayer)
  );
}

// Начинаем раунд с пустого поля и хода котика. rounds и wins здесь не меняем.
function startRound() {
  board = Array(SIZE * SIZE).fill(null);
  currentPlayer = 'cat';
  roundFinished = false;
  // Очищаем прежние символы, разблокируем кнопки, убираем подсветку и обновляем описания.
  cells.forEach((cell, index) => {
    cell.textContent = '';
    cell.disabled = false;
    cell.classList.remove('winning');
    cell.setAttribute('aria-label', cellLabel(index, 'пусто'));
  });
  // До окончания нового раунда кнопка продолжения не нужна.
  nextRoundButton.hidden = true;
  updateTurn();
}

// Общий обработчик обеих кнопок «Следующий раунд».
function nextRound() {
  dialog.close();
  startRound();
  // Переносим фокус на первую клетку, чтобы можно было продолжить играть с клавиатуры.
  cells[0].focus();
}

// Передаём функцию без скобок: она выполнится при клике, а не сразу при загрузке.
document.querySelector('#dialog-next-round').addEventListener('click', nextRound);
nextRoundButton.addEventListener('click', nextRound);
// Первый запуск: подготавливаем поле и подпись хода сразу после загрузки скрипта.
startRound();
