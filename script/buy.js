const deliverySection = document.querySelector('.delivery-section')
const deliveryForm = document.querySelector('.delivery__form')
const formClose = document.querySelector('.delivery__form-close')
const formDelivery = document.querySelector('.delivery__form-pickup.deliverytis')

buttonBuyActive.addEventListener('click', () => deliverySection.classList.add('open'))

deliveryForm.addEventListener('click', (e) =>{
    // console.log(e.target);
    e.preventDefault()
    if(e.target === formClose){
        deliverySection.classList.remove('open')
    }
    if(e.target.closest('.delivery__form-radio-delivery')){
        const inputCheckeds = deliveryForm.querySelector('.delivery__form-radio-delivery input')
        console.log(inputCheckeds);
        inputCheckeds.checked = true
        formDelivery.style.display = 'block'
    }
    if(e.target.closest('.delivery__form-radio-pickup')){
        const inputChecked = deliveryForm.querySelector('.delivery__form-radio-pickup input')
        console.log(inputChecked);
        inputChecked.checked = true
        inputCheckeds = false
        formDelivery.style.display = 'none'
    }
})