var i = 0;
function clickyBoi(){
  console.log(i);
  i++
}

//Stressed array



var arr = [1, 2, 3, 4, 5];
var options = [0, 1]
arr.forEach(randomEntry(options)){
  console.log
};




function randomEntry(array){

  var randomNumber = Math.round(Math.random()*array.length);
  return array[randomNumber];
}
