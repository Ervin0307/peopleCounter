console.log(4);

const increment = document.getElementsByClassName('increment')[0];
const decrement = document.getElementsByClassName('decrement')[0];

const counter = document.getElementsByClassName('counter')[0];
increment.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1;
})
decrement.addEventListener('click', () => {
    if (counter.innerText === '0') return;
    counter.textContent = parseInt(counter.innerText)
    -1;
})

const saveEl = document.getElementById('save-el');

function addEle() {
    saveEl.textContent += counter.innerText + " - ";
    counter.innerText = 0;
}