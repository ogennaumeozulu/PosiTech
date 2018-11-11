// var i = 0;
// function clickyBoi(){
//   console.log(i);
//   i++
// }


//STRESSED
var stressedQuotes = ['All the suffering, stress, and addiction comes from not realizing you already are what you are looking for. - Jon Kabat-Zinn',
  'Always remember that your present situation is not your final destination. The best is yet to come. - Zig Zigler'];
var stressedReflection = ['Is what is causing you to be stressed temporary?',
  'Can you completely avoid the stressor?'];
var stressedAction = ['Make a list of stressors and what you can do to get through them!',
  'Talk to someone about your feelings!'];
var stressedExercise = ['Do some yoga! It won\'t hurt to try!',
  'Meditate! Take some time to relax and be free from any worries!'];
var stressedPositive = ['Yesterday is not ours to recover, but tomorrow is ours to win or lose. - Lyndon B. Johnson',
  'Under any circumstance, simply do your best, and you will avoid self-judgment, self-abuse and regret. - Don Miguel Ruiz'];

function getStressedQuotes(){
  document.getElementById("stressedQuotes").innerHTML = randomEntry(stressedQuotes);
}
function getStressedReflection(){
  document.getElementById("stressedReflection").innerHTML = randomEntry(stressedReflection);
}
function getStressedAction(){
  document.getElementById("stressedAction").innerHTML = randomEntry(stressedAction);
}
function getStressedExercise(){
  document.getElementById("stressedExercise").innerHTML = randomEntry(stressedExercise);
}
function getStressedPositive(){
  document.getElementById("stressedPositive").innerHTML = randomEntry(stressedPositive);
}

getStressedQuotes();
getStressedReflection();
getStressedAction();
getStressedExercise();
getStressedPositive();





//LOST/DOUBTFUL

// var lostQuotes =['Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us. - Nicole Reed',
//   'Sometimes, you have to stop thinking so much and just go where your heart takes you. - Ben Francia'];
// var lostReflection = ['What do you feel is missing?',
//   'Where or when do you feel most comfortable or certain about yourself?'];
// var lostAction = ['Share your thoughts with someone you trust!',
//   'Set short-term goals that are easy to accomplish.'];
// var lostExercise = ['Meditate! Take some time to relax and be free from any worries.',
//   'Try something new! It\’s okay to be outside of your comfort zone.'];
// var lostPositive = ['Everything is going to be okay in the end. If it\’s not okay, then it means it\’s not the end. - John Lennon',
//   'Say yes. You\’ll figure it out afterward. - Tina Fey'];
//
// function getLostQuotes(){
//   document.getElementById("lostQuotes").innerHTML = randomEntry(lostQuotes);
// }
// function getLostReflection(){
//   document.getElementById("lostReflection").innerHTML = randomEntry(lostReflection);
// }
// function getLostAction(){
//   document.getElementById("lostAction").innerHTML = randomEntry(lostAction);
// }
// function getLostExercise(){
//   document.getElementById("lostExercise").innerHTML = randomEntry(lostExercise);
// }
// function getLostPositive(){
//   document.getElementById("lostPositive").innerHTML = randomEntry(lostPositive);
// }
//
// getLostQuotes();
// getLostReflection();
// getLostAction();
// getLostExercise();
// getLostPositive();


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

function randomEntry(array){

  var randomNumber = Math.round(Math.random()*(array.length - 1));
  return array[randomNumber];

}
