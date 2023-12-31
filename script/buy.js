const deliverySection = document.querySelector('.delivery-section')
const deliveryForm = document.querySelector('.delivery__form')
const formClose = document.querySelector('.delivery__form-close')
const formDelivery = document.querySelector('.delivery__form-pickup.deliverytis')
const formOrder = deliverySection.querySelector('.delivery__form form')
const inputName = deliverySection.querySelector('.delivery__form-pickup-input-name')

const renderSubmitForm = (name) => {
    basketTextNoneOrder.textContent = 'Тут пока пусто :('
    buttonBuy.style.display = 'block'
    buttonBuyActive.style.display = 'none'
    basketQuantity.textContent = 0
    basketSumPrice.textContent = `0 ₽`
    basket.textContent = ''
    localStorage.clear()
    formOrder.textContent = ''
    deliverySection.querySelector('.delivery__img').style.display = 'none'
    deliverySection.querySelector('.delivery').style.alignItems = 'center'
    deliverySection.querySelector('.delivery').style.justifyContent = 'center'
    deliverySection.querySelector('.delivery').style.textAlign = 'center'
    deliverySection.querySelector('.delivery').style.display = 'flex'
    deliveryForm.querySelector('h2').style.fontSize = '30px'
    deliveryForm.querySelector('h2').textContent = `Спасибо, ${name}. Ваш заказ принят`
}

buttonBuyActive.addEventListener('click', () => {
    document.body.style.overflowY = 'hidden'
    deliverySection.classList.add('open')
})

formClose.addEventListener('click', () => {
    document.body.style.overflowY = 'scroll'
    deliverySection.classList.remove('open')
})

document.querySelector('.delivery__form-radio').addEventListener('click', (e) => {
    if (e.target.closest('.delivery__form-radio-delivery')) {
        formDelivery.style.display = 'block'
    } else if (e.target.closest('.delivery__form-radio-pickup')) {
        formDelivery.style.display = 'none'
    }
})

formOrder.addEventListener('submit', (event) => {
    event.preventDefault()
    renderSubmitForm(inputName.value);
    inputName.value = ''
})
