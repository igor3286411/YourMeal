const deliverySection = document.querySelector('.delivery-section')
const deliveryForm = document.querySelector('.delivery__form')
const formClose = document.querySelector('.delivery__form-close')
const formDelivery = document.querySelector('.delivery__form-pickup.deliverytis')
const basketOrderMobile = document.querySelector('.basket__order')
const basketMobile = document.querySelector('.basket__top')

buttonBuyActive.addEventListener('click', () => deliverySection.classList.add('open'))

basketMobile.addEventListener('click', () => {
    basketOrderMobile.style.display = 'block'
})

deliveryForm.addEventListener('click', (e) =>{
    e.preventDefault()
    if(e.target === formClose){
        deliverySection.classList.remove('open')
    }
    if(e.target.closest('.delivery__form-radio-delivery') || e.target.closest('input .delivery__form-radio-delivery')){
        const inputChecked = deliveryForm.querySelector('.delivery__form-radio-delivery input')
        inputChecked.checked = true
        formDelivery.style.display = 'block'
    }
    if(e.target.closest('.delivery__form-radio-pickup') || e.target.closest('input .delivery__form-radio-delivery')){
        const inputChecked = deliveryForm.querySelector('.delivery__form-radio-pickup input')
        inputChecked.checked = true
        formDelivery.style.display = 'none'
    }
})