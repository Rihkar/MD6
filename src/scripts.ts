//poga un saraksts
//klik uz pogas un samsing notiek
//ar klik  pieliekas un/vai nonemas klasesarakstam

//key value paris

//katrs elements ir DOM objekts

//1.uzd

const buttonEl = document.querySelector<HTMLButtonElement>('.js-todo-list-button');
const listEl = document.querySelector<HTMLUListElement>('.js-todo-list');


buttonEl.addEventListener('click', () => {
    if (listEl.classList.toggle('hidden')) {
      buttonEl.innerText = 'Show List';
    } else {
      buttonEl.innerText = 'Hide List';
    }
  });
  console.log(buttonEl,listEl)

//2.uzd

const buttonEl2 = document.querySelector<HTMLButtonElement>('.js-button-blue');

buttonEl2.addEventListener('click', () => {
    if (buttonEl2.classList.toggle('hidden2')) {
      buttonEl2.innerText = 'blue';
    } else {
      buttonEl2.innerText = 'regular';
    }
  });
console.log(buttonEl2);

//3.uzd

const buttonEl3 = document.querySelector<HTMLButtonElement>('.js-button-hovered');

buttonEl3.addEventListener('mouseenter', () =>  buttonEl3.innerText = 'hovered');

console.log(buttonEl3); 



const boxEl = document.querySelectorAll(".js-box");
const buttonEl4 = document.querySelectorAll<HTMLButtonElement>(".js-button")

buttonEl4.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
        const color = button.innerText
        boxEl.forEach((box: HTMLDivElement) => {
            box.style.backgroundColor = color
        }) 
    })
})

console.log(boxEl, buttonEl4)


//BIG MD SAKAS SEIT

//pirmas pogas efekts
const box1 = document.querySelector<HTMLDivElement>('.js-box-1');
const buttonToYellow = document.querySelector<HTMLButtonElement>('.js-buttonToYellow');

buttonToYellow.addEventListener('click', () => 
box1.classList.toggle('yellowBackground')   
);

//otras pogas efekts
const  buttonToSuccess = document.querySelector<HTMLDivElement>('.js-buttonToSuccess');
const box2 = document.querySelector<HTMLDivElement>('.js-box-2');

buttonToSuccess.addEventListener('click', () => {
  if(box2.innerText === 'FAIL'){
    box2.innerText = 'SUCCESS'
  } else{box2.innerText = 'FAIL'}  
  });

//tresas pogas efekts
const buttonToInvisible = document.querySelector<HTMLButtonElement>('.js-buttonToInvisible');
const box3 = document.querySelector<HTMLDivElement>('.js-box-3');

buttonToInvisible.addEventListener('click', () => 
box3.classList.add('invisibleBox')
);

//ceturtas pogas efekts
const buttonToggleInvisible = document.querySelector<HTMLButtonElement>('.js-buttonToggleInvisible');
const box4 = document.querySelector<HTMLDivElement>('.js-box-4');

buttonToggleInvisible.addEventListener('click', () => 
box4.classList.toggle('invisibleBox')
);

//piektas pogas efekts 
const buttonSwitchColors = document.querySelector<HTMLButtonElement>('.js-buttonSwitchColors')
const box5 = document.querySelector<HTMLDivElement>('.js-box-5')

const box5Colors = ['yellow', 'orange', 'red', 'purple', 'blue']
let counter = -1 

buttonSwitchColors.addEventListener('click', () => {

counter += 1;
box5.style.backgroundColor = box5Colors[counter];
if(box5Colors.length === counter+1){ counter=-1 };

//mans sakotnejais atradums
    // const x = Math.floor(Math.random() * 256);
    // const y = Math.floor(Math.random() * 256);
    // const z = Math.floor(Math.random() * 256);

    //  box5.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

});


//sestas pogas efekts
const buttonTimer = document.querySelector<HTMLButtonElement>('.js-buttonTimer');
const box6 = document.querySelector<HTMLDivElement>('.js-box-6');


// const numbers = ['0','1','2','3','4','5','6','7','8','9','10']
let sekond =  0

buttonTimer.addEventListener('click', () => {


  const stopWatch = setInterval( () => {
    sekond += 1 ;
    box6.innerText = sekond.toString()
    if(box6.innerText === '10'){ clearInterval(stopWatch), sekond = 0 }
  
 },300);  
});

//septitas pogas efekts
const buttonAllBoxesToBlack = document.querySelector<HTMLButtonElement>('.js-buttonAllBoxesToBlack')
const allBoxesToBlack = document.querySelectorAll<HTMLDivElement>('.js-all-boxes')
const bodyToBlack = document.querySelector<HTMLBodyElement>('.js-bodyToBlack') 
// variants bez toggle
// buttonAllBoxesToBlack.addEventListener('click',() =>
// allBoxesToBlack.forEach((boks: HTMLDivElement) => {
//   boks.style.backgroundColor = 'black';
// })
// )

buttonAllBoxesToBlack.addEventListener('click',() => 

  // bodyToBlack.classList.toggle('toBlack')
  allBoxesToBlack.forEach((boks: HTMLDivElement) => {
    boks.classList.toggle('all-to-blue'); 
  }))


//hover uz pirmas kastes
box1.addEventListener('mouseenter', () => 
box1.style.backgroundColor = 'red'
)
box1.addEventListener('mouseleave', () => 
box1.style.backgroundColor = '#1FC2AE'
)










