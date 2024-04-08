'use strict'

let screenPrice = 10000
let precentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let fullPrice;
let servicePercentPrices;

const asking = function() {
titleProject = prompt('Название проекта?')
screensValue = prompt('шаблонные, с уникальным дизайном, с анимацией?')
responsive = prompt('нужен ли респонсивный сайт?')
}


let service = prompt('Какой сервис нужен?')
let servicePrice = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')


const getAllServicePrices = function() {
    return servicePrice + servicePrice2
}
function getFullPrice() {
    return screenPrice + allServicePrices
}
const getServicePercentPrices = function() {
return fullPrice - (fullPrice * (precentage / 100))
}
const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}




asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrices = getAllServicePrices();
newTitle = getTitle();


if (fullPrice > 50000) {
    console.log ('Скидка 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log ('Скидка 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log ('Cкидка не предусмотрена');
} if (fullPrice < 0) {
    console.log ('Что то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log ('Проверка на строгое равентсво');
}



console.log('Название проекта — ' + titleProject);
console.log('screenValue – ' + screensValue);
console.log('Нужен ли респонсивный сайт? — ' + responsive);
console.log('Название первого сервиса — ' + service);
console.log('Стоимость первого сервиса — ' + servicePrice);
console.log('Название второго сервиса — ' + service2);
console.log('Стоимость второго сервиса — ' + servicePrice2);
console.log('Полная стоимость — ' + fullPrice);
console.log('Процент – ' + servicePercentPrices);
console.log(Math.ceil('Процент –' + servicePercentPrices));