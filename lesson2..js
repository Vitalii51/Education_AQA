// Завдання 1 Умовні розгалуження: if, '?'


// 1 Завдання - Назва JavaScript
// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’
// Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”


// let value = prompt('Яка "офіційна" назва JavaScript?', '');

// if (value == 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Ви не знаєте? ECMAScript!');
// }


// 2 Покажіть знак
//Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення alert:

// let questioNumber = prompt ('What is the number?', 0) 

// if (questioNumber > 0 ) {
// 	alert(1);
// } else if (questioNumber < 0){
// 	alert(-1);
// } else {
// 	alert(0)
// }


// Завдання 3 
// Перепишіть конструкцію if, використовуючи умовний оператор '?' https://uk.javascript.info/task/rewrite-if-else-question


// let a = 1
// let b = 2

// let result = (a + b < 4) ?  'lower' :  'higher'
// console.log(result)

// Завдання 4 
// Перепишіть 'if..else' на ? https://uk.javascript.info/task/rewrite-if-else-question

// let login = 'worker'

// let message = (login =='worker') ? 'Hi':
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'Login is empty' : '';
// console.log(message)






//              Завдання 2 Логічні оператори 


// Перевірте діапазон  https://uk.javascript.info/task/check-if-in-range
// Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.


// let age1 = 15

// if (age >=14 || age <= 90) {
// 	console.log('you could log in') }
// 	else {
// 		console.log('you are not able to login')
// 	}

//	Перевірте значення поза діапазоном https://uk.javascript.info/task/check-if-out-range
//Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
// Створіть два варіанти: перший з оператором НЕ !, другий — без нього.

// Варіанг без оператора НЕ
// let age_two = 90

// if (age_two <14 || age_two >90) {
// 	console.log ('you are not in range')
// } else {
// 	console.log('you are in range')
// }

// Варіант з оператором НЕ

// let age_three = 10

// if (!(age_three >= 14 && age_three <= 90 )) { // Ром, чому не працює варіант  (!age_three >= 14 && !age_three <= 90 )
// 	console.log('you are not in range')
// } else {
// 	console.log('you are in range')
// }



// Перевірте логін https://uk.javascript.info/task/check-login

let userNanme = prompt ('what is you name?')