'use strict'

// ? Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let start = true    ;

while (start) {
    let userNumbers = prompt('Введи 10 чисел через кому', '');

    if (userNumbers === null) {
        start = false;
    } else {
        let arrUserNumbers = userNumbers.split(',');

        if (arrUserNumbers.length !== 10) {
            alert('Введена кількість даних ' + arrUserNumbers.length + '\nВведи 10 чисел');
        } else {
            let a = 0;
            let zero = 0;
            let numPositive = 0;
            let numMinus = 0;
            for (const number of arrUserNumbers) {
                if (number.trim() === 0 || +number !== +number) {
                    a++;
                } else if (number > 0) {
                    numPositive++;
                } else if (number < 0) {
                    numMinus++;
                } else {
                    zero++;
                }
            }

            if (a !== 0) {
                alert('Введи всі дані в форматі число...');
            } else {
                alert(`Введено:\nдодатнє число ${numPositive}\nвідємне число ${numMinus}\nноль ${zero}\n${arrUserNumbers}`);

                start = false;
            }
        }
    }
}