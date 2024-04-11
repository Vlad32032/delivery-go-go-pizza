import { getData } from "./getData.js";

const createTopping = (ruName, enName) => {
    const topping = document.createElement('li');
    topping.classList.add('toppings__item');

    topping.innerHTML = `
        <input class="toppings__checkbox" id="${enName}" type="checkbox" value="${enName}" name="topping">
        <label class="toppings__label" for="${enName}">${ruName[0].toUpperCase()}${ruName.slice(1).toLowerCase()}</label>
    `;

    return topping;
};

export const renderToppings = async () => {
    const { en: enToppings, ru: ruToppings } = await getData('https://sable-observant-moose.glitch.me/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    toppingsList.innerHTML = '';

    const items = ruToppings.map((item, index) => {
        const topping = createTopping(item, enToppings[index]);

        return topping;
    });

    toppingsList.append(...items);
};

// 1:12