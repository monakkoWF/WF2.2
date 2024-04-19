'use strict'

const gameBotFunction = function () {

    function randomGenerate(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let mysteryNumber = randomGenerate(5,5)

    let tries = 2
    let answerNum = ''

    const checkIsNumber = function(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    return function asking() {
        answerNum = prompt('Угадайте число от 0 до 100')
        if (answerNum === null) {
            return alert('Вы завершили игру')
        }

        while (!checkIsNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели строку:')
            answerNum = prompt('Угадайте число от 0 до 100')
        }
        answerNum = Number(answerNum)




        if (answerNum > mysteryNumber) {
            
            alert('Заданное число меньше, осталось попыток: ' + tries)
        } else if (answerNum < mysteryNumber) {
            alert('Заданное число больше, осталось попыток: '+ tries)
        } else if (answerNum === mysteryNumber) {
          const winner = confirm('Победа! Хотите сыграть еще раз?')

            if (winner === true) {
                tries = 3
                mysteryNumber = randomGenerate (1, 100)
            } else {
                tries = 0
            }
        }




        if (tries > 0) {
            tries--
            asking();
        } else {
            const rePlay = confirm('Попыток больше нет, игра окончена. Хотите начать заново?')
            if (rePlay === true) {
                tries = 2
                asking();
            } else {
                alert('Вы завершили игру')
                return
            }
        }
    }
}

let play = gameBotFunction() 
play()