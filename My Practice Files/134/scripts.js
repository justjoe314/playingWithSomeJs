console.log("basic cont")
var num = -10;

while(num <= 19){
    console.log(num)
    num++;
}

console.log("even numbs")
var even = 10;

while(even <= 40){
    if(even % 2 == 0){
        console.log(even);
    }
    even++;
}

console.log("odd nums");
var oddNum = 300;

while(oddNum <= 333){
    if(!(oddNum % 2 == 0)){
        console.log(oddNum);
    }
    oddNum++;
}

console.log("5 - 50")
var fiver = 5; 
while(fiver <= 50){
    if(fiver % 5 == 0 && fiver % 3 == 0){
        console.log(fiver)
    }
    fiver++;
}