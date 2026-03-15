const board = document.getElementById('game-board');
const movesEl = document.getElementById('moves');
const bestScoreEl = document.getElementById('best-score');
const resetBtn = document.getElementById('reset-btn');

const symbols = ['🍎','🍌','🍇','🍉','🍒','🍓','🥑','🍍'];
let cards = []; 
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let lockBoard = false; 

let bestScore = localStorage.getItem('memoryBestScore');
if(bestScore) bestScoreEl.innerText = bestScore;

function initGame() {
  board.innerHTML = '';
  cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5); 
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  lockBoard = false;
  movesEl.innerText = moves;

  cards.forEach((symbol) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    
    card.innerHTML = `
      <div class="card-face card-back"></div>
      <div class="card-face card-front">${symbol}</div>
    `;
    
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return; 
  if (this === flippedCards[0]) return; // Evita il doppio click sulla stessa carta
  if (this.classList.contains('flipped')) return; // Ignora le carte già girate

  this.classList.add('flipped');
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    movesEl.innerText = moves;
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.symbol === card2.dataset.symbol;

  if (isMatch) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === symbols.length) {
      setTimeout(() => {
        alert(`🎉 Complimenti! Hai vinto in ${moves} mosse!`);
        updateBestScore(moves);
      }, 500); 
    }
  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
      lockBoard = false; 
    }, 1000);
  }
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