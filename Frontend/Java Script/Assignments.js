// Assignments
// Program to check number us divisible by 7 or not

let num = 79
if(num%7==0){
    console.log('Yes its divisible by 7')
}
else{
 console.log('No the number is not divisible by 7 ')
}

 //2 program to check whether the number is multiple of 3 or not

let num1 = 28
num1%3==0?console.log('Yes its multiple of 3'):console.log('Nahh try different number'); //ternary operator

//3 to check whether number is positive or not
let number3 = -79
if(number3>=0){
    console.log('Yoo bro its positive')
}
else{
 console.log('Better luck next time kid ')
}

//5 Number is 3 digit num or not 
let number4 = 79
if(number4>=100 && number4<=999){
    console.log('Yes its 3 digit mawa')
}
else{
 console.log('use your brain man ')
}
//6 Program to print even or odd for a given number

let number5 =125
if(number5%2==0){
    console.log('Yes its Even')
}
else{
 console.log('No the number is Odd')
}
//7 program to find the greatest number among two numbers
let a=1000
let b=200
if(a>b){
console.log(`${a} is the highest number`);   
}
else{
 console.log(20);
}

//9 program to print greatest number in given 3 numbers

let c=10    
let d=20
let e=30
if(c>d && c>e){
    console.log(`${c}is the largest number`);
   
}
else if(d>c && d>e){
    console.log(`${d}is the largest number`);
}
else if (e>c && e>d){
    console.log(`${e}is the largest number`);
}
else{
    console.log('There is no largest number');
}                                                   
//ternary
c>d && c>e ? console.log(`${c}is the largest number`):d>c && d>e ? console.log(`${d}is the largest number`):(e>c && e>d) 
? console.log(`${e}is the largest number`):console.log('There is no largest number') // ternary operator
