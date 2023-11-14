const nav = document.querySelector('nav')
const buttonMenu = document.querySelectorAll('main nav button')
const menu = document.querySelector('.menu__dishes')
const nameMenu = document.querySelector('.menu h2')

import {
    hamburgers,
    snacks,
    hotDogs
} from './menu.js';

const renderDish = (name, price, weight, img, id) => {
    menu.insertAdjacentHTML('beforeend', `
    <div class="menu__dishes-card">
        <img src="${img}" alt="${name}">
        <h2>${price}₽</h2>
        <h3>${name}</h3>
        <p>${weight}г</p>
        <button data-name="${name}" data-price="${price}" data-weight="${weight}" data-scr="${img}" data-scr="${img}" data-order-id="${id}">Добавить</button>
    </div>
    `)
}

hamburgers.forEach(item => renderDish(item.name, item.price, item.weight, item.src, item.article))

nav.addEventListener('click', (event) => {
    const click = event.target
    if (click.matches('button')) {
        buttonMenu.forEach(item => item.classList.remove('active'))
        click.classList.add('active')
    }
    if (click === buttonMenu[0]) {
        nameMenu.textContent = 'Бургеры'
        menu.textContent = ''
        hamburgers.forEach((item) => {
            renderDish(item.name, item.price, item.weight, item.src, item.article)
        })
    }
    if (click === buttonMenu[1]) {
        nameMenu.textContent = 'Закуски'
        menu.textContent = ''
        snacks.forEach((item) => renderDish(item.name, item.price, item.weight, item.src, item.article))
    }
    if (click === buttonMenu[2]) {
        nameMenu.textContent = 'Хот-доги'
        menu.textContent = ''
        hotDogs.forEach((item) => renderDish(item.name, item.price, item.weight, item.src, item.article))
    }
})
