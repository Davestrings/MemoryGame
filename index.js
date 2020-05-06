const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockboard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //do cards match?
       checkForMatch();
           
       
    }
}
function checkForMatch(){
    if (firstCard.dataset.framework ===
    secondCard.dataset.framework) {
        //it's a match
      disableCards();
    } else {
        //not a match
        unflipcards();
    }
}
function disableCards(){
    firstCard.removeEventListner('click', flipCard);
    secondCard.removeEventListner('click', flipCard);
    resetBoard();
}
function unflipcards(){
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
    
}
function resetBoard(){
    [hasFlippedCard, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();
cards.forEach(card => card.addEventListener('click', flipCard));