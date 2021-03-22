const menuBtn = document.getElementById('menu-btn');
const firstNavEl = document.querySelector('.header-nav a:first-child');
const slider = document.querySelector('.slider');
const btnSliderl = document.querySelector('.button-arrow-left');
const btnSliderR = document.querySelector('.button-arrow-right');

let pets = [{
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    age: '2 months',
  },
  {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    age: '3 months',
  },
  {
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    age: '5 months',
  },
  {
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    age: '1 months',
  },
  {
    name: 'Timmy',
    img: '../../assets/images/pets-timmy.png',
    type: 'Cat',
    age: '2 months',
  },
  {
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    age: '3 months',
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlett.png',
    type: 'Dog',
    age: '1 months',
  },
  {
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    age: '2 months',
  }];

function makeDisable() {
    menuBtn.checked = false;
}

firstNavEl.addEventListener('click', makeDisable)