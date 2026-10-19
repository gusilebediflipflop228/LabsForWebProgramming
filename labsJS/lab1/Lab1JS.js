function firstTask(){
    const min = -100;
    const max = 100;
    const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Число: " + randNumber);

    if (randNumber < 0 ) console.log("Отрицательное: да");
    else console.log("Отрицательное: нет");

    if (randNumber % 2 === 0) console.log("Чётное: да");
    else console.log("Чётное: нет");
}

function secondTask(){
    const min = -1000;
    const max = 1000;
    const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Число: " + randNumber);
    const numbAsText = String(Math.abs(randNumber));

    const firstDigit = Number(numbAsText[0]);
    const lastDigit = Number(numbAsText[numbAsText.length - 1]);

    console.log("Первая цифра: " + firstDigit);
    console.log("Последняя цифра: " + lastDigit);
    console.log("Суммма первой и последней цифр: " + (lastDigit + firstDigit));
    console.log("Количество цифр: " + numbAsText.length);
}
function thirdTask() {
    const userString = "Тимофей";

    console.log("Строка: " + userString);
    console.log("Длина строки: " + userString.length);
    console.log("Последний символ: " + userString[userString.length - 1]);
    for (let i = userString.length - 1; i >= 0; i--){
        console.log("Символ: " + userString[i]);
    }
}

function fourthTask() {
    const userString1 = "Тимофей";
    const userString2 = "Привет";

    console.log("Строка 1: " + userString1);
    console.log("Строка 2: " + userString2);

    console.log("Общая строка: " + userString1 + "&" + userString2)

    if (userString1.length > userString2.length) {
        console.log("Более длинная строка: " + userString1);
    } else if (userString1.length < userString2.length) {
        console.log("Более длинная строка: " + userString2);
    } else {
        console.log("Результат сравнения: длины строк равны");
    }
}

function fifthTask() {
    const min = 1;
    const max = 100;
    const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Первое число: " + firstNumber);
    console.log("Второе число: " + secondNumber);

    const numbAsText1 = String(firstNumber);
    const firstDigit1 = Number(numbAsText1[0]);

    const numbAsText2 = String(secondNumber);
    const firstDigit2 = Number(numbAsText2[0]);

    if (firstDigit1 === firstDigit2) console.log("Первые цифры совпадают: да");
    else console.log("Первые цифры совпадают: нет");

    if (firstNumber % secondNumber === 0) console.log("Первое число делится на второе без остатка: да");
    else console.log("Первое число делится на второе без остатка: нет");

    if (firstNumber > secondNumber) console.log("Большее число: " + firstNumber);
    else if (firstNumber < secondNumber) console.log("Большее число: " + secondNumber);
    else console.log("Результат сравнения: числа равны");}

function sixthTask() {
    const min = 1;
    const max = 100;
    const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Первое число: " + firstNumber);
    console.log("Второе число: " + secondNumber);

    const ostatok = firstNumber % secondNumber;
    console.log("Остаток от деления первого числа на второе: " + ostatok);

    const sum = firstNumber + secondNumber;
    console.log("Сумма чисел: " + sum);

    const proizv = firstNumber * secondNumber;
    console.log("Произведение чисел: " + proizv);
}

function seventhTask() {
    const min = 1;
    const max = 50;
    const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const thirdNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const number4 = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Первое число: " + firstNumber);
    console.log("Второе число: " + secondNumber);
    console.log("Третье число: " + thirdNumber);
    console.log("Четвертое число: " + number4);

    const sredArifm = (firstNumber + secondNumber + thirdNumber) / 3;
    console.log("Среднее арифметическое: " + sredArifm);

    const sumSquared = firstNumber**2 + secondNumber**2 + thirdNumber**2 + number4**2;
    console.log("Сумма квадратов: " + sumSquared);

    console.log("Наибольшее число: " + Math.max(firstNumber, secondNumber, thirdNumber, number4));
    console.log("Наименьшее число: " + Math.min(firstNumber, secondNumber, thirdNumber, number4));
}

function task1() {
    const elements = ["Привет, ", "мир", "!"];
    console.log("#1");
    console.log(elements[0] + elements[1] + elements[2]);
}

function task2() {
    const elements = ["Привет, ", "мир", "!"];
    console.log("#2");
    elements[0] = "Пока,"

    console.log(elements);
}

function task3() {
    const str = "023m0df0dfg0";
    const positions = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            positions.push(i);
        }
    }

    console.log("#3");
    console.log(positions);
}

function task4() {
    const array = [5, -5, 0, 1];
    const arrayWithFive = [];

    // for (let i = 0; i < 10; i++) {
    //     array.push(Math.floor(Math.random() * 100) - 50);
    // }

    for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];

    if (String(currentNumber).includes("5")) {
        arrayWithFive.push(currentNumber);
    }
    }

    console.log("#4");
    console.log(array);
    console.log(arrayWithFive);
}

function task5() {
    const firstArray = [1, 2, 3];
    const secondArray = ['a', 'b', 'c'];
    function mergeArrays(firstArray, secondArray) {
        const result = [];

        for (let i = 0; i < firstArray.length; i++) {
            result.push(firstArray[i]);
            result.push(secondArray[i]);
        }

        return result;
    }


    console.log("#5");
    console.log(firstArray);
    console.log(secondArray);
    console.log(mergeArrays(firstArray, secondArray));
}

function task6() {
    const array = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    const sortedArray = [...array];

    sortedArray.sort((a, b) => b - a);

    console.log("#6");
    console.log(array);
    console.log(sortedArray);
}

function task7() {
    const firstArray = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const secondArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const ruArray = [...firstArray];
    const enArray = [...secondArray];

    ruArray.sort();
    enArray.sort();



    console.log("#7");
    console.log(ruArray);
    console.log(enArray);
}

function task8() {
    const array = ['orange', 'red', 'pink', 'green', 'blue'];

    array.sort((a, b) => a.length - b.length);

    console.log("#8");
    console.log(array);
}

function task9() {
    const array = [];

    for (let i = 0; i < 8; i++) {
        array.push(Math.floor(Math.random() * 51));
    }

    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (i < array.length / 2) {
            firstHalfSum += array[i];
        } else {
            secondHalfSum += array[i];
        }
    }

    const chastnoe = firstHalfSum / secondHalfSum;

    console.log("#9");
    console.log(array);
    console.log(firstHalfSum);
    console.log(secondHalfSum);
    console.log(chastnoe);
}

function task10() {
    const array = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 201) - 100);
    }

    let negativeCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeCount++;
        }
    }

    console.log("#10");
    console.log(array);
    console.log(negativeCount);
}

function task11() {
    const array = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 101) - 50);
    }

    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            resultArray.push(array[i]);
        }
    }

    console.log("#11");
    console.log(array);
    console.log(resultArray);
}

function task12() {
    const str = "abc3de7";
    const digits = "0123456789";

    let firstDigitPosition = -1;
    let lastDigitPosition = -1;

    for (let i = 0; i < str.length; i++) {
        if (digits.includes(str[i])) {
            if (firstDigitPosition === -1) {
                firstDigitPosition = i + 1;
            }

            lastDigitPosition = i + 1;
        }
    }

    console.log("#12");
    console.log(str);
    console.log(firstDigitPosition);
    console.log(lastDigitPosition);
}


module.exports = { firstTask,
    secondTask,
    thirdTask,
    fourthTask,
    fifthTask,
    sixthTask,
    seventhTask,
    task1,
    task2,
    task3,
    task4,
    task5,
    task6,
    task7,
    task8,
    task9,
    task10,
    task11,
    task12,
    };

