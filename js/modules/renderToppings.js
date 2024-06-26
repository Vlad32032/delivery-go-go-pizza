import { getData } from "./getData.js";
import { renderPizzas } from "./renderPizzas.js";

const createTopping = (ruName, enName) => {
    const topping = document.createElement('li');
    topping.classList.add('toppings__item');

    topping.innerHTML = `
        <input class="toppings__checkbox" id="${enName}" type="checkbox" value="${enName}" name="topping">
        <label class="toppings__label" for="${enName}">${ruName[0].toUpperCase()}${ruName.slice(1).toLowerCase()}</label>
    `;

    return topping;
};

const createButtonReset = () => {
    const pizzasButton = document.querySelector('.pizzas__button');

    const itemReset = document.createElement('li');
    itemReset.classList.add('toppings__item');

    const buttonReset = document.createElement('button');
    buttonReset.classList.add( 'toppings__label', 'toppings__reset');

    buttonReset.textContent = 'Сбросить';
    buttonReset.type = 'reset';

    itemReset.append(buttonReset);

    const itemResetEvent = () => {
        setTimeout(() => {
            renderPizzas();
            itemReset.remove();
        }, 50);
    }

    itemReset.addEventListener('click', itemResetEvent);
    pizzasButton.addEventListener('click', itemResetEvent);

    return itemReset;
};

export const renderToppings = async () => {
    const { en: enToppings, ru: ruToppings } = await getData('https://sable-observant-moose.glitch.me/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    const toppingsForm = document.querySelector('.toppings__form');
    toppingsList.innerHTML = '';

    const items = ruToppings.map((item, index) => {
        const topping = createTopping(item, enToppings[index]);

        return topping;
    });

    toppingsList.append(...items);

    const buttonReset = createButtonReset();

    toppingsForm.addEventListener('change', () => {
        const checkedToppings = [];

        const formData = new FormData(toppingsForm);

        for (const [, value] of formData.entries()) {
            checkedToppings.push(value);
        };

        checkedToppings.length > 0 
            ? toppingsList.append(buttonReset)
            : buttonReset.remove();

        renderPizzas(checkedToppings);
    });
};