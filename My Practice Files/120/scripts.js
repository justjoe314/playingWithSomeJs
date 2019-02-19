var age = prompt("How old are you?");
var leapYears = age/4;
var daysOld = Math.ceil(365 * age) + leapYears;

console.log("your about " + daysOld + " days old");
