console.log("new losson 19");

console.log("Завдання 1 ==================================== ");
/*
 Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).

 Використовуйте `Math.random()` для генерації випадкового числа від 0 до 1, а потім масштабуйте та зсувайте це число, щоб воно відповідало вашому діапазону. Використовуйте `Math.floor()` для округлення результату вниз до найближчого цілого числа.

 Після створення функції, використайте її для генерації випадкових чисел в різних діапазонах. Наприклад, виведіть випадкове число від 1 до 10, від 40 до 50, та від 1 до 100. Кожне викликане число повинно бути виведено в консоль.

 Ось приклад використання цієї функції:

 console.log(getRandomInt(1, 10)); // виводить випадкове число від 1 до 10
 console.log(getRandomInt(40, 50)); // виводить випадкове число від 40 до 50
 console.log(getRandomInt(1, 100)); // виводить випадкове число від 1 до 100

 Зверніть увагу, що кожен виклик `getRandomInt` може повертати різні числа, оскільки вони випадкові. Завдання полягає в написанні цієї функції та її використанні для генерації випадкових чисел.
*/

function getRandomInt() {
  return Math.random();
}
console.log(getRandomInt());

function getRandomInt1(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomInt1(1,10));

function getRandomInt2(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomInt2(40, 50));

function getRandomInt3(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomInt3(1, 100));
 
/*function getRandomInt4(min, max) {
  return Math.random() * (max - min) + min
}
console.log(getRandomInt4(1,10));*/


/*
 Використовуйте `Math.floor`, а не `Math.round` для забезпечення рівномірного розподілення випадкових чисел.

 Якщо ви використовуєте `Math.round`, крайні значення (`min` та `max`) матимуть лише половину ймовірності з'явлення, порівняно з іншими числами. Це відбувається тому, що `Math.random()` ніколи не повертає 1, і тому максимальне значення з'являється лише тоді, коли `Math.random()` повертає значення, яке, будучи округленим, дорівнює `max`. Аналогічно, `min` з'являється лише тоді, коли `Math.random()` повертає 0.

 Тому використовуйте `Math.floor` для забезпечення рівномірного розподілення. Це гарантує, що кожне число в діапазоні має однакову ймовірність з'явлення.
*/




console.log ("Завдання 2 ====================================")

/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

function greet(msg, name) {
  return (`${msg}, ${name}`)
}
console.log(greet ('Hi','John'))

function greet2(msg, name) {
  return (`${msg}, ${name}`)
}
console.log(greet2 ('Hey','Bob'))

function greet3(msg, name) {
  return (`${msg}, ${name}`)
}
console.log(greet3 ('Hello','Mary'))



console.log ("Завдання 3 ====================================")
/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  const summ = BigInt(numStr1) + BigInt(numStr2);
  return summ
}
console.log(sumBigIntegers('9007199254740991', '9007199254740991'));