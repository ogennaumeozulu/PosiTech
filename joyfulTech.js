function randomEntry(array){

  var randomNumber = Math.round(Math.random()*(array.length - 1));
  return array[randomNumber];

}

//JOYFUL
var joyfulQuotes = ['When you are enthusiastic about what you do, you feel this positive energy. It\'s very simple. - Paulo Coelho',
  'Positive thinking will let you use the ability which you have, and that is awesome. - Zig Ziglar'];
var joyfulReflection = ['What makes you happy? Try to do it more often!',
  'What do you need to do in order to stay happy?'];
var joyfulAction = ['Remember that yesterday was a good day!',
  'Keep smiling!'];
var joyfulExercise = ['Go on a run!', 'Meditate!'];
var joyfulPositive = ['If you\'re not making mistakes, then you\'re not doing anything. I\'m positive that a doer makes mistakes. - John Wooden',
  'I have learned that champions aren\'t just born; champions can be made when they embrace and commit to life-changing positive habits. - Lewis Howes'];

function getJoyfulQuotes(){
  document.getElementById("joyfulQuotes").innerHTML = randomEntry(joyfulQuotes);
}
function getJoyfulReflection(){
  document.getElementById("joyfulReflection").innerHTML = randomEntry(joyfulReflection);
}
function getJoyfulAction(){
  document.getElementById("joyfulAction").innerHTML = randomEntry(joyfulAction);
}
function getJoyfulExercise(){
  document.getElementById("joyfulExercise").innerHTML = randomEntry(joyfulExercise);
}
function getJoyfulPositive(){
  document.getElementById("joyfulPositive").innerHTML = randomEntry(joyfulPositive);
}

getJoyfulQuotes();
getJoyfulReflection();
getJoyfulAction();
getJoyfulExercise();
getJoyfulPositive();
