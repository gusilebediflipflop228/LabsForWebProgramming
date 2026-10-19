// --поведение

const palette = document.getElementById("palette");
const generateButton = document.getElementById("generateButton");
const message = document.getElementById("message");
// нашли элементы из .html

function generateColor() {
  const randomNumber = Math.floor(Math.random() * 16777216); // диапазон всех возможных шестизначных HEX-цветов
  const hexNumber = randomNumber.toString(16).padStart(6, "0"); // преобразуем число в шестнадцатеричную строку и делаем 6 символов
  return "#" + hexNumber.toUpperCase();
}

function copyColor(color) {
  const textArea = document.createElement("textarea");
  textArea.value = color;
  document.body.appendChild(textArea); // добавляет в body элемент
  textArea.select();
  document.execCommand("copy");
  textArea.remove();  // создали поле → записали цвет → добавили на страницу → выделили текст → скопировали → удалили поле

  message.textContent = "Цвет " + color + " скопирован";

  setTimeout(function () {
    message.textContent = "";
  }, 2000);
}

function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateColor();

    const card = document.createElement("article");
    card.className = "color-card";

    const colorBlock = document.createElement("div");
    colorBlock.className = "color-block";
    colorBlock.style.backgroundColor = color;

    const colorInfo = document.createElement("div");
    colorInfo.className = "color-info";

    const colorCode = document.createElement("span");
    colorCode.className = "color-code";
    colorCode.textContent = color;

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "Копировать";
    copyButton.addEventListener("click", function () { // Начать слушать определённое событие
      copyColor(color);
    });

    colorInfo.appendChild(colorCode);
    colorInfo.appendChild(copyButton);
    card.appendChild(colorBlock);
    card.appendChild(colorInfo);
    palette.appendChild(card);
  }
}

generateButton.addEventListener("click", generatePalette);

generatePalette();
