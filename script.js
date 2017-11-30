const cardArray = [
    'A','A',
    'B','B',
    'C','C',
    'D','D',
    'E','E',
    'F','F',
    'G','G',
    'H','H'
];

const memory_values = [];
const memory_card_ids = [];
const cards_flipped = 0;

Array.prototype.memory_card_shuffle = function() {
    const i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {
    tiles_flipped = 0;
    const output = '';
    memory_array.memory_card_shuffle();

    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="card_'+i+'" onclick="memoryFlipCard(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}
