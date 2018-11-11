





function randomEntry(array){

  var randomNumber = Math.round(Math.random()*(array.length - 1));
  return array[randomNumber];

}

//LOST/DOUBTFUL

var lostQuotes =['Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us. - Nicole Reed',
  'Sometimes, you have to stop thinking so much and just go where your heart takes you. - Ben Francia'];
var lostReflection = ['What do you feel is missing?',
  'Where or when do you feel most comfortable or certain about yourself?'];
var lostAction = ['Share your thoughts with someone you trust!',
  'Set short-term goals that are easy to accomplish.'];
var lostExercise = ['Meditate! Take some time to relax and be free from any worries.',
  'Try something new! It\'s okay to be outside of your comfort zone.'];
var lostPositive = ['Everything is going to be okay in the end. If it\'s not okay, then it means it\'s not the end. - John Lennon',
  'Say yes. You\'ll figure it out afterward. - Tina Fey'];

function getLostQuotes(){
  document.getElementById("lostQuotes").innerHTML = randomEntry(lostQuotes);
}
function getLostReflection(){
  document.getElementById("lostReflection").innerHTML = randomEntry(lostReflection);
}
function getLostAction(){
  document.getElementById("lostAction").innerHTML = randomEntry(lostAction);
}
function getLostExercise(){
  document.getElementById("lostExercise").innerHTML = randomEntry(lostExercise);
}
function getLostPositive(){
  document.getElementById("lostPositive").innerHTML = randomEntry(lostPositive);
}

getLostQuotes();
getLostReflection();
getLostAction();
getLostExercise();
getLostPositive();
