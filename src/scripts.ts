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
const buttonEl4 = document.querySelectorAll(".js-button")

buttonEl4.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
        const color = button.innerText
        boxEl.forEach((box: HTMLDivElement) => {
            box.style.backgroundColor = color
        }) 
    })
})

console.log(boxEl, buttonEl4)




