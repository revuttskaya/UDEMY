// Passing Functions as Arguments

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

// Functions returning Functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello, ' + name + '! What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mike');

interviewQuestion('designer')('Jane');

interviewQuestion('driver')('Sam');