const board = document.getElementById('game-board');
const movesEl = document.getElementById('moves');
const bestScoreEl = document.getElementById('best-score');
const resetBtn = document.getElementById('reset-btn');

// Carte (simboli) 
const symbols = ['🍎','🍌','🍇','🍉','🍒','🍓','🥑','🍍'];
let cards = [...symbols, ...symbols]; 
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

// Carica il miglior punteggio
let bestScore = localStorage.getItem('memoryBestScore');
if(bestScore) bestScoreEl.innerText = bestScore;

function initGame() {
  board.innerHTML = '';
  cards = cards.sort(() => Math.random() - 0.5); // Mescola le carte
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  movesEl.innerText = moves;

  cards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.classList.add('card', 'hidden');
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length === 2) return;
  if (!this.classList.contains('hidden')) return;

  this.classList.remove('hidden');
  this.innerText = this.dataset.symbol;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    movesEl.innerText = moves;
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    matchedPairs++;
    if (matchedPairs === symbols.length) {
      setTimeout(() => alert('Hai vinto in ' + moves + ' mosse!'), 100);
      updateBestScore(moves);
    }
  } else {
    card1.classList.add('hidden');
    card1.innerText = '';
    card2.classList.add('hidden');
    card2.innerText = '';
  }
  flippedCards = [];
}

function updateBestScore(currentMoves) {
  if (!bestScore || currentMoves < bestScore) {
    bestScore = currentMoves;
    localStorage.setItem('memoryBestScore', bestScore);
    bestScoreEl.innerText = bestScore;
  }
}

resetBtn.addEventListener('click', initGame);
initGame();