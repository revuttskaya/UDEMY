function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ": " + this.answers[i]);
    }
};

Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correctAnswer) {
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer!');
    }
};

var q1 = new Question('Question 1', ['Correct', 'No'], 0);
var q2 = new Question('Question 2', ['No', 'Correct', 'No'], 1);
var q3 = new Question('Question 3', ['No', 'No', 'Correct', 'No'], 2);

var questions = [q1, q2, q3];

var num = Math.floor(Math.random() * questions.length);

questions[num].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[num].checkAnswer(answer);