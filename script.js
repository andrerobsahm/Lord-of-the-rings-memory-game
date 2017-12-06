'use strict';

let cards = document.querySelectorAll('.card');
let compArray = []; //where we compare if its a match
let pairCounter = 0; //counts number of pairs
let divArray = [];


// --- CREATE A NEW BOARD ---
let memoryBoard = document.querySelector('#memory_board');

for (let i = memoryBoard.children.length; i >= 0; i--) {
    memoryBoard.appendChild(memoryBoard.children[Math.random() * i | 0]);
}


// --- ADD CLICK AND SEND TO THE COMPARISON ARRAY ---
cards.forEach((cardEach) => {
    cardEach.addEventListener('click', (e) => {

        //--- FLIP CARDS ---
        let currentDiv = e.target;
            currentDiv.classList.toggle('clicked');

        let currentImg = currentDiv.querySelector('img');
            currentImg.classList.add('imgClicked');

        //--- PUSH TO COMPARE FUNCTION ---
        let currentCard = e.target.dataset.card;
        let compare = compArray.push(currentCard);
        // console.log(currentCard);

        //--- PUSH TO THE DIV ARRAY ---
        divArray.push(currentDiv);

        return compareFunction(currentCard);
    })
})


// --- COMPARE SELECTED CARDS, AND CLEAR AFTER COMPARISON ---
let compareFunction = (dataset) => {
    if (compArray.length == 2) {
        if (compArray[0] == compArray[1]) {
            console.log('Success!');
            console.log(compArray);
            pairCounter++; //add if match
            console.log(pairCounter);

            compArray = []; //empty comparison array
            divArray = []; //empty div array

            if (pairCounter == 8) {
                console.log('Congratz, you\'ve made it!');
            }
        }

        else {
            //Flip back if not match, aka remove clicked class
            console.log('loser...');

            setTimeout(function() {
                divArray[0].classList.remove('clicked');
                divArray[1].classList.remove('clicked');
                divArray[0].querySelector('img').classList.remove('imgClicked');
                divArray[1].querySelector('img').classList.remove('imgClicked');
                compArray = []; //empty comparison array
                divArray = []; //empty div array

            }, 700);
        }
    }
}

//--- GENERERATE NEW MEMORY BOARD - RESET BUTTON ---
function resetBoard() {
    cards.forEach((card) => {
        card.querySelector('img').classList.remove('imgClicked');
        card.classList.remove('clicked');
        compArray = []; //empty comparison array
        divArray = []; //empty div array
    })

    for (let i = memoryBoard.children.length; i >= 0; i--) {
        memoryBoard.appendChild(memoryBoard.children[Math.random() * i | 0]);
    }
}

document.querySelector('.reset').addEventListener('click', function() {
    return resetBoard();
})
