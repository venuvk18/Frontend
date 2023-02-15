/* 1.Write a JavaScript program to display the current day and time in the following format.
 Today is : Tuesday.
 Current time is : 10 PM : 30 : 38 */

let today = new Date()
let dayList = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let day= today.getDay()
let time= today.getTime()
console.log(`today is ${dayList[day]} and time is ${time}`);


//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))); s=(s1+s2+s3)/2
 let sides=[5,6,7]
 function calcAverage(){
 let s=0;
 for(i=0;i<=sides.length-1;i++){
 s=s+sides[i];
}
let a=s/2
 return Math.sqrt(a*((a-sides[0])*(a-sides[1])*(a-sides[2])));
 }
let c = calcAverage(sides)
console.log(c);

/*Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing 
one letter from the end of the string and attaching it to the front.*/
let a1= 'w3resource'

function reverse(){
    console.log(a1.split('') .reverse() .join(''));    
}
reverse(a1)

function reverse2 (){
    let m1=''
    for(i=a1.length-1;i>=0;i--){
    m1=m1+a1[i]

    }
console.log(m1);
}
reverse2(a1)

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapYear(year){
    return (year%100===0)?(year%400===0):(year%4===0);
}
console.log(leapYear(1990));
console.log(leapYear(1590));
console.log(leapYear(1600));
console.log(leapYear(2000));

//Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
for (var year=2014;year<=2050;year++){
    var d = new Date(year,0,1)
    if(d.getDay()===0){
        console.log('Yes its sunday in  '+ year );
    }
}
/*Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched".*/

let secNum=Math.trunc(Math.random)*10
let data = prompt('guess a number');
if(secNum==data)
    console.log('Good work');
else
    console.log('Not Matched');
    


