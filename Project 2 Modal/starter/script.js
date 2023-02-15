'use strict';
 let openModal =  document.querySelector('.modal');
 let overlay   =  document.querySelector('.overlay');
 let btnCloseModal = document.querySelector('.close-modal');
 let btnsOpenModal  = document.querySelectorAll('.show-modal');
 
 let OopenModal = function(){
    openModal.classList.remove('hidden');
    overlay.classList.remove('hidden');}
 let closeModal = function(){
    openModal.classList.add('hidden');
     overlay.classList.add('hidden');
     }
 for( let i=0;i<btnsOpenModal.length;i++){
 btnsOpenModal[i].addEventListener('click',OopenModal);
 }
 
btnCloseModal.addEventListener('click',closeModal,);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
   console.log(e.key);

   if(e.key === 'Escape' && !openModal.classList.contains('hidden')){
      closeModal();
   }
})
