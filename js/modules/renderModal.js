const createModalCard = (data) => {
    const modalCard = document.createElement('div');
    modalCard.classList.add('modal__main', 'modal-pizza__main');

    modalCard.innerHTML = `
        <picture class="modal-pizza__image">
            <source srcset="${data.images[1]}" type="image/webp">
            <img src="${data.images[0]}" alt="${data.name.ru}">
        </picture>

        <h2 class="modal-pizza__title">${data.name.ru[0].toUpperCase()}${data.name.ru.slice(1).toLowerCase()}</h2>

        <p class="modal-pizza__toppings">${data.toppings.ru}</p>

        <p class="modal-pizza__info">
            <span class="modal-pizza__price">${data.price['25cm']} ₽</span>
            <span>/</span>
            <span class="modal-pizza__weight">25 см</span>
        </p>

        <form class="modal-pizza__form">
            <fieldset class="modal-pizza__fieldset">
                <input class="modal-pizza__radio" id="fluffy" type="radio" value="fluffy" name="dough">
                <label class="modal-pizza__label" for="fluffy">Пышное тесто</label>

                <input class="modal-pizza__radio" id="thin" type="radio" value="thin" name="dough" checked>
                <label class="modal-pizza__label" for="thin">Тонкое тесто</label>
            </fieldset>

            <fieldset class="modal-pizza__fieldset">
                <input class="modal-pizza__radio" id="weight25" type="radio" value="weight25" name="weight" checked>
                <label class="modal-pizza__label" for="weight25">25 см</label>

                <input class="modal-pizza__radio" id="weight30" type="radio" value="weight30" name="weight">
                <label class="modal-pizza__label" for="weight30">30 см</label>

                <input class="modal-pizza__radio" id="weight35" type="radio" value="weight35" name="weight">
                <label class="modal-pizza__label" for="weight35">35 см</label>
            </fieldset>
            
            <button class="modal-pizza__add-cart" type="button">В корзину</button>
        </form>

        <button class="modal__close" type="button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
                <rect x="4" y="4.60181" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60181)" fill="#C1AB91"/>
            </svg>
        </button>
    `;

    const modalCloseButton = modalCard.querySelector('.modal__close');

    modalCloseButton.onclick = () => {
        document.querySelector('.modal').classList.remove('open');
    };

    return modalCard;
};

export const renderModal = (data) => {
    const modal = document.querySelector('.modal');
    modal.classList.add('open');
    modal.innerHTML = '';

    modal.onclick = (event) => {
        if (event.target == modal) modal.classList.remove('open');
    };

    const innerModal = createModalCard(data);
    modal.append(innerModal);
};