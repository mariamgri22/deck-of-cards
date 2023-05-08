const deck = new Deck();

deck.shuffle();
function dealCard() {
  const cardContainer = document.getElementById("card-container");

  if (deck.cards.length === 0) {
    cardContainer.innerHTML = "";
    deck.createDeckAndShuffle();
  }

  const card = deck.dealCard();

  if (card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const suitElement = document.createElement("div");
    suitElement.classList.add("suit");
    suitElement.textContent = card.suit;

    const rankElement = document.createElement("div");
    rankElement.classList.add("rank");
    rankElement.textContent = card.rank;

    switch (card.suit) {
      case "♥":
        suitElement.textContent = "♥";
        suitElement.style.color = "red";
        rankElement.textContent = card.rank;
        break;

      case "♠":
        suitElement.textContent = "♠";
        suitElement.style.color = "black";
        rankElement.textContent = card.rank;
        break;

      case "♣":
        suitElement.textContent = "♣";
        suitElement.style.color = "darkgreen";
        rankElement.textContent = card.rank;
        break;

      case "♦":
        suitElement.textContent = "♦";
        suitElement.style.color = "orangered";
        rankElement.textContent = card.rank;
        break;
    }

    cardElement.appendChild(suitElement);
    cardElement.appendChild(rankElement);

    cardContainer.appendChild(cardElement);

    const length = deck.cards.length;
    const ellipseWidth = 1200;
    const ellipseHeight = 640;
    const centerX = 600;
    const centerY = 0;
    const angle = -Math.PI / 2 + (length / 26) * Math.PI;
    const x = centerX + (ellipseWidth / 2) * Math.cos(angle);
    const y = centerY + (ellipseHeight / 2) * Math.sin(angle);

    cardElement.style.position = "absolute";
    cardElement.style.transform = `translate(${x}px, ${y}px)`;
  }
}
