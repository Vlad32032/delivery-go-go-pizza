const activeToppingsToogle = () => {
    const toppingsButton = document.querySelector('.toppings__button');
    const toppingsList = document.querySelector('.toppings__list');

    const openToppingsList = () => {
        if(!toppingsList.classList.contains('toppings__list_show')) {
            toppingsList.classList.add('toppings__list_show');
            toppingsButton.classList.add('toppings__button_active');

            toppingsList.style.maxHeight = toppingsList.scrollHeight + 'px'
        } else {
            toppingsButton.classList.remove('toppings__button_active');
            toppingsList.style.maxHeight = '0px';

            setTimeout(() => {
                toppingsList.classList.remove('toppings__list_show');
            
            }, 500);
        }
    };

    toppingsButton.onclick = openToppingsList;
};

const getPizzas = async () => {
    try {
        const response = await fetch('https://sable-observant-moose.glitch.me/api/products');
        
        if (!response.ok) {
            throw new Error('Failed yo fetch pizza products');
        };

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`Error fetching pizzas products: ${error}`);
    };
};

const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('card', 'pizzas_card');

    card.innerHTML = `
        <picture class="card__image">
            <source srcset="${data.images[1]}" type="image/webp">
            <img src="${data.images[0]}" alt="${data.name.ru}">
        </picture>

        <div class="card__content">
            <h3 class="card__title">${data.name.ru}</h3>

            <p class="card__info">
                <span class="card__price">${data.price['25cm']} ₽</span>
                <span>/</span>
                <span class="card__weight">25 см</span>
            </p>

            <button class="card__button" data-id="${data.id}">Выбрать</button>
        </div>
    `;

    return card;
};

const renderPizzas = async () => {
    const pizzas = await getPizzas();
    const pizzasList = document.querySelector('.pizzas__list');
    pizzasList.innerHTML = '';

    const items = pizzas.map(data => {
        const item = document.createElement('li');
        item.classList.add('pizzas__item')

        const card = createCard(data)
        item.append(card);

        return item;
    });

    pizzasList.append(...items);
};

const init = () => {
    activeToppingsToogle();

    renderPizzas();
};

init();

// https://github.com/Quper24/go_go_pizza-api
// 2:15:00