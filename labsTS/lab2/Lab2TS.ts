export function firstTask(): void {
    const min: number = -100;
    const max: number = 100;
    const randNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Число: " + randNumber);

    if (randNumber < 0 ) console.log("Отрицательное: да");
    else console.log("Отрицательное: нет");

    if (randNumber % 2 === 0) console.log("Чётное: да");
    else console.log("Чётное: нет");

    console.log()
}

export function secondTask(): void {
    const randNumber: number = Math.floor(Math.random() * 1000);

    console.log("Число: " + randNumber);

    const numberAsText: string = randNumber.toString();
    const firstDigit: string = numberAsText[0];
    const lastDigit: string = numberAsText[numberAsText.length - 1];
    const sum: number = +firstDigit + +lastDigit; // +firstDigit это унарный оператор, который совершает операцию над операндом -> преобразует операнд в число

    console.log("Первая цифра числа: " + firstDigit);
    console.log("Последняя цифра числа: " + lastDigit)
    console.log("Сумма первой и последней цифр числа: " + sum)
    console.log("Количество цифр в числе: " + numberAsText.length)

    console.log()
}

export function thirdTask(): void {
    const userString: string = "Тимофей";

    console.log("Строка: " + userString);
    console.log("Длина строки: " + userString.length);
    console.log("Последний символ: " + userString[userString.length - 1]);
    for (let i = userString.length - 1; i >= 0; i--){
        console.log("Символ: " + userString[i]);
    }

    console.log()
}

export function fourthTask(): void {
    const userString1: string = "Имя";
    const userString2: string = "Тимофей";

    console.log("Строка1: " + userString1);
    console.log("Строка2: " + userString2);
    console.log("Общая строка: " + userString1 + "&" + userString2);

    if (userString1.length > userString2.length) {
        console.log("Большая строка: " + userString1);
    } else {
        console.log("Большая строка: " + userString2);
    }

    console.log()
}

export function fifthTask(): void {
    const number1: number = Math.floor(Math.random() * 100 + 1);
    const number2: number = Math.floor(Math.random() * 100 + 1);

    console.log("Число 1: " + number1);
    console.log("Число 2: " + number2);

    const numberAsText1: string = number1.toString();
    const numberAsText2: string = number2.toString();

    if (numberAsText1[0] === numberAsText2[0]) console.log("Первые цифры совпадают: да");
    else console.log("Первые цифры совпадают: нет");

    if (number1 % number2 === 0) console.log("Число 1 делится на число 2 без остатка: да")
    else console.log("Число 1 делится на число 2 без остатка: нет");

    if (number1 === number2) console.log("Числа равны")
    else if (number1 > number2) console.log("Число 1 является большим: " + number1)
    else console.log("Число 2 является большим: " + number2)

    console.log()
}

export function sixthTask(): void {
    const number1: number = Math.floor(Math.random() * 100 + 1);
    const number2: number = Math.floor(Math.random() * 100 + 1);

    console.log("Число 1: " + number1);
    console.log("Число 2: " + number2);

    const sum: number = number1 + number2;
    const proizv: number = number1 * number2;

    console.log("Остаток от деления первого на второе: " + number1 % number2);
    console.log("Сумма: " + sum);
    console.log("Произведение: " + proizv);

    console.log()
}

export function seventhTask(): void {
    const number1: number = Math.floor(Math.random() * 50) + 1;
    const number2: number = Math.floor(Math.random() * 50) + 1;
    const number3: number = Math.floor(Math.random() * 50) + 1;

    console.log("Число 1: " + number1);
    console.log("Число 2: " + number2);
    console.log("Число 3: " + number3);

    const sum: number = number1 + number2 + number3;
    const sumSquares: number = number1**2 + number2**2 + number3**2;

    console.log("Среднее арифмитическое: " + sum / 3);
    console.log("Сумма квадратов: " + sumSquares);
    console.log("Наибольшее число: " + Math.max(number1, number2, number3))
    console.log("Наименьшее число: " + Math.min(number1, number2, number3))

    console.log()
}

export function task1(): void {
    const elements: string[] = ["Привет, ", "мир", "!"];
    console.log("#1");
    console.log(elements[0] + elements[1] + elements[2]);

    console.log()
}

export function task2(): void {
    const elements: string[] = ["Привет, ", "мир", "!"];

    console.log("#2");

    elements[0] = "Пока, ";
    console.log(elements);
}

export function task3(): void {
    const str: string = "023m0df0dfg0";
    console.log("#3");

    const positions = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            positions.push(i);
        }
    }

    console.log(positions);

    console.log()
}

export function task4(): void {
    const array: number[] = [];
    const arrayWithFive: number[] = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];

        if (String(currentNumber).includes("5")) {
            arrayWithFive.push(currentNumber);
        }
    }

    console.log("#4");
    console.log(array);
    console.log(arrayWithFive);
    console.log()
}

export function task5(): void {
    const firstArray = [1, 2, 3];
    const secondArray = ['a', 'b', 'c'];
    function mergeArrays(firstArray: number[], secondArray: string[]): (number | string)[] {
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
    console.log()
}

export function task6(): void {
    const array: number[] = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    const sortedArray = [...array];

    sortedArray.sort((a, b) => b - a);

    console.log("#6");
    console.log(array);
    console.log(sortedArray);
    console.log()
}

export function task7(): void {
    const firstArray = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const secondArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const ruArray = [...firstArray];
    const enArray = [...secondArray];

    ruArray.sort();
    enArray.sort();

    console.log("#7");
    console.log(ruArray);
    console.log(enArray);
    console.log()
}

export function task8(): void {
    const array = ['orange', 'red', 'green', 'blue'];

    array.sort((a, b) => a.length - b.length);

    console.log("#8");
    console.log(array);
    console.log()
}

export function task9(): void {
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
    console.log()
}

export function task10(): void {
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
    console.log()
}

export function task11(): void {
    const array = [];

    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 101) - 50);
    }

    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 && array[i] % 7 === 0) {
            resultArray.push(array[i]);
        }
    }

    console.log("#11");
    console.log(array);
    console.log(resultArray);
    console.log()
}

export function task12(): void {
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
    console.log()
}
