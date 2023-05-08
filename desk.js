class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.createDeckAndShuffle();
  }

  shuffle() {
    const { cards } = this;

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  dealCard() {
    return this.cards.length > 0 ? this.cards.shift() : null;
  }

  reset() {
    this.createDeckAndShuffle();
  }

  createDeckAndShuffle() {
    const suits = ["♥", "♠", "♣", "♦"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    suits.forEach((suit) => {
      values.forEach((value) => {
        this.cards.push(new Card(suit, value));
      });
    });

    this.shuffle();
  }
}
