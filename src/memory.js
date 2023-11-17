class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined;
    }

    for(let i = 0; i < this.cards.length; i++){
    let shuffle = Math.floor(Math.random() * this.cards.length);
    let temp = this.cards[i];
    this.cards[i] = this.cards[shuffle]
    this.cards[shuffle] = temp
  }
  return this.cards;
}

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    }
    else{
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
   if(this.pairsGuessed === 12){
    return true;
   }
   else{
    return false;
   }
  }
}
