

console.log("--- Числа от 1 до 20 ---");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


console.log("--- Числа от 20 до 1 ---");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}


console.log("--- Чётные числа от 1 до 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log("Сумма чисел от 1 до 100:", sum100);


console.log("--- Квадраты чисел ---");
for (let i = 1; i <= 10; i++) {
    console.log(`Квадрат ${i} - ${i * i}`);
}


console.log("--- Таблица умножения на 5 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

let sumEven50 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven50 += i;
    }
}
console.log("Сумма чётных чисел от 1 до 50:", sumEven50);
console.log("--- Шаг 5 до 100 ---");
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}


let countDiv7 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        countDiv7++;
    }
}
console.log("Количество чисел от 1 до 100, делящихся на 7:", countDiv7


let user = {
    name: "Алим",
    age: 16,
    city: "Бишкек"
};
console.log("Объект user:", user);


user.age = 17;

// Добавить свойство phone.
user.phone = "+996555123456";

// Удалить свойство city.
delete user.city;


console.log("Есть ли email?", "email" in user);

// Вывести все ключи объекта через цикл
console.log("--- Ключи объекта ---");
for (let key in user) {
    console.log(key);
}

// Вывести все значения объекта через цикл
console.log("--- Значения объекта ---");
for (let key in user) {
    console.log(user[key]);
}

// Посчитать количество свойств объекта.
let propCount = 0;
for (let key in user) {
    propCount++;
}
console.log("Количество свойств объекта:", propCount);


// --- МАССИВЫ ---

// Создать массив из 5 чисел и вывести каждый элемент через цикл.
let numbers = [10, -5, 7, 20, 3];
console.log("--- Элементы массива ---");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Найти сумму всех элементов массива.
let arrSum = 0;
for (let i = 0; i < numbers.length; i++) {
    arrSum += numbers[i];
}
console.log("Сумма элементов:", arrSum);

// Найти максимальный элемент массива.
let maxEl = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxEl) {
        maxEl = numbers[i];
    }
}
console.log("Максимальный элемент:", maxEl);

// Найти минимальный элемент массива.
let minEl = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minEl) {
        minEl = numbers[i];
    }
}
console.log("Минимальный элемент:", minEl);

// Посчитать количество элементов массива.
console.log("Количество элементов:", numbers.length);

// Посчитать сумму только чётных элементов массива.
let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}
console.log("Сумма чётных элементов:", evenSum);

// Посчитать количество отрицательных чисел в массиве.
let negCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negCount++;
    }
}
console.log("Количество отрицательных чисел:", negCount);

// Найти произведение всех элементов массива.
let product = 1;
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log("Произведение элементов:", product);

// Найти индекс максимального элемента.
let maxIdx = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIdx]) {
        maxIdx = i;
    }
}
console.log("Индекс макс. элемента:", maxIdx);

// Найти индекс минимального элемента.
let minIdx = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIdx]) {
        minIdx = i;
    }
}
console.log("Индекс мин. элемента:", minIdx);

// Проверить, есть ли в массиве число 10 (используя только цикл и if).
let hasTen = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        hasTen = true;
        break;
    }
}
console.log("Есть ли число 10?", hasTen);

// Посчитать, сколько раз число 7 встречается в массиве.
let countSeven = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        countSeven++;
    }
}
console.log("Сколько раз встречается 7:", countSeven);

// Найти последнее положительное число в массиве.
let lastPos = null;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPos = numbers[i];
    }
}
console.log("Последнее положительное число:", lastPos);

// Посчитать среднее арифметическое элементов массива.
let average = arrSum / numbers.length;
console.log("Среднее арифметическое:", average);