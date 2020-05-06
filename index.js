const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
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
        if (firstCard.dataset.framework ===
            secondCard.dataset.framework) {
            //it's a match
            firstCard.removeEventListner('click', flipCard);
            secondCard.removeEventListner('click', flipCard);
        } else {
            //not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard));