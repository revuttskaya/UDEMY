var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*this.calculateAge = function () {
        console.log(2020 - this.yearOfBirth);
    }*/
};

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
};

var john = new Person('John', 1996, 'designer');
var jane = new Person('Jane', 1986, 'teacher');

console.log(john);
john.calculateAge();
console.log(jane);