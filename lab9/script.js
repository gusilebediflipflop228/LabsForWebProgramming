const puzzle = document.getElementById("puzzle");
const fullPicture = document.getElementById("full-picture");
const message = document.getElementById("message");
const restart = document.getElementById("restart");
let solved = 0;

// Создаём 3 строки по 3 квадратные части. Отдельно нарезать файл не нужно.
for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
        const piece = document.createElement("button");
        piece.type = "button";
        piece.className = "piece";
        piece.setAttribute("aria-label", "Повернуть часть " + (row * 3 + column + 1));

        // Позиции 0%, 50% и 100% показывают начало, середину и конец фото.
        piece.style.backgroundPosition = (column * 50) + "% " + (row * 50) + "%";

        // В начале каждая часть повёрнута неправильно: на 90, 180 или 270 градусов.
        let angle = (Math.floor(Math.random() * 3) + 1) * 90;
        piece.style.transform = "rotate(" + angle + "deg)";

        piece.addEventListener("click", function () {
            if (piece.disabled) return;

            angle = (angle + 90) % 360;
            piece.style.transform = "rotate(" + angle + "deg)";

            // Нулевой угол означает правильное положение. Блокируем кнопку.
            if (angle === 0) {
                piece.disabled = true;
                solved++;
            }

            if (solved === 9) {
                // Сначала заменяем части цельной фотографией без границ.
                puzzle.hidden = true;
                fullPicture.hidden = false;

                // Через полсекунды после картинки появляется надпись.
                setTimeout(function () {
                    message.hidden = false;
                }, 500);
            }
        });

        puzzle.appendChild(piece);
    }
}

// Перезагрузка страницы заново перемешивает углы всех частей.
restart.addEventListener("click", function () {
    location.reload();
});
