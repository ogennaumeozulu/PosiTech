function randomEntry(array){

  var randomNumber = Math.round(Math.random()*(array.length - 1));
  return array[randomNumber];

}

//CONFUSED/Indecisive
var confusedQuotes = ['When you have to make a choice and don\'t make it, that is in itself a choice - William James',
  'Make bold choices and make mistakes. It\'s all those things that add up to the person you become. - Angelina Jolie'];
var confusedReflection = ['What is the source of your problem?',
  'What do you need to think about in order to make a decision?'];
var confusedAction = ['Make a pros and cons list!',
  'Talk to someone you trust!'];
var confusedExercise = ['Take a nap! You might wake up with a clearer head!',
  'Go on a run! You might be able to use the time to think!'];
var confusedPositive = ['Your positive action combined with positive thinking results in success. - Shiv Khera',
  'Under any circumstance, simply do your best, and you will avoid self-judgment, self-abuse and regret. - Don Miguel Ruiz'];

function getConfusedQuotes(){
  document.getElementById("confusedQuotes").innerHTML = randomEntry(confusedQuotes);
}
function getConfusedReflection(){
  document.getElementById("confusedReflection").innerHTML = randomEntry(confusedReflection);
}
function getConfusedAction(){
  document.getElementById("confusedAction").innerHTML = randomEntry(confusedAction);
}
function getConfusedExercise(){
  document.getElementById("confusedExercise").innerHTML = randomEntry(confusedExercise);
}
function getConfusedPositive(){
  document.getElementById("confusedPositive").innerHTML = randomEntry(confusedPositive);
}

getConfusedQuotes();
getConfusedReflection();
getConfusedAction();
getConfusedExercise();
getConfusedPositive();
//
