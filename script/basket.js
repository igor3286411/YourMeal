const menu = document.querySelector('.menu__dishes')
const basket = document.querySelector('.basket__center')
const basketTextNoneOrder = document.querySelector('.basket__center-text')
const basketQuantity = document.querySelector('.basket__top div')
const basketSumPrice = document.querySelector('.basket__bottom-sum div')


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
        if (item.id === id && item.order.quantity - 1 === 0) {
            basketMenu.splice([i], 1)
            if (basketMenu.length === 0) {
                basketTextNoneOrder.textContent = 'Тут пока пусто :('
            }
            localStorage.setItem('basketOrder', JSON.stringify(basketMenu));
        } else if (item.id === id) {
            basketMenu[i].order.quantity--
        }

    })
}


const basketMenuPush = (name, price, weight, img, id, quantity) => {
    const basketOrderId = basket.querySelector(`[data-order-id="${id}"]`)
    if(!basketOrderId){
        basketMenu.push({ id: id, order: { name, price, weight, img, quantity } })
        renderOrderInBasket(name, price, weight, img, id, quantity)
    }
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
            <div class="basket__center-order-number-num">${quantity}</div>
            <button class="basket__center-order-number-plus" data-order-id="${id}" type="button">+</button>
        </div>
    </div>
    `)
    localStorage.setItem('basketOrder', JSON.stringify(basketMenu));
}

const quantityAndSumPrice = (orders) => {
    let quantity = 0
    let price = 0
    orders.forEach(item => {
        quantity = quantity + item.order.quantity
        price = price + (item.order.quantity * item.order.price)
    })
    basketQuantity.textContent = quantity
    basketSumPrice.textContent = `${price} ₽`

}

menu.addEventListener('click', (event) => {
    const click = event.target
    if (click.matches('button')) {
        basketTextNoneOrder.textContent = ''
        basketMenuPush(click.getAttribute('data-name'), click.getAttribute('data-price'), click.getAttribute('data-weight'), click.getAttribute('data-scr'), click.getAttribute('data-order-id'), 1)
        // renderOrderInBasket(click.getAttribute('data-name'), click.getAttribute('data-price'), click.getAttribute('data-weight'), click.getAttribute('data-scr'), click.getAttribute('data-order-id'), 1)
        quantityAndSumPrice(basketMenu)
        localStorage.setItem('basketOrder', JSON.stringify(basketMenu));
    }
})

basket.addEventListener('click', (event) => {
    const click = event.target
    if (click.matches('.basket__center-order-number-plus')) {
        plusFunction(click.getAttribute('data-order-id'))
        basket.textContent = ''
        basketMenu.forEach(item => renderOrderInBasket(item.order.name, item.order.price, item.order.weight, item.order.img, item.id, item.order.quantity))
        quantityAndSumPrice(basketMenu)
    }
    if (click.matches('.basket__center-order-number-minus')) {
        minusFunction(click.getAttribute('data-order-id'))
        basket.textContent = ''
        basketMenu.forEach(item => renderOrderInBasket(item.order.name, item.order.price, item.order.weight, item.order.img, item.id, item.order.quantity))
        quantityAndSumPrice(basketMenu)
    }
})


if (localStorage.getItem('basketOrder')) {
    basketMenu = JSON.parse(localStorage.getItem('basketOrder'));
    if (basketMenu.length > 0) {
        basketTextNoneOrder.textContent = ''
    }
    console.log(basketMenu);
    basketMenu.forEach(item => renderOrderInBasket(item.order.name, item.order.price, item.order.weight, item.order.img, item.id, item.order.quantity))
    quantityAndSumPrice(basketMenu)
}

