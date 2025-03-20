// const { parse } = require("path")

// const icon = document.querySelector(".icon-menu")
// icon.addEventListener("click", function () {
//   document.documentElement.classList.toggle("menu-open")
// })

////////////////////////////////////////////////////////////
/*var amount = 99.99;
amount = amount * 2;

console.log(amount);

amount = "$" + String(amount);

console.log(amount);*/

//////////////////////////////////////////////////////////
/*const accessory_price = 9.99;

var bank_balance = 150;
var amount = 99.99;

amount = amount * 2;

if (amount < bank_balance) {
  console.log("Я возьму этот аксессуар!");
  amount = amount + accessory_price;
} else {
  console.log("Нет, спасибо.");
}*/
/////////////////////////////////////////////////////////////////////////////////
/*function printAmount() {
  console.log(amount.toFixed(2));
}

var amount = 99.99;

printAmount();

amount = amount * 2;
printAmount();*/
///////////////////////////////////////////////////////////////////
/*function printAmount(amt) {
  console.log(amt.toFixed(2));
}
function formatAmount() {
  return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log(amount);*/
//////////////////////////////////////////////////////////////////
/*const tax_rate = 0.08;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + amt * tax_rate;

  return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));*/
/////////////////////////////////////////////////////////////////////////
/*• Напишите программу для вычисления общей стоимости покупки телефона. Вы будете
продолжать покупать телефоны (подсказка: циклы!) пока у вас не закончатся деньги на
банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех
пор, пока сумма покупки не превысит ваш мысленный предел трат.
• После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран
вычисленную сумму покупки, правильно отформатировав её.
• Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе
это позволить или нет.
28
• Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены
аксессуара» и «предела трат» также как и переменную для вашего «баланса банковского
счета».
• Вам следует определить функции для вычисления налога и для форматирования цены со
знаком валюты и округлением до двух знаков после запятой.
• Бонусная задача: Попробуйте включить ввод данных в вашу программу, например с помощью
prompt(..), рассмотренную ранее в разделе «Ввод». Вы можете, например, запросить у
пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const SPENDING_THRESHOLD = 200 spending_
const tax_rate = 0.08;
const phonePrice = 99.99;
const accessory_price = 9.99;*/

///////////////////////////////////////////////////////////////
/*const minValue = 1,
  maxValue = 5;
const randNumber =
  minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
let userNum = parseInt(prompt("Enter your number"));

if (userNum === randNumber) alert("You right!");
else {
  userNum = parseInt(prompt("You dont right. Enter your number"));
  if (userNum === randNumber) alert("You right!");
  else alert("You dont right");
}
//let randNumber = 1 + Math.floor(Math.random() * 9);
document.write(randNumber);*/
///////////////////////////////////////////////////////////////////////////
/*const productPrice = parseFloat(prompt("Enter price product"));
const userMoney = parseFloat(prompt("Amount of money"));

if (userMoney < productPrice) alert("Not enough money");
else {
  alert("Congratulations");
  if (userMoney - productPrice >= 4)
    alert("I recommend buying a lottery ticket");
}*/
///////////////////////////////////////////////////////////////////////////
/*const userAge = parseInt(prompt("Your age"));
let result;
if (userAge < 1 || userAge > 150) result = "Not correct Age";
else if (userAge <= 7) result = "Child in kinergarten";
else if (userAge <= 17) result = "Child in the school";
else if (userAge <= 22) result = "Student";
else if (userAge <= 65) result = "Work man";
else result = "Rent man";
alert(result);*/
/////////////////////////////////////////////////////
// let driverCategory = prompt("Enter your category: A, B, C ", "")

// if (!driverCategory) {
//   alert("Error")
// } else {
//   let category
// }

// switch (driverCategory.toUpperCase()) {
//   case "A":
//     category = "BIker"
//     break
//   case "B":
//     category = "Auto"
//     break
//   case "C":
//     category = "LKW"
//     break
//   default:
//     category = "Error"
// }
// alert(category)

//Задача №38
/*const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Error");
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {

      //let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      //if (genre === "" || genre == null) {
       // console.log("Вы ввели некорректные данные или не ввели совсем");
       // i--;
      //} else {
      //  personalMovieDB.genres[i - 1] = genre;
      //}

      let genres = prompt(
        `Введите ваши любимые жанры через запятую`
      ).toLocaleLowerCase();

      if (genres === "" || genres == null) {
        console.log("Вы ввели некорректные данные или не ввели совсем");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};*/

// №39 - Динамическая типизация

/*console.log(typeof (null + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);*/
////////////////////////////////////////////////////////////
//cargoWeight
//weightLimit
/*let cargoWeight = parseFloat(prompt("Cargo weight"));
const weightLimit = 12;
///////////////////////////////////////////////////////////
if (cargoWeight <= weightLimit) alert("Yes!");
else alert("No!");*/
/*let workerAge = parseInt(prompt("Age worker"));
const minAllowedAge = 32,
  maxAllowedAge = 45;
if (workerAge >= 32 && workerAge <= 45) alert("ok");
else alert("no");*/
/////////////////////////////////////////////////////////
/*let userAge = parseInt(prompt("Your age?"));
const edgeAge = 17;
if (userAge <= edgeAge) {
  if (confirm("Do you want icecream?")) alert("Protect yourself");
  else alert("Sorry....");
} else {
  if (confirm("Do you want beer?")) alert("Drink beer");
  else alert("Drink tee");
}*/
////////////////////////////////////////////////////////////////////////
/*let score = parseInt(prompt("Your score"));
if (score === 5) alert("perfect");
else if (score === 4) alert("good");
else if (score === 3) alert("norm");
else if (score === 1 || score === 2) alert("bad");
else alert("wrong score");*/
//////////////////////////////////////////////////
/*let placeNum = parseInt(prompt("Your place"));
let result;

switch (placeNum) {
  case 1:
    result = "Gold";
    break;
  case 2:
    result = "silver";
    break;
  case 3:
    result = "bronze";
    break;
  default:
    result = "certificat";
    break;
}
alert(result);*/
//Дано 2 дійсні змінні a, b. Поміняти значення місцями
/*let a = parseFloat(prompt("a =", "0"));
let b = parseFloat(prompt("b =", "0"));
// //Крок 2. Обчислення
let c = a;
a = b;
b = c;
document.write(`a = ${a}, b = ${b}`);*/
//Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином:
//  змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.
/*let a = parseFloat(prompt("a =", "0"));
let b = parseFloat(prompt("b =", "0"));
let c = parseFloat(prompt("c =", "0"));

let f = a;
a = b;
b = c;
c = f;
document.write(`a = ${a}, b = ${b}, c = ${c}`);*/
/*let coinNumber = parseInt(prompt("Number of coin", "100"));
let grnNumber = Math.floor(coinNumber / 100);
let copNumber = coinNumber / 100;
document.write(`${grnNumber} grn. , ${copNumber} kop.`);*/

/*let userAge = parseInt(prompt("User age", "18"));

let minAge = 18;

if (userAge < minAge) alert("No enter");
else alert("You are wellcome!");*/

/*let solary = parseInt(prompt("What is your solary", "25000"));
const minSolary = 3500;
const tax = 20;

if (solary > minSolary) solary = solary - (solaty * tax) / 100;
document.write(`You have ${solary} $`);*/

/*let cargoWeight = parseInt(prompt("Enter cargo weight", "12"));
const cargoLimit = 12;

if (cargoWeight <= cargoLimit) alert("Yes, you can");
else alert("No, you dont");*/

//На роботу компанія приймає працівників від 32 до 45 років.
// З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.
/*let workerAge = parseInt(prompt("Enter your age", "32"));
const minAge = 32;
const maxAge = 45;
if (32 <= workerAge <= 45)
  if (minAge <= workerAge && workerAge <= maxAge) alert("You are wellcome!");
  else alert("No enter");*/

//Якщо вік відвідувача >21, то запросимо у салон
// і будемо питати яке авто хоче купити (якщо тойота - то подарувати) інакше відмовити у відвідуванні
/*let clientAge = parseInt(prompt("Age client", "21"));
const minAge = 21;
const giftCar = "Toyota";
if (clientAge > minAge) {
  alert("You are wellcome");
  let clientCarChoice = prompt("Which auto do you want?", "BMW");
  if (clientCarChoice === giftCar) alert("You won the car! Congrats!");
  else alert("Give me the Money!");
} else alert("Your age not enough ");*/
//З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

/*let firstKind = prompt("What is your name?");
let countCandyfirstKind = parseInt(prompt("How much candys you have?"));
let secondKind = prompt("What is your name?");
let countCandysecondKind = parseInt(prompt("How much candys you have?"));

if (countCandyfirstKind > countCandysecondKind)
  alert(`Kind ${firstKind} how more candys`);
else if (countCandyfirstKind < countCandysecondKind)
  alert(`Kind ${secondKind} how more candys`);
else alert("Both kind have candys");*/

//З клавіатури вводиться ціна товару і кількість грошей.
//  Якщо грошей не вистачає то відмовляємо у покупці,
//  інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
//let randNumber = 1 + Math.floor(Math.random() * 9)
//document.write(randNumber)

/*const minValue = 1,
  maxValue = 5
const randNumber =
  minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

let userNum = parseInt(prompt("Enter your number!"))

if (userNum === randNumber) alert("You write!")
else {
  userNum = parseInt(prompt("You dont write. Enter your number!"))
  if (userNum === randNumber) alert("You write!")
  else alert("You dont write!")
}
document.write(randNumber)*/

//З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає то відмовляємо у покупці, інакше,
//  якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

/*const productPrice = parseFloat(prompt("Enter product price"))
const userMoney = parseFloat(prompt("How mutch money?"))
if (userMoney < productPrice) alert("Not enoght money")
else {
  alert("Congrats with purchase")
  if (userMoney - productPrice >= 4) alert("Recommended buy lottery")
}*/

//З клавіатури вводиться вік людини. Вивести на екран ким він
// є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
/*const userAge = parseInt(prompt("Your age?"))
let result
if (userAge < 1 || userAge > 150) result = "Not correct age"
else if (userAge <= 7) result = "Kid in kindergarten"
else if (userAge <= 17) result = "Kid in the school"
else if (userAge <= 22) result = "Student"
else if (userAge <= 65) result = "Worker"
else result = "Pension"
alert(result)*/

//Вводиться кількість місяців. Вивести кількість повних років.
/*const monthNum = parseInt(prompt("Count of month"))
const yearsNum = Math.floor(monthNum / 12)
alert(yearsNum)*/

/*const monthNum = parseInt(prompt("Count of month"))
const yearsNum = Math.ceil(monthNum / 12)
alert(yearsNum)*/

/*const monthNum = parseInt(prompt("Count of month"))
const currentMonth = ((monthNum - 1) % 12) + 1
document.write(currentMonth)*/
//Вводиться два номери призових (1 - 3) місць, яке місце не зайняла команда?
/*const place1 = parseInt(prompt("First place"))
const place2 = parseInt(prompt("Second place"))
const lastPlace = 6 - (place1 + place2)
document.write(lastPlace)*/

//Вводиться кількість пасажирів. Визначити потрібну кількість автобусів(20 місць)
/*const busPlaces = 20
const passengersNumber = parseInt(prompt("Кількість пасажирів"))
const busNumber = Math.ceil(passengersNumber / busPlaces)
document.write(
  `Для перевезення ${passengersNumber} пасажирів потрібно ${busNumber} автобусів`
)*/

//Вводиться номер літери. Вивести цю літеру.
/*const letterNum = parseInt(prompt("Number of letter"))
const letter = String.fromCharCode(65 + (letterNum - 1))
document.write(`Літера з номером ${letterNum} = ${letter}`)*/

/*const frameworkTitle = prompt("Name of framework")
let result
switch (frameworkTitle) {
  case "Vue":
  case "React":
    result = "Frontend"
    break
  case "Express":
    result = "Backend"
    break
  default:
    result = "Unknown"
    break
}
document.write(result)*/

//Міні перекладач. ВВодиться одне слово: "table", "car", "bus," "man".Вивести переклад.
/*const enWorld = prompt("Word")
let uaWord
switch (enWorld) {
  case "table":
    uaWord = "стіл"
    break
  case "car":
    uaWord = "машина"
    break
  case "bus":
    uaWord = "автобус"
    break
  case "man":
    uaWord = "чоловік"
    break
  default:
    uaWord = "Unknown"
    break
}
document.write(uaWord)*/

//Вводиться категорія користувача. Вивести які дії він модже виконувати
// admin - read, edit, add
// manager - read, edit
// user - read
/*const userType = prompt("User type")
let permissions = ""
switch (userType) {
  case "admin":
    permissions += " add "
  case "manager":
    permissions += " edit "
  case "user":
    permissions += " read "
    break
  default:
    permissions = "unknown"
    break
}
document.write(permissions)*/

//Вводиться назва предмету. Вивести кабінет, у якому проводться ця дисципліна
//math - 302
//history - 213
//geography - 102
/*const subjectType = prompt("Type of subject")
let numOfOffice
switch (subjectType) {
  case "math":
    numOfOffice = "302"
    break
  case "history":
    numOfOffice = "213"
    break
  case "geography":
    numOfOffice = "102"
    break

  default:
    numOfOffice = "unknown"
    break
}
document.write(numOfOffice)*/

//Вводиться статус відповіді. Вивести текстове позначення категорії статусу
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
//1xx: Informational (информационные)(100 - 199)
//2xx: Success (успешно):(200 - 299)
//3xx: Redirection (перенаправление):(300 - 399)
//4xx: Client Error (ошибка клиента):(400 -499)
//5xx: Server Error (ошибка сервера):(500 - 599)
/*const statusCode = parseInt(prompt("Status code "), 10)
let res
if (statusCode < 100 || statusCode >= 600) res = "Incorrect code"
else if (statusCode < 200) res = "Informational"
else if (statusCode < 300) res = "Success"
else if (statusCode < 400) res = "Redirection"
else if (statusCode < 500) res = "Client Error"
else res = "Server Error"

document.write(res)*/

//З клавіатури вводиться номер дня. Вивести на екран чи це робочий, чи вихідний день
/*const dayNum = parseInt(prompt("Day "))
let res
switch (dayNum) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    res = "Workday"
    break
  case 6:
  case 7:
    res = "Holliday"
    break

  default:
    res = "Error"
    break
}
document.write(res)*/

//Знайти найбільше серед двох чисел
/*const num1 = parseFloat(prompt("Num 1"))
const num2 = parseFloat(prompt("Num 2"))
let max
if (num1 > num2) max = num1
else max = num2
document.write(`Max = ${max}`)*/

//Найбільше замінити на 0, якщо однакові то обидва на 0
/*let num1 = parseFloat(prompt("Num 1"))
let num2 = parseFloat(prompt("Num 2"))

if (num1 === num2) num1 = num2 = 0
if (num1 > num2) num1 = 0
else num2 = 0
document.write(`Num1 = ${num1}, Num2 = ${num2}`)*/

//Знайти найбільше серед трьох
/*let num1 = parseFloat(prompt("Num 1"))
let num2 = parseFloat(prompt("Num 2"))
let num3 = parseFloat(prompt("Num 3"))
//let max = Math.max(num1, num2, num3)
let max = num1
if (num2 > max) max = num2
if (num3 > max) max = num3
document.write(`Max = ${max}`)*/

//Знайти найбільше парне число серед 4-х цілих чисел. (число %2 === 0)
/*let num1 = parseFloat(prompt("Num 1"))
let num2 = parseFloat(prompt("Num 2"))
let num3 = parseFloat(prompt("Num 3"))
let num4 = parseFloat(prompt("Num 4"))

let max = -Infinity
if (num1 % 2 === 0 && num1 > max) max = num1
if (num2 % 2 === 0 && num2 > max) max = num2
if (num3 % 2 === 0 && num3 > max) max = num3
if (num4 % 2 === 0 && num4 > max) max = num4

if (isFinite(max)) document.write(`Max = ${max}`)
else document.write("Не має парних")*/

//Знайти найбільше серед тих які менші за середні арифметичне
/*let num1 = parseFloat(prompt("Num 1"))
let num2 = parseFloat(prompt("Num 2"))
let num3 = parseFloat(prompt("Num 3"))
let num4 = parseFloat(prompt("Num 4"))
const average = (num1 + num2 + num3 + num4) / 4

let max = -Infinity
if (num1 < average && num1 > max) max = num1
if (num2 < average && num2 > max) max = num2
if (num3 < average && num3 > max) max = num3
if (num4 < average && num4 > max) max = num4

document.write(`Max = ${max}`)*/

//Les 5
/*let guessedCount = 0
for (let i = 0; i < 6; i++) {
  let compNum = 1 + Math.floor(Math.random() * 10)
  let userNum = parseInt(prompt("Enter your number (1 - 10)"))
  if (userNum === compNum) {
    guessedCount++
  }
  document.write(`User: ${userNum}, Comp: ${compNum} <br>`)
}
document.write(`Right num: ${guessedCount}`)*/

//Поступово вводиться вартість 7 товарів. Знайти загальну вартість.
/*let sum = 0
for (let i = 1; i <= 7; i++) {
  const productPrice = parseFloat(prompt(`Product ${i} price`))
  sum += productPrice
}
document.write(`Total = ${sum}`)*/

//Вводиться прибуток магазину за 3 тижні (для кожного тижня вводиться прибуток
//за робочі дні 1 - 5). Знайти загальну суму
// загальна сума = 0
// для кожного тижня від 1 до 3 {
//               для кожного дня у тижні від 1 до 5{
//                  вивести прибуток і додати до загальної суми
//}
//}
// загальна сума = 0
/*let total = 0
// для кожного тижня від 1 до 3 {
for (let weekNum = 1; weekNum <= 3; weekNum++) {
  let weeklyTotal = 0 // Змінна для підрахунку прибутку за тиждень
  //для кожного дня у тижні від 1 до 5{
  for (let dayNum = 1; dayNum <= 5; dayNum++) {
    //вивести прибуток і додати до загальної суми
    const income = parseFloat(prompt(`Week ${weekNum}   day ${dayNum}`))
    weeklyTotal += income // Додаємо до тижневого прибутку
    total += income // Додаємо до загальної суми
  }
  // Виведення прибутку за тиждень
  document.write(`Week ${weekNum} total = ${weeklyTotal}<br>`)
}
// Виведення загальної суми
document.write(`Total = ${total}`)*/

/*let correctAnswersNumber = 0
for (let num = 0; num < 4; num++) {
  const num1 = 1 + Math.floor(Math.random() * 9)
  const num2 = 1 + Math.floor(Math.random() * 9)
  const userAnswer = parseInt(prompt(`${num1} * ${num2} = `))
  const correctAns = num1 * num2
  if (userAnswer === correctAns) {
    alert("ok")
    correctAnswersNumber++
  } else alert(`Error. Correct: ${correctAns}`)
}
alert(correctAnswersNumber)*/

//Вводимо початкову кількість булок,
// які треба продати. Поки залишаються булочки продавати їх клієнтам.
/*let bunsNumber = parseInt(prompt("Початкова кількість булок"))
while (bunsNumber > 0) {
  const clientsBunsNumber = parseInt(prompt("Скільки ви хочете булок?"))
  if (clientsBunsNumber <= bunsNumber) {
    alert("Заберіть булки")
    bunsNumber -= clientsBunsNumber
  } else alert("Вибачте, у нас не має такої кількості булок")
}
alert("Товар розпродан!")*/

//З клавіатури вводиться два числа N i M (N < M). Вивести на єкран числа
// N---M
//N +1 --- M-1
//N +2 --- M-2
//N +3 --- M-3

/*let N = 2,
  M = 7
while (N < M) {
  document.write(`${N} - ${M} <br>`)
  N++
  M--
}*/

//З клавіатури вводяться поступово двоцифрові числа. Знаходимо їх добуток
// поки не буде введено 0.
/*let product = 1
let userNumber = 1
do {
  product *= userNumber
  userNumber = parseInt(prompt("Введіть число"))
} while (userNumber !== 0)
document.write(`Product = ${product}`)*/

//3 рази дати можливість ввести пароль (пароль 123)
/*let isLoggedIn = false
for (let i = 0; i < 3; i++) {
  //Ввести пароль
  const password = prompt("Enter password")
  //якщо правильно, то припинити введення
  if (password === "123") {
    isLoggedIn = true
    break
  }
}
if (isLoggedIn) alert("You are wellcome!")
else alert("Error")*/
//Дано 3 сайти, на яких користувач хоче купити по 2 товари. Але якщо гроші
//закінчились, то зрозуміло, що покупка припиняється
/*let userMoney = parseFloat(prompt("Початкова кількість грошей користувача"))
sitesLabel: for (let sitesNum = 1; sitesNum <= 3; sitesNum++) {
  for (let productNum = 1; productNum <= 2; productNum++) {
    const productPrice = parseFloat(
      prompt(`Site :${sitesNum}, product num : ${productNum}`)
    )
    if (productPrice <= userMoney) {
      alert("Товар куплено")
      userMoney -= productPrice
    }
    if (userMoney === 0) break sitesLabel
  }
}*/
//Знайти найбільші 2 числа з 4х цілих чисел
/*const num1 = parseInt(prompt("Num1"))
const num2 = parseInt(prompt("Num2"))
const num3 = parseInt(prompt("Num3"))
const num4 = parseInt(prompt("Num4"))
let max1, max2
//max1 = max2
if (num1 > num2) {
  max1 = num1
  max2 = num2
} else {
  max1 = num2
  max2 = num1
}

if (num3 > max1) {
  max2 = max1
  max1 = num3
} else if (num3 > max2) max2 = num3

if (num4 > max1) {
  max2 = max1
  max1 = num4
} else if (num4 > max2) max2 = num4

document.write(`max1 = ${max1} , max2 = ${max2}`)*/

/*//З клавіатури вводиться вік. Треба вивести
//чи може користувач водити авто (18 років)

//const MIN_USER_AGE = 18
const userAge = parseInt(prompt("Enter user age"))

let result
if (userAge >= MIN_USER_AGE) {
  result = "You can drving"
} else result = "You cannot driving"
document.write(result)*/

/*//З клавіатури вводиться кількість одиниць товару, що хоче придбати користувач.
//Якщо кількість більша за 10, то привітати, повідомити про елітний статус і визначити статус "1"
//інакше - привітати користувача, і визначити статус - "2"*/
///////////////////////////////////////////////////////////////////////////////////
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели???", "")

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", "")
//   b = prompt("На сколько оцените его?", "")

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b
//     console.log("done")
//   } else {
//     console.log("error")
//     i--
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов")
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классичесский зритель")
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман")
// } else {
//   console.log("Произошла ошибка")
// }

// console.log(personalMovieDB)
/////////////////////////////Стрелочные функции №25
// let num = 20
// function showFirstMessage(text) {
//   console.log(text)
//   num = 15
// }

// showFirstMessage("Hello World!")
// console.log(num)

////////////////////////////////////////
// function calc(a, b) {
//   return a + b
// }

// console.log(calc(4, 3))
// console.log(calc(1, 5))
// console.log(calc(6, 9))

////////////////////////////////////////
// function ret() {
//   let num = 50

//   return num
// }

// const anotherNum = ret()
// console.log(anotherNum)

/////////////////////////////////////////////////
// const logger = function () {
//   console.log("Hello!")
// }
// logger()
/////////////////////////////////////////////////

// const calc = (a, b) => {
//   console.log("1")
//   return a + b
// }
////////////////////////////////////////////////////
////////////№26-Аргутенты функций

// const usdCurr = 28
// const discount = 0.9
//const euroCurr = 35

// function convert(amount, curr) {
//   return curr * amount
// }

// function promotion(result) {
//   console.log(result * discount)
// }

// const res = convert(500, usdCurr)
// promotion(res)
// convert(500, usdCurr)
//convert(500, euroCurr)
// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//     if (i === 3) return
//   }
//   console.log("Done")
// }
// test()
//////////////////////////////////////
// function doNothing() {}
// console.log(doNothing() === undefined)
////////////////////////////////////////////////
////Методы и с-ва строк

// const str = "teSt"

//console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str)

// const fruit = "Some fruit"

// console.log(fruit.indexOf("q"))

// const logg = "Hello world!"
//console.log(logg.slice(-5, -1))

//console.log(logg.substring(6, 11))

// console.log(logg.substr(6, 5))

// const num = 12.2
// console.log(Math.round(num))

// const test = "12.2px"
// console.log(parseInt())
///////////////////////////////////////////////////////////////
/////// 29 - Практика, ч3.
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

// let numberOfFilms

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели???", "")

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели???", "")
//   }
// }

// start()

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//       b = prompt("На сколько оцените его?", "")

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b
//       console.log("done")
//     } else {
//       console.log("error")
//       i--
//     }
//   }
// }

// rememberMyFilms()

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов")
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классичесский зритель")
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман")
//   } else {
//     console.log("Произошла ошибка")
//   }
// }

// //detectPersonalLevel()

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB)
//   }
// }

// showMyDB(personalMovieDB.privat)

// //console.log(personalMovieDB)

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
//   }
// }

// writeYourGenres()

//31 - Callback-function

// function first() {
//   //Do something
//   setTimeout(function () {
//     console.log(1)
//   }, 500)
// }
// function second() {
//   console.log(2)
// }

// first()
// second()

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`)
//   callback()
// }

// function done() {
//   console.log("Я прошёл этот урок!")
// }

// learnJS("JavaScript", done)

//Объекты - 32
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test")
//   },
// }

// options.makeTest()

// const { border, bg } = options.colors
// console.log(border)

// console.log(Object.keys(options).length)
// console.log(options.name)

// delete options.name
// console.log(options)
// let counter = 0

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//       counter++
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     counter++
//   }
// }
// console.log(counter)

// Массивы - 33

// const arr = [21, 33, 6, 18, 10]
// arr.sort(compareNum)
// console.log(arr)

// function compareNum(a, b) {
//   return a - b
// }
// arr[99] = 0
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`)
// })

// console.log(arr.length)

//arr.pop()
// arr.push(10)

// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let value of arr) {
//   console.log(value)
// }

// const str = prompt("", "")
// const products = str.split(", ")
// products.sort()
// console.log(products.join("; "))

//35 - передача по ссылке

// let a = 5
// b = a

// b = b + 5

// console.log(a)
// console.log(b)

// const obj = {
//   a: 5,
//   b: 1,
// }

// const copy = obj
// copy.a = 10
// console.log(copy)
// console.log(obj)

// function copy(mainObj) {
//   let objCopy = {}

//   let key
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key]
//   }
//   return objCopy
// }
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// }

// const newNumbers = copy(numbers)

// newNumbers.a = 10
// newNumbers.c.x = 10

// console.log(newNumbers)
// console.log(numbers)

// const add = {
//   d: 17,
//   e: 20,
// }

// const clone = Object.assign({}, add)

// clone.d = 20

// console.log(add)
// console.log(clone)

// const oldArray = ["a", "b", "c"]
// const newArray = oldArray.slice()

// newArray[1] = "adadkkls"
// console.log(newArray)
// console.log(oldArray)

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "facebook"]

// console.log(internet)

// function log(a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// const num = [2, 5, 7]

// log(...num)

// const array = ["a", "b"]

// const newAarray = [...array]

// const q = {
//   one: 1,
//   two: 2,
// }
// const newObj = { ...q }

//36 - основы ООП
// let str = "some"
// let strObj = new String(str)

// console.log(typeof str)
// console.log(typeof strObj)

// console.dir([1, 2, 3])

// const soldier = {
//   helth: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello!")
//   },
// }

// const john = Object.create(soldier)

// const john = {
//   health: 100,
// }

//john.__proto__ = soldier

// Object.setPrototypeOf(john, soldier)

// console.log(john.armor)

// john.sayHello()

//37.практика
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// "use strict"

// Код возьмите из предыдущего домашнего задания

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели???", "")

//     while (
//       personalMovieDB == "" ||
//       personalMovieDB == null ||
//       isNaN(personalMovieDB)
//     ) {
//       personalMovieDB = +prompt("Сколько фильмов вы уже посмотрели???", "")
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//         b = prompt("На сколько оцените его?", "")

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b
//         console.log("done")
//       } else {
//         console.log("error")
//         i--
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов")
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классичесский зритель")
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман")
//     } else {
//       console.log("Произошла ошибка")
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB)
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false
//     } else {
//       personalMovieDB.privat = true
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i < 2; i++) {
// let genre = prompt(`Ваш любимый жанр под номером ${i}`)
// if (genre === "" || genre === null) {
//   console.log("Вы ввели не корректные данные или не ввели их вообще")
//   i--
// } else {
//   personalMovieDB.genres[i - 1] = genre
// }

//       let genres = prompt(
//         `Введите ваши любимые жанры через запятую`
//       ).toLocaleLowerCase()
//       if (genres === "" || genres === null) {
//         console.log("Вы ввели не корректные данные или не ввели их вообще")
//         i--
//       } else {
//         personalMovieDB.genres = genres.split(", ")
//         personalMovieDB.genres.sort()
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`)
//     })
//   },
// }

//39 - Динамическая типизация

//1.
// console.log(typeof String(null))
// console.log(typeof String(4))

//2.
// console.log(typeof (null + ""))

// const num = 5

// console.log("https://vk.com/catalog/" + num)

// const fontSize = 26 + "px"

//1.
// console.log(typeof Number(4))
// //2.
// console.log(typeof +"4")
// //3.
// console.log(typeof parseInt("15px", 10))

// let answ = +prompt("Hello", "")

//To boolean

//0, '', null, undefined, NaN

// let switcher = null

// if (switcher) {
//   console.log("Working...")
// }

// switcher = 1

// if (switcher) {
//   console.log("Working...")
// }

// //2.
// console.log(typeof boolean("4"))

// //3.
// console.log(typeof !!"4")

//40 - замыкание и лексическое окружение

// let number = 5
// debugger

// function logNumber() {
//   debugger
//   console.log(number)
// }

// number = 6

// logNumber()
// debugger

// number = 8

// logNumber()
// debugger

// function createCounter() {
//   let counter = 0 // Внутри машины есть число, которое начинается с 0
//   const myFunction = function () {
//     debugger
//     counter = counter + 1 // Когда вызываем эту функцию, число увеличивается на 1
//     debugger
//     return counter // Функция отдаёт нам новое значение
//     debugger
//   }
//   return myFunction // Возвращаем эту функцию наружу
// }
// debugger
// const increment = createCounter()
// debugger
// const c1 = increment() // 1
// debugger
// const c2 = increment() // 2
// debugger
// const c3 = increment() // 3
// debugger

// console.log(c1, c2, c3) // Выведет: 1 2 3

// 41 - Задачи по основам JS

// let x = 5
// alert(x++)

//[] + false - null + true
//[] + false - string!
//console.log(typeof ([] + false - null + true)) - NaN
// let y = 1
// let x = (y = 2)
// alert(x)

//console.log([] + 1 + 2) // = "12"

//alert("1"[0]) = 1

//console.log(2 && 1 && null && 0 && undefined)
// && - запинается на лжи
// || - запинается на правде

//console.log(!!(1 && 2) === (1 && 2))
//3
//alert(null || (2 && 3) || 4)

// const a = [1, 2, 3]
// const b = [1, 2, 3]
// console.log(a == b)

//alert(typeof +"Infinity")

//console.log("Ёжик" > "яблоко") - смотреть в таблице уникод!

//console.log(0 || 2 || undefined || true || false)

//42 - получение элементов со страницы

// const box = document.getElementById("box")
// console.log(box)

// const btns = document.getElementsByTagName("button")
// console.log(btns[0])

// const circles = document.getElementsByClassName("circle")
// console.log(circles)

// const hearts = document.querySelectorAll(".heart")
// hearts.forEach((item) => {
//   console.log(item)
// })

// const oneHeart = document.querySelector("div")
// console.log(oneHeart)

//43 - Действия с элементами на странице

const box = document.getElementById("box")
btns = document.getElementsByTagName("button")
circles = document.getElementsByClassName("circle")
wrapper = document.querySelector(".s")
hearts = wrapper.querySelectorAll(".heart")
onehearts = wrapper.querySelector(".heart")

// box.style.backgroundColor = "blue"
// box.style.width = "500px"
// box.style.height = "200px"

box.style.cssText = "background-color: green; width: 500px; height: 100px"

btns[1].style.borderRadius = "10px"
circles[0].style.backgroundColor = "red"

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue"
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue"
})

const div = document.createElement("div")
//const text = document.createTextNode("Hallo World")
//document.querySelector(".s").append(div)

div.classList.add("black")

wrapper.append(div)
//wrapper.appendChild(div)
//wrapper.prepend(div)
//wrapper.insertBefor(div, hearts[2])

//hearts[0].before(div)
//hearts[1].after(div)
hearts[0].replaceWith(circles[0])
//wrapper.replaceChild(circles[0], hearts[0])

//circles[0].remove()
// wrapper.removeChild(hearts[1])

div.innerHTML = "<h1>Hello World!</h1>"

div.insertAdjacentHTML("aftereend", "<h2>Hi Duck!</h2>")
