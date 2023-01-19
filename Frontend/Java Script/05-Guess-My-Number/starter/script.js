'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1
 
let score = 20
let highScore = 0
document.querySelector('.check').addEventListener('click',function(){
    let guess= Number(document.querySelector('.guess').value);
    console.log(typeof(guess),guess);
   

if(!guess){
    document.querySelector('.message').textContent = 'Yoo Fool Give A Number'
}
    if(guess === secretNumber ) {
        document.querySelector('.message').textContent = 'Congrats you won'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess>secretNumber){
        if(score>1){
    document.querySelector('.message').textContent = 'Too high'
    score--
    document.querySelector('.score').textContent = score
} else{
        document.querySelector('.message').textContent = 'You Lost the game' 
        document.querySelector('.score').textContent =0
    }
}
    else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too low'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You Lost the game' 
            document.querySelector('.score').textContent =0
        }
        }
    }) 
        document.querySelector('.again').addEventListener('click',function(){
            let score = 20   
            secretNumber = Math.trunc(Math.random()*20)+1
            document.querySelector('.message').textContent = 'Start Guessing'
        document.querySelector('.score').textContent = score 
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        
  })
    
