// 1
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// 2
// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const totalWords = words.length;
//     return console.log(totalWords * pricePerWord);
//   };
//   calculateEngravingPrice('hi word me yio hghgh ff hh', '20')
// 3
// function findLongestWord(string) {
//   const words = string.split(" ");
//   const longestWord = words.reduce((longest, currentWord) => {
//     return currentWord.length > longest.length ? currentWord : longest;
//   }, "");
//   return longestWord;
// }
// const sentence = "Напиши функцію яка повертає найдовше слово";
// console.log(findLongestWord(sentence));
// 4
// function formatString(string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + '...';
//   }
//   return string;
// }
// console.log(formatString("Цей рядок має більше сорока символів і повинен бути укорочений."));
// console.log(formatString("Цей рядок коротший."));
// 5
// function checkForSpam(message) {
//   const lowerCaseMessage = message.toLowerCase();
//   if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
//     return true;
//   }
//   return false;
// }
// console.log(checkForSpam("Get your FREE sale now!"));  
// console.log(checkForSpam("This is not spam at all."));  
// console.log(checkForSpam("Just a regular message."));
// 6
// let numbers = [];
// let total = 0;

// while (true) {
//   let input = prompt('Введіть число (натисніть Cancel для завершення):');
//   if (input === null) {
//     break;
//   }
//   let number = Number(input);
//   if (isNaN(number)) {
//     alert('Було введено не число, спробуйте ще раз.');
//     continue; 
//   }
//   numbers.push(number);
// }
// if (numbers.length > 0) {
//   for (let num of numbers) {
//     total += num;
//   }
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// } else {
//   console.log('Не було введено жодного числа.');
// }
// 7
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }
  allLogins.push(login);
  return 'Логін успішно доданий!';
}
const logins = ['user1', 'admin', 'guest'];
const newLogin = 'newuser';
const result = addLogin(logins, newLogin);
console.log(result); 
console.log(logins);
