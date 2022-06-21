// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
// let age_1
let age_2 = 18
let age_3 = 60
console.log("----------------1*-------------------")
const checkAge = function (age_1) {
    if(age_1 < age_2) {
      console.log("You don’t have access cause your age is " + age_1 + " It’s less then", age_2)
    } else if (age_1 >= age_2 && age_1 <  age_3) {
      console.log("Welcome!")
    } else (age_1  > age_3) ? 
      console.log("Keep calm and look Culture channel") :
      console.log("Technical work")
    }

var age17= checkAge(17)
var age18= checkAge(18)
var age61= checkAge(61)



// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log("----------------2*-------------------")

const checkAge_2 = function(age) {
    let age_1 = Number(age)
    if (typeof(age) != typeof(age_1)) {
      console.log("Error!");
    } if (age_1) {
      if(age_1 < age_2) {
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then", age_2)
        } else if (age_1 >= age_2 && age_1 <  age_3) {
        console.log("Welcome!")
        } else (age_1  > age_3) ? 
        console.log("Keep calm and look Culture channel") :
        console.log("Technical work")
        }
    }
    
    var ageNotNumber= checkAge_2("Hello")
    var ageNum = checkAge_2(18)



// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log("----------------3*-------------------")

const checkAge_3 = function (age) {
    let age_1 = Number(age)
    if (age_1) {
        if(age_1 < age_2) {
          console.log("You don’t have access cause your age is " + age_1 + " It’s less then", age_2)
        } else if (age_1 >= age_2 && age_1 <  age_3) {
          console.log("Welcome!")
        } else if (age_1  > age_3) {
          console.log("Keep calm and look Culture channel")
        } else {console.log("Technical work")
        }
    }
    else {
    console.log("Error!")}
}
var ageString= checkAge_3("Hello")
var ageStringNumber= checkAge_3("20")
var ageNumber = checkAge_3(20)




// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
console.log("----------------4*-------------------")
// let age_2 = 18
// let age_3 = 60
const checkAge_4 = function (age) {
    let age_1 = Number(age)
    if (age_1) {
        if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then",age_2)
        } else if (age_1 >= age_2 && age_1 <  age_3) { 
        console.log("Welcome!")
        } else if (age_1  > age_3) {
        console.log("Keep calm and look Culture channel")
        } else {console.log("Technical work")}
    }
    else {console.log("Error!")}
}
var user_age = prompt ("How old are you?", "Please, enter your age")
var ageString= checkAge_4(user_age)