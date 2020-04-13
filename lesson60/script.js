var years = [1996, 1963, 1937, 2005, 1990];

function calcArr(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = calcArr(years, calcAge);
var fullAges = calcArr(ages, isFullAge);
var heartRates = calcArr(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);