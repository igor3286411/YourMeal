const menu = document.querySelector('.menu__dishes')
const basket = document.querySelector('.basket__center')
const basketTextNoneOrder = document.querySelector('.basket__center-text')

let basketMenu = []

const plusFunction = id => {
    
    basketMenu.forEach((item, i) => {
        if (item.id === id) {
            basketMenu[i].order.quantity++
        }
    })
    
}

const minusFunction = id => {
    basketMenu.forEach((item, i) => {
        if (item.id === id) {
            basketMenu[i].order.quantity--
        }
    })
}

const basketMenuPush = (name, price, weight, img, id, quantity) => {
    basketMenu.push({id: id, order: {name, price, weight, img, quantity}})
}

const renderOrderInBasket = (name, price, weight, img, id, quantity) => {
    basket.insertAdjacentHTML('beforeend', `
    <div class="basket__center-order">
        <div class="basket__center-order-name">
            <img src="${img}" alt="${name}">
            <div>
                <h3>${name}</h3>
                <p class="basket__center-order-name-weight">${weight}г</p>
                <p class="basket__center-order-name-price">${price}₽</p>
            </div>
        </div>
        <div class="basket__center-order-number">
            <button class="basket__center-order-number-minus" data-order-id="${id}" type="button">-</button>
            <input class="basket__center-order-number-num" type="number" name="number" value="${quantity}"></input>
            <button class="basket__center-order-number-plus" data-order-id="${id}" type="button">+</button>
        </div>
    </div>
    `)
    console.log(basketMenu);
}

const renderOrderInBasketg = (name, price, weight, img, id, quantity) => {
    basket.insertAdjacentHTML('beforeend', `
    <div class="basket__center-order">
        <div class="basket__center-order-name">
            <img src="${img}" alt="${name}">
            <div>
                <h3>${name}</h3>
                <p class="basket__center-order-name-weight">${weight}г</p>
                <p class="basket__center-order-name-price">${price}₽</p>
            </div>
        </div>
        <div class="basket__center-order-number">
            <button class="basket__center-order-number-minus" data-order-id="${id}" type="button">-</button>
            <input class="basket__center-order-number-num" type="number" name="number" value="${quantity}"></input>
            <button class="basket__center-order-number-plus" data-order-id="${id}" type="button">+</button>
        </div>
    </div>
    `)
}

menu.addEventListener('click', (event) => {
    const click = event.target
    if(click.matches('button')){
        basketTextNoneOrder.textContent = ''
        basketMenuPush(click.getAttribute('data-name'), click.getAttribute('data-price'), click.getAttribute('data-weight'), click.getAttribute('data-scr'), click.getAttribute('data-order-id'), 1)
        renderOrderInBasket(click.getAttribute('data-name'), click.getAttribute('data-price'), click.getAttribute('data-weight'), click.getAttribute('data-scr'), click.getAttribute('data-order-id'), 1)
    }
})

basket.addEventListener('click', (event) => {
    const click = event.target
    if (click.matches('.basket__center-order-number-plus')) {
        plusFunction(click.getAttribute('data-order-id'))
        // basket.textContent = ''
        basketMenu.forEach(item => {
            renderOrderInBasketg(item.order.name, item.order.price, item.order.weight, item.order.img, item.order.id, item.order.quantity)})
    }
    if (click.matches('.basket__center-order-number-minus')) {
        minusFunction(click.getAttribute('data-order-id'))
        basketMenu.forEach(item => renderOrderInBasket(item.order.name, item.order.price, item.order.weight, item.order.img, item.order.id, item.order.quantity))
    }
})
