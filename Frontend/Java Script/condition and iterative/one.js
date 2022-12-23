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

  
//11 program to print given three numbers in ascending numbers.

let arr=[20,44,10,5,45,-7,-11]
arr.sort((a,b)=> a-b);
console.log(arr);
//12 program to print given 3 numbers in descending order.
let arr1=[20,44,10,5,45,-7,-11]
arr1.sort((a,b)=> b-a);
console.log(arr1);
//13 Program to find the largest of 3 numbers.
let alpha1 = 10
let alpha2 = 10
let alpha3 = 10
let largest= Math.max(alpha1,alpha2,alpha3)
console.log(largest);
//While loop and for loop

//1 program to print 1 to 10 numbers using while loop

let i=1;
while(i<=10){
    console.log(i);
    i++
}

//2 program to print 10 to 1 using while loop  //10 9 8 7 6 5 4 3 2 1
let j=10;
while(j>0){
    console.log(j);
    j=j-1
}
//3 print 5 to 15 numbers using for loop 
for(k=5;k<=15;k++){
    console.log(k);
}
//4 print 15 to 5 numbers using for loop 
for(aza=15;aza>=5;aza--){
    console.log(aza);
}
//5 print 1 to 10 even numbers using while loop  2 4 6 8 10
for(m=2;m<=10;m=m+2){
console.log(m);
}
//6 print 1 to 10 odd numbers  using for loop 1 3 5 7 9
for(n=1;n<=9;n=n+2){
    console.log(n);
}
//7 print first 10 multiples of 4 using while loop 
let o=4;
while(o<=16){
    console.log(o);
    o=o+4
}
 // 

 for(p=4;p<19;p=p+4){
    console.log("4*",p,"=",4*p);
 }
 // program to print reverse of digits of number
let ab = 10
let cd = 30
let ef = 70

console.log(Math.max);


for(p=4;p<19;p=p+4){
    console.log("4*",p,"=",4*p)
}

// 50. Write a program to print 1 to 10 numbers using a do while loop
 let q=1;
 do{
    console.log(q);
    q++
 } while(q<=10)

 // Write a program to print 1 to 10 even numbers using a do while loop
 let w=2
 do{
    console.log(w);
    w=w+2
 }while(w<11)
 // Write a program to print a multiplication table of 6 using a while loop 6 ... 60
 //6*1=6...60,6*2=12,6*3=18
 
 let l=6
 let m1=1 
 while(l<=60){
    console.log('6*',m1,'=',l);
    l=l+6
    m1++

 }
 // Write a program Factors of 24 using while loop (Factors of 24 are 1,3, 4, 6, 12, 24)

 let arr3=[1,3,4,6,12,24]
 let v=0
 //        0 1 2 3 4 5 
 while(arr3<=24){
    console.log(arr3);
    
 }

 // Write a program Factors of 24 using while loop(Factors of 24 are 1, ,3, 4, 6, 12, 24)

  let ak=1
  while(ak<=24){
    if(24%ak===0){
        console.log(`${ak} is multiple of 24`);

    }
        ak=ak+1
  }
// reverse a number
let arr4= ['Venu','shivani','akhila'];
console.log(arr4.reverse());

//wap to read 5 numbers and print only even numbers
 //
//Fibonacci 0 1 1 2 3 5 8 13 ....
let a1=0 , b1=1
for(let i=0;i<=10;i++){
    
    let temp=a1+b1
    console.log(temp);
    a1=b1
    b1=temp
}