'use strict';
 let openModal =  document.querySelector('.modal');
 let overlay   =  document.querySelector('.overlay');
 let btnCloseModal = document.querySelector('.close-modal');
 let btnOpenModal  = document.querySelectorAll('.show-modal');
 console.log(btnOpenModal);

 for( let i=0;i<btnOpenModal.length;i++)
 console.log(btnOpenModal[i].textContent);
