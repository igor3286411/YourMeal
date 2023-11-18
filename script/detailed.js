const detailedSection = document.querySelector('.detailed-section')
import { menuOrder } from './menu.js';
console.log(menuOrder);

const renderDetailed = (name, price, weight, img, id) => {
    detailedSection.textContent = ''
    detailedSection.classList.add('open')
    detailedSection.insertAdjacentHTML('beforeend', `
    <div class="detailed">
        <button class="detailed-close"></button>
        <h2>${name}</h2>
        <div class="detailed__flex">
            <img src="${img}" alt="${name}">
            <div class="detailed__flex-right">
                <h3>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас
                своей сочностью, а хрустящие листья салата добавят свежести.</h3>
                <h4>Состав:</h4>
                <div class="detailed__flex-right-composition">
                    <p>Пшеничная булочка</p>
                    <p>Котлета из говядины</p>
                    <p>Красный лук</p>
                    <p>Листья салата</p>
                    <p>Соус горчичный</p>
                    <p class="detailed__flex-right-composition-weight">${weight}г, ккал 430</p>
                </div>
            </div>
            </div>
                <div class="detailed__add">
                    <div class="detailed__add-left">
                        <button class="detailed__add-left-add">Добавить</button>
                        <div class="detailed__add-left-number">
                            <button class="detailed__add-left-number-minus" data-order-id="${id}" type="button">-</button>
                            <div class="detailed__add-left-number-num">1</div>
                            <button class="detailed__add-left-number-plus" data-order-id="${id}" type="button">+</button>
                        </div>
                    </div>
                    <div class="detailed__add-price">${price}₽</div>
                </div>
            </div>
    `)
}

const searchObjectKey = (id, keyObject) => {
    for (let key in menuOrder[keyObject]) {
        if (menuOrder[keyObject][key] === menuOrder[keyObject][id]) {
            renderDetailed(menuOrder[keyObject][key].name, menuOrder[keyObject][key].price, menuOrder[keyObject][key].weight, menuOrder[keyObject][key].src, menuOrder[keyObject][key].article);
        }
    }
}

menu.addEventListener('click', (event) => {
    const click = event.target;
    if (click.classList.contains('menu__dishes-card')) {
        searchObjectKey(click.getAttribute('data-order-id'), click.getAttribute('data-name-menu'));
    } else if (!click.classList.contains('menu__dishes-card') && !click.matches('button') && !click.matches('.menu__dishes')) {
        searchObjectKey(click.parentNode.getAttribute('data-order-id'), click.parentNode.getAttribute('data-name-menu'));
    }
})