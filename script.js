'use strict';

// const memory_array = [
//     'A','A',
//     'B','B',
//     'C','C',
//     'D','D',
//     'E','E',
//     'F','F',
//     'G','G',
//     'H','H'
// ];

//ADD CLICK EVENT AND SEND TO THE COMPARISON ARRAY
let cards = document.querySelectorAll('.card');

cards.forEach((cardEach) => {
    cardEach.addEventListener('click', (e) => {

        let currentCard = e.target.dataset.card;
        let compare = compArray.push(currentCard);

        return compareFunction(currentCard);
    })
});



// --- COMPARE SELECTED CARDS, AND CLEAR AFTER COMPARISON ---
let compArray = [];
let pairCounter = 0;

let compareFunction = (dataset) => {
    if (compArray.length == 2) {
        if (compArray[0] == compArray[1]) {
            console.log('Win');
            pairCounter++; //add if match
            console.log(pairCounter);

            if (pairCounter == 8) {
                console.log('congratz');
            }
        }

        else {
            console.log('loser');
            //flip over if not a match
        }

        compArray = [];
    }
}


// --- SHUFFLE CARDS ---
let memoryBoard = document.querySelector('#memory_board');

for (let i = memoryBoard.children.length; i >= 0; i--) {
    memoryBoard.appendChild(memoryBoard.children[Math.random() * i | 0]);
}


//--- GENERERATE NEW MEMORY BOARD ---
