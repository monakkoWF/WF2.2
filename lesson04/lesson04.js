let titleProject = prompt('Название проекта?')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимацией?')
console.log(screensValue);

let screenPrice = 10000
console.log(screenPrice);

let responsive = confirm('нужен ли респонсивный сайт?')
console.log(responsive);
//пробовал через !!prompt, почему-то выдает только false

let service1 = prompt('Какой сервис нужен?')
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

let fullPrice = (screenPrice + servicePrice1 + servicePrice2)
console.log(fullPrice);

let PartnerPrecentage = 10

let partnerPrecentageValue = +(fullPrice * (PartnerPrecentage/100))
console.log(partnerPrecentageValue, 'Процент партнеру:');

let servicePercentPrice = +(fullPrice-partnerPrecentageValue)
console.log(Math.round(servicePercentPrice), 'Чистая прибыль:');

if (fullPrice > 50000) {
    console.log ('Скидка 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log ('Скидка 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log ('Cкидка не предусмотрена');
} if (fullPrice < 0) {
    console.log ('Что то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log ('Cкидка не предусмотрена');
} else if (fullPrice === undefined) {
    console.log ('Cкидка не предусмотрена');
}