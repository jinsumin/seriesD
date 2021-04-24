function sum(num1, num2) {
    // console.log('num1 : ', num1, 'num2 : ', num2);
    return num1 + num2;
}

exports.sum = sum;

function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

exports.calculateSum = calculateSum;

function countBerry(basket) {
    let count = 0;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i] === '딸기') {
            count += 1;
        }
    }
    return count;
}

exports.countBerry = countBerry;

function selectCleanCity() {
    const data = require('./data');
    let result = [];
    for (let i = 0; i < data.cityAir.length; i++) {
        if (data.cityAir[i]['PM10'] < 25) {
            result.push(data.cityAir[i]['MSRSTE_NM']);
        }
    }
    return result;
}

exports.selectCleanCity = selectCleanCity;

function printAir() {
    let result = selectCleanCity();
    console.log(result);
}

exports.printAir = printAir;