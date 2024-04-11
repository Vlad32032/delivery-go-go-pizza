import { activeToppingsToogle } from "./modules/activeToppingsToogle.js";
import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";

const init = () => {
    activeToppingsToogle();
    renderToppings();
    renderPizzas();
};

init();

// https://github.com/Quper24/go_go_pizza-api