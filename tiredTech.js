function randomEntry(array){

  var randomNumber = Math.round(Math.random()*(array.length - 1));
  return array[randomNumber];

}

//TIRED
var tiredQuotes = ['Perseverance is the hard work you do after you get tired of doing the hard work you already did. - Newt Gingrich',
  'Just remember, you can do anything you set your mind to, but it takes action, perseverance, and facing your fears. - Gillian Anderson'];
var tiredReflection = ['Your hard work is always valued.',
  'You might function better if you\'re well rested!'];
var tiredAction = ['Try going to bed earlier!',
  'Get enough sleep! Make sure you are well rested!'];
var tiredExercise = ['Take a nap! You’ll feel better when you wake up!',
'Try eating something and drinking some water. Maybe you\'ll feel better!'];
var tiredPositive = ['Keep your face to the sunshine and you cannot see a shadow. - Helen Keller',
'Everything is going to be okay in the end. If it\'s not okay, then it means it\'s not the end. - John Lennon'];

function getTiredQuotes(){
  document.getElementById("tiredQuotes").innerHTML = randomEntry(tiredQuotes);
}
function getTiredReflection(){
  document.getElementById("tiredReflection").innerHTML = randomEntry(tiredReflection);
}
function getTiredAction(){
  document.getElementById("tiredAction").innerHTML = randomEntry(tiredAction);
}
function getTiredExercise(){
  document.getElementById("tiredExercise").innerHTML = randomEntry(tiredExercise);
}
function getTiredPositive(){
  document.getElementById("tiredPositive").innerHTML = randomEntry(tiredPositive);
}

getTiredQuotes();
getTiredReflection();
getTiredAction();
getTiredExercise();
getTiredPositive();
