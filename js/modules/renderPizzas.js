import { getData } from "./getData.js";
import { renderModal } from "./renderModal.js";

const createCard = (data) => {
    const card = document.createElement('li');
    card.classList.add('pizzas__item')

    card.onclick = (event) => {
        if (event.target.dataset.id) {
            renderModal(data);
        };
    };

    card.innerHTML = `
        <article class="card pizzas_card">
            <picture class="card__image">
                <source srcset="${data.images[1]}" type="image/webp">
                <img src="${data.images[0]}" alt="${data.name.ru}">
            </picture>

            <div class="card__content">
                <h3 class="card__title">${data.name.ru[0].toUpperCase()}${data.name.ru.slice(1).toLowerCase()}</h3>

                <p class="card__info">
                    <span class="card__price">${data.price['25cm']} ₽</span>
                    <span>/</span>
                    <span class="card__weight">25 см</span>
                </p>

                <button class="card__button" data-id="${data.id}">Выбрать</button>
            </div>
        </article>
    `;

    return card;
};

export const renderPizzas = async (checkedToppings) => {
    const api =`https://sable-observant-moose.glitch.me/api/products${
        checkedToppings ? `?toppings=${checkedToppings}` : '' 
    }`;
    
    const pizzas = await getData(api);
    const pizzasList = document.querySelector('.pizzas__list');
    const pizzaMain = document.querySelector('.pizzas__main');
    const pizzaNotFound = document.querySelector('.pizzas__not-found');

    pizzaMain.style.display = 'block';
    pizzaNotFound.style.display = 'none';
    pizzasList.innerHTML = '';

    if (pizzas.length > 0) {
        const items = pizzas.map(data => {
            const card = createCard(data);

            return card;
        });
        
        pizzasList.append(...items);
    } else {
        pizzaMain.style.display = 'none';
        pizzaNotFound.style.display = 'block';
    };
};