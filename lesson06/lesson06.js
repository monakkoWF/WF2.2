let screenPrice;
let precentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let fullPrice;
let servicePercentPrices;
let service;
let serviceSecond;


const checkIsNumber = function(number) {
	return !isNaN(parseFloat(number)) && isFinite(number);
};


const asking = function() {
    titleProject = prompt('Название проекта?')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимацией?')

    screenPrice = prompt('Сколько это будет стоить?')

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
    screenPrice = prompt('Сколько это будет стоить?')
    }

    screenPrice = Number(screenPrice)
    responsive = prompt('нужен ли респонсивный сайт?')

}
asking();



const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'услуга 1')
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип услуги нужен?', 'услуга 2')
            }

        let textFromPromt = '';

        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }
        
        sum = sum + Number(textFromPromt)
    }
    return sum
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

const getPercentageMessage = function(price) {

if (price > 50000) {
    return 'Скидка 10% '
} else if (price > 20000 && price < 50000) {
    return 'Скидка 5%'
} else if (price < 20000 && price > 0) {
    return 'Cкидка не предусмотрена'
} if (price < 0) {
    return 'Что то пошло не так'
} else if (price === 0 || price === 20000 || price === 50000) {
    return 'Проверка на строгое равентсво'
}

}



allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();
newTitle = getTitle();


console.log('Название проекта — ' + newTitle);
console.log('screenValue – ' + screensValue);
console.log('Нужен ли респонсивный сайт? — ' + responsive);
console.log('Полная стоимость — ' + fullPrice);
console.log('Процент – ' + Math.ceil(servicePercentPrices));
console.log(getPercentageMessage(fullPrice));
