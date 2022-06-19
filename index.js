//1

"use strict";

const star = ["*", "*","*", "*", "*", "*"];

let str = "";
for (let i = 0; i < star.length; i++) {
  console.log(str);
  str += star[i];
}



//2

let num = 1;
while (num<= 10) {
   console.log(num);
   num++;
}

//3

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} 
while (i < 5);

console.log(result);