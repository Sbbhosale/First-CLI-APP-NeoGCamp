var readlineSync = require("readline-sync");


var score = 0;
var userName = readlineSync.question("Whats your Name ?? ");



console.log("Welcome " + userName);
console.log("LET's BEGin THE GAME, 'How well do you know shubham '");


// play Function


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase()==answer){
    console.log("You are RIGHT !!");
    score = score + 1;
    console.log("Your Score is : " + score)
    console.log("---------------------------")
  }
  else{
    console.log("You are WRONG !! ");
    console.log("Your Score is : " + score)
    console.log("---------------------------")
  }
}

//Array of Objects (questions)

var questions =[
  {
  question : "Where does shubham live ??",
  answer : "mahim"
 },
 {
  question : "What is Shubham's Favourite color ?? ",
  answer : "blue"
 },
 {
  question : "Where does Shubham study ?? ",
  answer : "kirti college"
 }
]

//Loop

for(var i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YOUR TOTAL SCORE IS : " + score)