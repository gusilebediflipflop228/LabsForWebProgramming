// У каждого вопроса четыре варианта и один правильный ответ.
// В последнем вопросе ответ нужно ввести с клавиатуры.
const questions = [
    {
        text: "Какое животное самое высокое на Земле?",
        options: ["Слон", "Жираф", "Верблюд", "Носорог"],
        answer: "Жираф"
    },
    {
        text: "Какое животное самое крупное на Земле?",
        options: ["Синий кит", "Слон", "Белый медведь", "Жираф"],
        answer: "Синий кит"
    },
    {
        text: "Какое из этих животных относится к кошачьим?",
        options: ["Волк", "Лиса", "Тигр", "Медведь"],
        answer: "Тигр"
    },
    {
        text: "Сколько ног у взрослого насекомого?",
        options: ["Четыре", "Восемь", "Десять", "Шесть"],
        answer: "Шесть"
    },
    {
        text: "Какая из этих птиц не умеет летать?",
        options: ["Воробей", "Пингвин", "Орёл", "Голубь"],
        answer: "Пингвин"
    },
    {
        text: "Какое животное строит плотины?",
        options: ["Бобр", "Выдра", "Заяц", "Барсук"],
        answer: "Бобр"
    },
    {
        text: "Чем в основном питается большая панда?",
        options: ["Рыбой", "Мясом", "Бамбуком", "Орехами"],
        answer: "Бамбуком"
    },
    {
        text: "У какого животного есть хобот?",
        options: ["Бегемот", "Носорог", "Зебра", "Слон"],
        answer: "Слон"
    },
    {
        text: "Какое животное носит детёныша в сумке?",
        options: ["Кенгуру", "Лошадь", "Лиса", "Белка"],
        answer: "Кенгуру"
    },
    {
        text: "Какое из этих животных — млекопитающее?",
        options: ["Акула", "Дельфин", "Щука", "Осьминог"],
        answer: "Дельфин"
    },
    {
        text: "Какое животное известно чёрно-белыми полосами?",
        options: ["Жираф", "Леопард", "Зебра", "Олень"],
        answer: "Зебра"
    },
    {
        text: "Как называется детёныш лошади?",
        options: ["Телёнок", "Ягнёнок", "Козлёнок", "Жеребёнок"],
        answer: "Жеребёнок"
    },
    {
        text: "Какое из этих животных — земноводное?",
        options: ["Лягушка", "Крокодил", "Черепаха", "Ящерица"],
        answer: "Лягушка"
    },
    {
        text: "Сколько ног у паука?",
        options: ["Шесть", "Восемь", "Четыре", "Десять"],
        answer: "Восемь"
    },
    {
        text: "Какая птица откладывает самые крупные яйца среди современных птиц?",
        options: ["Курица", "Утка", "Страус", "Голубь"],
        answer: "Страус"
    },
    {
        text: "Какое из этих животных — пресмыкающееся?",
        options: ["Дельфин", "Лягушка", "Тритон", "Крокодил"],
        answer: "Крокодил"
    },
    {
        text: "Какое из этих животных имеет восемь щупалец?",
        options: ["Осьминог", "Краб", "Морской конёк", "Лягушка"],
        answer: "Осьминог"
    },
    {
        text: "Какая из этих птиц — домашняя?",
        options: ["Орёл", "Курица", "Сокол", "Дятел"],
        answer: "Курица"
    },
    {
        text: "Какое из этих животных имеет иглы на спине?",
        options: ["Заяц", "Белка", "Ёж", "Крот"],
        answer: "Ёж"
    },
    {
        text: "Какое из этих животных умеет активно летать?",
        options: ["Белка", "Хомяк", "Мышь", "Летучая мышь"],
        answer: "Летучая мышь"
    },
    {
        text: "Как называется детёныш коровы?",
        options: ["Жеребёнок", "Ягнёнок", "Телёнок", "Козлёнок"],
        answer: "Телёнок",
        type: "text"
    }
];

let currentQuestion = 0;
let score = 0;

// Получаем элементы страницы по их id.
const quiz = document.getElementById("quiz");
const progress = document.getElementById("progress");
const questionTitle = document.getElementById("question");
const options = document.getElementById("options");
const form = document.getElementById("answer-form");
const textAnswer = document.getElementById("text-answer");
const answerInput = document.getElementById("answer-input");
const message = document.getElementById("message");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultImage = document.getElementById("result-image");
const resultScore = document.getElementById("result-score");
const restartButton = document.getElementById("restart-button");

function showQuestion() {
    const question = questions[currentQuestion];
    progress.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
    questionTitle.textContent = question.text;
    options.innerHTML = "";
    message.textContent = "";
    answerInput.value = "";
    textAnswer.hidden = question.type !== "text";
    nextButton.textContent = currentQuestion === questions.length - 1 ? "Узнать результат" : "Далее";

    if (question.type === "text") {
        // Четыре варианта видны, но ответ нужно именно написать.
        const list = document.createElement("ul");
        for (const option of question.options) {
            const item = document.createElement("li");
            item.textContent = option;
            list.appendChild(item);
        }
        options.appendChild(list);
    } else {
        for (const option of question.options) {
            const label = document.createElement("label");
            label.className = "option";
            const radio = document.createElement("input");
            radio.type = "radio";
            // Общее имя позволяет выбрать только один вариант.
            radio.name = "answer";
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            options.appendChild(label);
        }
    }
    questionTitle.focus();
}

// Не учитываем регистр, пробелы по краям и разницу между е и ё.
function normalizeAnswer(answer) {
    return answer.trim().toLowerCase().replaceAll("ё", "е");
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Не перезагружаем страницу при отправке формы.
    const question = questions[currentQuestion];
    let answer;
    if (question.type === "text") {
        answer = answerInput.value.trim();
    } else {
        const selected = form.querySelector('input[name="answer"]:checked');
        answer = selected ? selected.value : "";
    }
    if (answer === "") {
        message.textContent = "Сначала выбери или введи ответ.";
        return;
    }
    if (normalizeAnswer(answer) === normalizeAnswer(question.answer)) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quiz.hidden = true;
    result.hidden = false;
    resultScore.textContent = `Правильных ответов: ${score} из ${questions.length}`;
    // Надпись и картинка зависят от количества правильных ответов.
    if (score >= 17) {
        resultTitle.textContent = "Отлично! Ты знаток животных!";
        resultImage.src = "images/owl.svg";
        resultImage.alt = "Мудрая сова";
    } else if (score >= 10) {
        resultTitle.textContent = "Хорошо! Ты многое знаешь!";
        resultImage.src = "images/fox.svg";
        resultImage.alt = "Любознательная лиса";
    } else {
        resultTitle.textContent = "Всё впереди! Попробуй ещё раз!";
        resultImage.src = "images/snail.svg";
        resultImage.alt = "Улитка, которая движется вперёд";
    }
    resultTitle.focus();
}

restartButton.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    result.hidden = true;
    quiz.hidden = false;
    showQuestion();
});

showQuestion();
