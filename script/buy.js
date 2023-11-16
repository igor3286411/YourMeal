const deliverySection = document.querySelector('.delivery-section')
const deliveryForm = document.querySelector('.delivery__form')
const formClose = document.querySelector('.delivery__form-close')
const formDelivery = document.querySelector('.delivery__form-pickup.deliverytis')

buttonBuyActive.addEventListener('click', () => deliverySection.classList.add('open'))

formClose.addEventListener('click', () => {
    deliverySection.classList.remove('open')
})

document.querySelector('.delivery__form-radio').addEventListener('click', (e) => {
    if (e.target.closest('.delivery__form-radio-delivery')) {
        formDelivery.style.display = 'block'
    } else if (e.target.closest('.delivery__form-radio-pickup')) {
        formDelivery.style.display = 'none'
    }
})
