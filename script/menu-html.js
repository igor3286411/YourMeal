const nav = document.querySelector('nav')
const buttonMenu = document.querySelectorAll('main nav button')
const menu = document.querySelector('.menu__dishes')
const nameMenu = document.querySelector('.menu h2')
import { menuOrder } from './menu.js';


const renderDish = (name, price, weight, img, id, nameEat) => {
    menu.insertAdjacentHTML('beforeend', `
    <div class="menu__dishes-card" data-order-id="${id}" data-name-menu="${nameEat}">
        <img src="${img}" alt="${name}">
        <h2>${price}₽</h2>
        <h3>${name}</h3>
        <p>${weight}г</p>
        <button data-name="${name}" data-price="${price}" data-weight="${weight}" data-scr="${img}" data-scr="${img}" data-order-id="${id}">Добавить</button>
    </div>
    `)
}

const acticeButton = (button, nameMenuAttributRu, nameMenuAttribut) => {
    buttonMenu.forEach(item => item.classList.remove('active'))
    button.classList.add('active')
    menu.textContent = ''
    nameMenu.textContent = nameMenuAttributRu
    for (let key in menuOrder[nameMenuAttribut]) {
        renderDish(menuOrder[nameMenuAttribut][key].name, menuOrder[nameMenuAttribut][key].price, menuOrder[nameMenuAttribut][key].weight, menuOrder[nameMenuAttribut][key].src, menuOrder[nameMenuAttribut][key].article, nameMenuAttribut)
    }
}

for (let key in menuOrder.hamburgers) {
    renderDish(menuOrder.hamburgers[key].name, menuOrder.hamburgers[key].price, menuOrder.hamburgers[key].weight, menuOrder.hamburgers[key].src, menuOrder.hamburgers[key].article, 'hamburgers')
}

nav.addEventListener('click', (event) => {
    const click = event.target
    const nameMenuAttribut = click.getAttribute('data-name-menu')
    const nameMenuAttributRu = click.getAttribute('data-name-menu-ru')
    if (click.classList.contains("hamburgers") || click.classList.contains("snacks") || click.classList.contains("hotDogs")) {
        acticeButton(click.parentNode, nameMenuAttributRu, nameMenuAttribut)
    } else if (click.matches('button')) {
        acticeButton(click, nameMenuAttributRu, nameMenuAttribut)
    }
})
