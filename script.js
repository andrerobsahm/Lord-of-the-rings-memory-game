'use strict';

let divArray = [];
let compArray = []; //where we compare is its a match


// --- COMPARE SELECTED CARDS, AND CLEAR AFTER COMPARISON ---
let pairCounter = 0; //counts number of pairs

let compareFunction = (dataset) => {
    if (compArray.length == 2) {
        if (compArray[0] == compArray[1]) {
            console.log('Success!');
            console.log(compArray);
            pairCounter++; //add if match
            console.log(pairCounter);

            if (pairCounter == 8) {
                console.log('Congratz, you\'ve made it!');
            }
        }

        else {
            //Flips back if not match
            console.log('loser...');

            setTimeout(function() {
                divArray[0].classList.remove('clicked');
                divArray[1].classList.remove('clicked');
                // divArray = [];
            }, 700);
        }

        compArray = [];
    }
}

// --- ADD CLICK EVENT AND SEND TO THE COMPARISON ARRAY ---
let cards = document.querySelectorAll('.card');

cards.forEach((cardEach) => {
    cardEach.addEventListener('click', (e) => {

        //--- FLIP CARDS ---
        let currentDiv = e.target;
        currentDiv.classList.toggle('clicked')

        let currentImg = currentDiv.querySelector('img')
        currentImg.classList.add('imgClicked')

        //--- PUSH TO COMPARE FUNCTION ---
        let currentCard = e.target.dataset.card;
        let compare = compArray.push(currentCard);
        console.log(currentCard);

        // PUSH TO ...
        divArray.push(currentDiv);

        return compareFunction(currentCard);
    })
});


// --- SHUFFLE CARDS ---
let memoryBoard = document.querySelector('#memory_board');

for (let i = memoryBoard.children.length; i >= 0; i--) {
    memoryBoard.appendChild(memoryBoard.children[Math.random() * i | 0]);
}



//--- GENERERATE NEW MEMORY BOARD ---
