// Retirement age

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        var yearsUntilRetirement = retirementAge - age;
        console.log(yearsUntilRetirement + a);
    }
}

var retirementUS = retirement(66);
var retirementDE = retirement(65);

retirementUS(1990);
retirementDE(1963);

// Interview questions

function interviewQuestions(job) {
    var question;

    return function (name) {
        if (job === 'driver') {
            question = ', what car do you drive?';
        } else if (job === 'teacher') {
            question = ', what do you teach?';
        } else {
            question = ', what do you do?';
        }
        console.log(name + question)
    }
}

interviewQuestions('teacher')('Mike');
interviewQuestions('driver')('John');
interviewQuestions('student')('Anna');