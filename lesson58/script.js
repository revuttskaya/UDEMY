var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    },
    lastName: 'Smith'
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1983},
    job: {value: 'designer'},
});