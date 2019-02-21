var age = prompt("How old are you?");

var negative = age <= -1;
var twentyOne = age == 21;
var odd = age / 2 == false;
var perfectSquare = age % 1 == 0; 

if(negative){
    alert("error message");
}
else if(twentyOne){
 alert("Happy Birthday")
}
else if(odd){
    alert("your age is odd")
}
else if(perfectSquare){
    alert("your age is a perfect square");
}   