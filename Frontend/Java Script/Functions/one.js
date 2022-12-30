// Function Declaration
function calcAge(birthyear){
    return(2022-birthyear)
}
let age=calcAge(1998)
console.log(age);
let age2 =calcAge(2000)
console.log(age2); 
// Function Expression 
let calcAge1=function (birthyear){
    return(2022-birthyear)
}
console.log(calcAge1(1998))


function add(a,b,c=1){
    console.log(a+b+c);

}
add(10,20,'Hello');


