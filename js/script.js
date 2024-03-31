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