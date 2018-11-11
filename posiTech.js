var i = 0;
function clickyBoi(){
  console.log(i);
  i++
}


function randomEntry(array){
  var randomNumber = Math.round(Math.random()*array.length);
  return array[randomNumber];
}
