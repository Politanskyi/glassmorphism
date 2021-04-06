let cardsContainer = document.querySelector('[data-cards]');
let cards = cardsContainer.querySelectorAll('[data-card-item]')
let config = {
    max: 5,
    speed: 400,
    glare: true,
    'max-glare': 0.4
}

VanillaTilt.init(cards, config);
