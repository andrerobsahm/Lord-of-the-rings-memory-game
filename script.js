"use strict";

let memoryBoard = document.querySelector('#memory_board');
let cards = document.querySelectorAll('.card');
let wrapper = document.querySelector('.wrapper');
let pairCounter = 0; //counts the number of pairs
let winContainer = document.querySelector('.winContainer');
let winSection = document.querySelector('.winSection');
let compArray = [];
let divArray = [];

resetBoard();


// --- CLICK EVENT, SEND TO THE COMPARISON ARRAY ---
cards.forEach((card) => {
    card.addEventListener('click', (e) => {

        //--- FLIP CARDS, ADD CLICKED-CLASS ---
        let currentDiv = e.target;
            currentDiv.classList.add('clicked');
            divArray.push(currentDiv);

        let currentImg = currentDiv.querySelector('img');
            currentImg.classList.add('imgClicked');

        //--- PUSH TO COMPARE FUNCTION ---
        let currentCard = e.target.dataset.card;
        let compare = compArray.push(currentCard);

        return compareFunction(currentCard);
    })
});


// --- COMPARE SELECTED CARDS, AND CLEAR AFTER COMPARISON ---
let compareFunction = (dataset) => {
    if (compArray.length == 2) {
        if (compArray[0] == compArray[1]) {
            console.log('Success!');
            pairCounter++; //add to counter if match
            console.log(pairCounter);

            compArray = []; //clear comparison array
            divArray = []; //clear div array


            if (pairCounter == 8) {
                console.log('Congratz, you\'ve made it!');

                winContainer.style.display = "flex";
                    setTimeout(function() {
                        winSection.classList.add('winning');
                    }, 100);
            }
        }

        else {
            //Flip back if no match, remove clicked/imgClicked class
            console.log('loser...');

            wrapper.classList.add('container_clicked');
            setTimeout(function(){
                wrapper.classList.remove('container_clicked');
            }, 800);

            setTimeout(function() {
                divArray[0].classList.remove('clicked');
                divArray[1].classList.remove('clicked');
                divArray[0].querySelector('img').classList.remove('imgClicked');
                divArray[1].querySelector('img').classList.remove('imgClicked');
                compArray = []; //empty comparison array
                divArray = []; //empty div array
            }, 800);
        }
    }
};

//--- GENERERATE NEW MEMORY BOARD - RESET BUTTON ---
function resetBoard() {
    cards.forEach((card) => {
        card.classList.remove('clicked');
        card.querySelector('img').classList.remove('imgClicked');
        compArray = []; //empty comparison array
        divArray = []; //empty div array
    })

    for (let i = memoryBoard.children.length; i >= 0; i--) {
        memoryBoard.appendChild(memoryBoard.children[Math.random() * i | 0]);
    }

    pairCounter = 0;
}

//--- BOTTOM RESET BUTTON ---
document.querySelector('.reset').addEventListener('click', function() {
    return resetBoard();
})

//--- WINNING RESET BUTTON ---
document.querySelector('.tryAgain').addEventListener('click', function() {
    winSection.classList.remove('winning');
    winContainer.style.display = 'none';

    return resetBoard();
})


//--- PAUSE/PLAY AUDIO PLAYER ---
let audio = document.getElementById("audioPlayer");
function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
}
