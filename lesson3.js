//==============================================================
// HOME WORK
//==============================================================


//==============================================================
//Цикли: while і for https://uk.javascript.info/while-for
//==============================================================

//==============================================================
// ЗАВДАННЯ 1 - Виведіть парні числа https://uk.javascript.info/task/for-even
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
//==============================================================

// for(let i = 2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 	  console.log(i);
// 	}
//  }


//ВИДАЛИТИ
// let b = 2
// while(b <= 10){
// 	if(b % 2 == 0)
//  console.log(b)

// b++
// }


//==============================================================
// Завдання 2
//Замініть цикл "for" на "while" https://uk.javascript.info/task/replace-for-while
//==============================================================

// let i = 0
// while(i<3){
// 	console.log(`число ${i}!`);
// 	i++
// }


//==============================================================
// Завдання 3
// Повторяти цикл, доки ввід невірний https://uk.javascript.info/task/replace-for-while
//==============================================================

//  let input;

//  do {
// 	input = prompt('Please enter the number', 0);
//  } while(input < 100  && input);

//==============================================================
//Завдання 4
//Вивести прості числа https://uk.javascript.info/task/list-primes
//==============================================================

// let n = 10

// for (let i = 2; i <= n; i++) {
// 	let isPrime = true;
// 	for (let j = 2; j <= Math.sqrt(i); j++) {
// 	  if (i % j === 0) {
// 		 isPrime = false;
// 		 break;
// 	  }
// 	}
// 	if (isPrime) {
// 	  console.log(i);
// 	}
//  }

//==============================================================
// Конструкція "switch" https://uk.javascript.info/switch
//==============================================================

//=================================================================================================
// Завдання 1 Перепишіть конструкцію "switch" в аналогічну з використанням "if" Перепишіть конструкцію "switch" в аналогічну з використанням "if"
//=================================================================================================


// let browser = 'blalblba'

// if (browser == 'Edge'){
// 	console.log('we support the Edge!')
// } else if (browser == 'Chrome'){
// 	console.log('we support Chrome')
// } else if (browser == 'Firefox'){
// 	console.log('we support Firefox')
// } else if (browser == 'Safari') {
// 	console.log('we support Safari')
// } else if (browser == 'Opera') {
// 	console.log('we support Opera')
// } else {
// 	console.log('we hope that this page is good')
// }


//=================================================================================================
// Завдання 2 Перепишіть код нижче використовуючи одну конструкцію switch: https://uk.javascript.info/task/rewrite-if-switch
//=================================================================================================

// let a = +prompt('a?', '');

// switch (a) {
// 	case 0:
// 		alert(0);
// 		break;

// 	case 1:
// 		alert(1);
// 		break

// 	case 2:
// 	case 3:
// 		alert(2, 3)
// 		break;

// }
