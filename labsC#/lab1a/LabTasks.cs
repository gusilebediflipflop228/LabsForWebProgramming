internal static class LabTasks
{
    public static void firstTask()
    {
        Random random = new Random();
        int number = random.Next(-100, 101);

        Console.WriteLine($"Случайное число: {number}");
        Console.WriteLine($"Отрицательное: {(number < 0 ? "да" : "нет")}");
        Console.WriteLine($"Чётное: {(number % 2 == 0 ? "да" : "нет")}");
        Console.WriteLine();
    }

    public static void secondTask()
    {
        Random random = new Random();
        int number = random.Next(0, 101);

        int lastDigit = number % 10;
        int firstDigit = number;
        int digitCount = 1;

        while (firstDigit >= 10)
        {
            firstDigit /= 10;
            digitCount++;
        }

        int sum = firstDigit + lastDigit;

        Console.WriteLine($"Случайное число: {number}");
        Console.WriteLine($"Первая цифра: {firstDigit}");
        Console.WriteLine($"Последняя цифра: {lastDigit}");
        Console.WriteLine($"Сумма цифр: {sum}");
        Console.WriteLine($"Количество цифр: {digitCount}");
        Console.WriteLine();
    }

    public static void thirdTask()
    {
        string str = "Тимофей";

        Console.WriteLine($"Строка: {str}");
        Console.WriteLine($"Длина строки: {str.Length}");
        Console.WriteLine($"Последний симол: {str[str.Length - 1]}");
        for (int i = str.Length - 1; i >= 0; i--)
        {
            Console.Write($"{str[i]} ");
        }
        Console.WriteLine();

        Console.WriteLine();
    }

    public static void fourthTask()
    {
        string firstString = "Тимофей";
        string secondString = "Программирование";

        string combinedString = firstString + "&" + secondString;

        Console.WriteLine($"Первая строка: {firstString}");
        Console.WriteLine($"Вторая строка: {secondString}");
        Console.WriteLine($"Общая строка: {combinedString}");

        if (firstString.Length > secondString.Length)
        {
            Console.WriteLine($"Более длинная строка: {firstString}");
        }
        else if (secondString.Length > firstString.Length)
        {
            Console.WriteLine($"Более длинная строка: {secondString}");
        }
        else
        {
            Console.WriteLine("Сравнение длины: строки имеют одинаковую длину");
        }

        Console.WriteLine();
    }

    public static void fifthTask()
    {
        Random random = new Random();

        int firstNumber = random.Next(1, 101);
        int secondNumber = random.Next(1, 101);

        int firstDigitOfFirstNumber = firstNumber;
        int firstDigitOfSecondNumber = secondNumber;

        while (firstDigitOfFirstNumber >= 10)
        {
            firstDigitOfFirstNumber /= 10;
        }

        while (firstDigitOfSecondNumber >= 10)
        {
            firstDigitOfSecondNumber /= 10;
        }

        bool firstDigitsMatch =
            firstDigitOfFirstNumber == firstDigitOfSecondNumber;

        bool firstIsDivisibleBySecond =
            firstNumber % secondNumber == 0;

        Console.WriteLine($"Первое число: {firstNumber}");
        Console.WriteLine($"Второе число: {secondNumber}");
        Console.WriteLine($"Первые цифры совпадают: {(firstDigitsMatch ? "да" : "нет")}");
        Console.WriteLine(
            $"Первое число делится на второе без остатка: " +
            $"{(firstIsDivisibleBySecond ? "да" : "нет")}"
        );

        if (firstNumber > secondNumber)
        {
            Console.WriteLine($"Большее число: {firstNumber}");
        }
        else if (secondNumber > firstNumber)
        {
            Console.WriteLine($"Большее число: {secondNumber}");
        }
        else
        {
            Console.WriteLine("Сравнение чисел: числа равны");
        }

        Console.WriteLine();
    }

    public static void sixthTask()
    {
        Random random = new Random();

        int firstNumber = random.Next(1, 101);
        int secondNumber = random.Next(1, 101);

        int remainder = firstNumber % secondNumber;
        int sum = firstNumber + secondNumber;
        int product = firstNumber * secondNumber;

        Console.WriteLine($"Первое число: {firstNumber}");
        Console.WriteLine($"Второе число: {secondNumber}");
        Console.WriteLine($"Остаток от деления первого числа на второе: {remainder}");
        Console.WriteLine($"Сумма чисел: {sum}");
        Console.WriteLine($"Произведение чисел: {product}");
        Console.WriteLine();
    }

    public static void seventhTask()
    {
        Random random = new Random();

        int firstNumber = random.Next(1, 51);
        int secondNumber = random.Next(1, 51);
        int thirdNumber = random.Next(1, 51);
        int fourthNumber = random.Next(1, 51);

        double average =
            (firstNumber + secondNumber + thirdNumber + fourthNumber) / 4.0;

        int sumOfSquares =
            firstNumber * firstNumber +
            secondNumber * secondNumber +
            thirdNumber * thirdNumber +
            fourthNumber * fourthNumber;

        int largestNumber =
            Math.Max(firstNumber, Math.Max(secondNumber, thirdNumber));
        largestNumber = Math.Max(largestNumber, fourthNumber);

        int smallestNumber =
            Math.Min(firstNumber, Math.Min(secondNumber, thirdNumber));
            smallestNumber = Math.Min(smallestNumber, fourthNumber);

        Console.WriteLine($"Первое число: {firstNumber}");
        Console.WriteLine($"Второе число: {secondNumber}");
        Console.WriteLine($"Третье число: {thirdNumber}");
        Console.WriteLine($"Четвертое число: {fourthNumber}");
        Console.WriteLine($"Среднее арифметическое: {average:F2}");
        Console.WriteLine($"Сумма квадратов: {sumOfSquares}");
        Console.WriteLine($"Наибольшее число: {largestNumber}");
        Console.WriteLine($"Наименьшее число: {smallestNumber}");
        Console.WriteLine();
    }

    public static void task1()
    {
        string[] elements = { "Привет, ", "мир", "!" };

        string phrase = string.Concat(elements);

        Console.WriteLine("#1");
        Console.WriteLine(phrase);
        Console.WriteLine();
    }

    public static void task2()
    {
        string[] elements = { "Привет, ", "мир", "!" };

        elements[0] = "Пока, ";

        Console.WriteLine("#2");
        Console.WriteLine(string.Concat(elements));
        Console.WriteLine();
    }

    public static void task3()
    {
        string text = "023m0df0dfg0";

        int zeroCount = 0;

        for (int i = 0; i < text.Length; i++)
        {
            if (text[i] == '0')
            {
                zeroCount++;
            }
        }

        int[] zeroPositions = new int[zeroCount];
        int positionIndex = 0;

        for (int i = 0; i < text.Length; i++)
        {
            if (text[i] == '0')
            {
                zeroPositions[positionIndex] = i;
                positionIndex++;
            }
        }

        Console.WriteLine("#3");
        Console.WriteLine($"[{string.Join(", ", zeroPositions)}]");
        Console.WriteLine();
    }

    public static void task4()
    {
        Random random = new Random();

        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = random.Next(1, 101);
        }

        int numbersWithFiveCount = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i].ToString().Contains('5'))
            {
                numbersWithFiveCount++;
            }
        }

        int[] numbersWithFive = new int[numbersWithFiveCount];
        int newArrayIndex = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i].ToString().Contains('5'))
            {
                numbersWithFive[newArrayIndex] = numbers[i];
                newArrayIndex++;
            }
        }

        Console.WriteLine("#4");
        Console.WriteLine($"[{string.Join(", ", numbers)}]");
        Console.WriteLine($"[{string.Join(", ", numbersWithFive)}]");
        Console.WriteLine();
    }

    public static void task5()
    {
        object[] firstArray = { 1, 2, 3 };
        object[] secondArray = { "a", "b", "c" };

        object[] mergedArray = mergeArrays(firstArray, secondArray);

        Console.WriteLine("#5");
        Console.WriteLine($"[{string.Join(", ", firstArray)}]");
        Console.WriteLine($"[{string.Join(", ", secondArray)}]");
        Console.WriteLine($"[{string.Join(", ", mergedArray)}]");
        Console.WriteLine();
    }

    public static object[] mergeArrays(object[] firstArray, object[] secondArray)
    {
        object[] mergedArray =
            new object[firstArray.Length + secondArray.Length];

        int mergedArrayIndex = 0;
        int largestLength =
            Math.Max(firstArray.Length, secondArray.Length);

        for (int i = 0; i < largestLength; i++)
        {
            if (i < firstArray.Length)
            {
                mergedArray[mergedArrayIndex] = firstArray[i];
                mergedArrayIndex++;
            }

            if (i < secondArray.Length)
            {
                mergedArray[mergedArrayIndex] = secondArray[i];
                mergedArrayIndex++;
            }
        }

        return mergedArray;
    }

    public static void task6()
    {
        Random random = new Random();

        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = random.Next(1, 101);
        }

        int[] sortedNumbers = (int[])numbers.Clone();

        Array.Sort(sortedNumbers);
        Array.Reverse(sortedNumbers);

        Console.WriteLine("#6");
        Console.WriteLine($"[{string.Join(", ", numbers)}]");
        Console.WriteLine($"[{string.Join(", ", sortedNumbers)}]");
        Console.WriteLine();
    }

    public static void task7()
    {
        string[] russianDays =
        {
            "понедельник",
            "вторник",
            "среда",
            "четверг",
            "пятница",
            "суббота",
            "воскресенье"
        };

        string[] englishDays =
        {
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        };

        Array.Sort(russianDays);
        Array.Sort(englishDays);

        Console.WriteLine("#7");
        Console.WriteLine($"[{string.Join(", ", russianDays)}]");
        Console.WriteLine($"[{string.Join(", ", englishDays)}]");
        Console.WriteLine();
    }

    public static void task8()
    {
        string[] colors = { "orange", "red", "green", "blue" };

        Array.Sort(
            colors,
            (firstColor, secondColor) =>
                firstColor.Length.CompareTo(secondColor.Length)
        );

        Console.WriteLine("#8");
        Console.WriteLine($"[{string.Join(", ", colors)}]");
        Console.WriteLine();
    }

    public static void task9()
    {
        Random random = new Random();

        int[] numbers = new int[8];

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = random.Next(0, 51);
        }

        int firstHalfSum = 0;
        int secondHalfSum = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            if (i < numbers.Length / 2)
            {
                firstHalfSum += numbers[i];
            }
            else
            {
                secondHalfSum += numbers[i];
            }
        }

        Console.WriteLine("#9");
        Console.WriteLine($"Массив: [{string.Join(", ", numbers)}]");
        Console.WriteLine($"Сумма первой половины: {firstHalfSum}");
        Console.WriteLine($"Сумма второй половины: {secondHalfSum}");

        if (secondHalfSum != 0)
        {
            double quotient =
                (double)firstHalfSum / secondHalfSum;

            Console.WriteLine($"Частное: {quotient:F2}");
        }
        else
        {
            Console.WriteLine("Частное: деление на ноль невозможно");
        }

        Console.WriteLine();
    }

    public static void task10()
    {
        Random random = new Random();

        int[] numbers = new int[10];
        int negativeNumbersCount = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = random.Next(-100, 101);

            if (numbers[i] < 0)
            {
                negativeNumbersCount++;
            }
        }

        Console.WriteLine("#10");
        Console.WriteLine($"Массив: [{string.Join(", ", numbers)}]");
        Console.WriteLine(
            $"Количество отрицательных чисел: {negativeNumbersCount}"
        );
        Console.WriteLine();
    }

    public static void task11()
    {
        Random random = new Random();

        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = random.Next(-50, 51);
        }

        int[] positiveEvenNumbers = Array.FindAll(
            numbers,
            number => number > 0 && number % 2 == 0
        );

        Console.WriteLine("#11");
        Console.WriteLine(
            $"Исходный массив: [{string.Join(", ", numbers)}]"
        );
        Console.WriteLine(
            $"Положительные чётные числа: " +
            $"[{string.Join(", ", positiveEvenNumbers)}]"
        );
        Console.WriteLine();
    }

    public static void task12()
    {
        string text = "abc123xyz9";

        int firstDigitPosition = -1;
        int lastDigitPosition = -1;

        for (int i = 0; i < text.Length; i++)
        {
            if (char.IsDigit(text[i]))
            {
                if (firstDigitPosition == -1)
                {
                    firstDigitPosition = i + 1;
                }

                lastDigitPosition = i + 1;
            }
        }

        Console.WriteLine("#12");
        Console.WriteLine($"Строка: {text}");
        Console.WriteLine(
            $"Позиция первой цифры: {firstDigitPosition}"
        );
        Console.WriteLine(
            $"Позиция последней цифры: {lastDigitPosition}"
        );
        Console.WriteLine();
    }
}
