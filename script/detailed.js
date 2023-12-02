const detailedSection = document.querySelector('.detailed-section')
import { menuOrder } from './menu.js';

const clicksDetailed = (buttonClose, buttonAdd, minus, quantityNum, plus, priceHtml, price) => {
    let numberQuantit = 1
    detailedSection.addEventListener('click', (e) => {
        const click = e.target
        if (click === buttonClose || click === detailedSection) {
            detailedSection.classList.remove('open')
            document.body.style.overflowY = 'scroll'
        } else if (click === plus) {
            numberQuantit++;
        } else if (click === minus && numberQuantit > 1) {
            numberQuantit--;
        }
        quantityNum.textContent = numberQuantit
        priceHtml.textContent = `${price * numberQuantit}₽`
        if (click === buttonAdd) {
            basketTextNoneOrder.textContent = ''
            detailedSection.classList.remove('open')
            document.body.style.overflowY = 'scroll'
            basketMenuPush(click.getAttribute('data-name'), click.getAttribute('data-price'), click.getAttribute('data-weight'), click.getAttribute('data-scr'), click.getAttribute('data-order-id'), numberQuantit)
            quantityAndSumPrice(basketMenu)
            buttonBuy.style.display = 'none'
            buttonBuyActive.style.display = 'block'
        }
    })
}


const renderDetailed = (name, price, weight, img, id, description, structure, calories) => {
    detailedSection.textContent = ''
    detailedSection.classList.add('open')
    document.body.style.overflowY = 'hidden'
    detailedSection.insertAdjacentHTML('beforeend', `
    <div class="detailed">
        <button class="detailed-close"></button>
        <h2>${name}</h2>
        <div class="detailed__flex">
            <img src="${img}" alt="${name}">
            <div class="detailed__flex-right">
                <h3>${description}</h3>
                <h4>Состав:</h4>
                <div class="detailed__flex-right-composition">
                    ${structure}
                    <p class="detailed__flex-right-composition-weight">${weight}г, ккал ${calories}</p>
                </div>
            </div>
            </div>
                <div class="detailed__add">
                    <div class="detailed__add-left">
                        <button class="detailed__add-left-add" data-name="${name}" data-price="${price}" data-weight="${weight}" data-scr="${img}" data-scr="${img}" data-order-id="${id}">Добавить</button>
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
    const detailedClose = detailedSection.querySelector('.detailed-close')
    const buttonAdd = detailedSection.querySelector('.detailed__add-left-add')
    const minus = detailedSection.querySelector('.detailed__add-left-number-minus')
    const quantityNum = detailedSection.querySelector('.detailed__add-left-number-num')
    const plus = detailedSection.querySelector('.detailed__add-left-number-plus')
    const priceHtml = detailedSection.querySelector('.detailed__add-price')
    clicksDetailed(detailedClose, buttonAdd, minus, quantityNum, plus, priceHtml, price);
}

const searchObjectKey = (id, keyObject) => {
    for (let key in menuOrder[keyObject]) {
        if (menuOrder[keyObject][key] === menuOrder[keyObject][id]) {
            renderDetailed(menuOrder[keyObject][key].name, menuOrder[keyObject][key].price, menuOrder[keyObject][key].weight, menuOrder[keyObject][key].src, menuOrder[keyObject][key].article, menuOrder[keyObject][key].description, menuOrder[keyObject][key].structure, menuOrder[keyObject][key].calories);
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