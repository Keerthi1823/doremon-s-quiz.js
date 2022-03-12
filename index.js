var readlineSync = require("readline-sync");

var name = readlineSync.question('Please enter your name : ');
console.log("Welcome "+name+" !!");
console.log('--------------------------');
console.log('This is a Quiz about how well you know me !!\nLet\'s get started \n');

var score = 0;
var highScores = [
    {
        name: 'Keerthi',
        score: 6
    },
    {
        name: 'Nobody',
        score: 5
    }
]

var questionOne = {
    question: 'Who was the doremon best friend?\n a.nobitha\n b.jian\n c.shizuka\n d.suneo',
    answer: 'a'
}

var questionTwo = {
    question: 'From which centuary doremon come from?\n a.21st century\n b.22nd century\n c.23rd century\n d.24th century',
   
    answer: 'b'
}

var questionThree = {
    question: 'Which of the following hobbies did Nobita NOT have?\n a.studying\n b.playing with doremons gadgets\n c.reading comics\n d.none of them',
    answer: 'a'
}

var questionFour = {
    question: 'Name the gadget that helped Doraemon to travel everywhere?\n a.anywhere door\n b.animated door\n c.none of them',
    answer: 'a'
}

var questionFive = {
    question: 'In which color doremon is?\n a.pink\n b.black \n c.green\n d.none of them',
    answer: 'd'
}

var questionsix = {
    question: "What is the first movie of Doraemon?\n a.Nobita & The Steel Troops\n b.Nobita & The Haunts of Evil\n c.Nobita's Dinosaur\n d.none of them",
    answer: 'c'
}

var questions = [ questionOne, questionTwo, questionThree, questionFour, questionFive,questionsix];


function play( question, answer) {

    console.log(question);
    userGivenAnswer = readlineSync.question('');
    if( userGivenAnswer.toUpperCase() === answer.toUpperCase() ) {
        console.log('Right Answer');
        score = score + 1;
        console.log('Your score is: '+score);
        console.log('--------------------------');
    } else {
        console.log('Wrong Answer !!');
        console.log('Your score is: '+score);
        console.log('--------------------------');
    }
}


for ( i=0; i<questions.length; i++) {
    currentQuest = questions[i];
    play( currentQuest.question, currentQuest.answer);
}

console.log('Final score is '+ score+'\n');

if( score == highScores[0].score) {
    highScores.unshift({name,score});
} else {
    highScores.push({name,score});
}

console.log('Top Scores :')

for ( j=0; j<highScores.length; j++) {
    console.log(highScores[j].name+' '+highScores[j].score);
}

console.log('If your\'s high score, then send a screenshot to me !!');
console.log('otherwise try once again !!');