const menuOrder = {
    hamburgers: {
        101: {
            name: 'Мясная бомба',
            price: 689,
            weight: 520,
            src: './images/menu/burger1.jpg',
            article: 101,
        },
        102: {
            name: 'Супер сырный',
            price: 550,
            weight: 512,
            src: './images/menu/burger2.jpg',
            article: 102,
        },
        103: {
            name: 'Сытный',
            price: 689,
            weight: 520,
            src: './images/menu/burger3.jpg',
            article: 103,
        },
        104: {
            name: 'Тяжелый удар',
            price: 480,
            weight: 470,
            src: './images/menu/burger4.jpg',
            article: 104,
        },
        105: {
            name: 'Вечная классика',
            price: 450,
            weight: 450,
            src: './images/menu/burger5.jpg',
            article: 105,
        },
        106: {
            name: 'Итальянский',
            price: 560,
            weight: 510,
            src: './images/menu/burger6.jpg',
            article: 106,
        }
    },
    snacks: {
        201: {
            name: 'Начос',
            price: 250,
            weight: 220,
            src: './images/menu/snack1.jpg',
            article: 201
    
        },
        202: {
            name: 'Картошка фри',
            price: 245,
            weight: 180,
            src: './images/menu/snack2.jpg',
            article: 202
        },
        203: {
            name: 'Луковые кольца',
            price: 230,
            weight: 160,
            src: './images/menu/snack3.jpg',
            article: 203
        }
    },
    hotDogs: {
        301: {
            name: 'Домашний',
            price: 290,
            weight: 250,
            src: './images/menu/hotDog1.jpg',
            article: 301
        },
        302: {
            name: 'Жгучий',
            price: 239,
            weight: 245,
            src: './images/menu/hotDog2.jpg',
            article: 302
        },
        303: {
            name: 'Классический',
            price: 220,
            weight: 215,
            src: './images/menu/hotDog3.jpg',
            article: 303
        }
    }
}

const hamburgers = [
    {
        name: 'Мясная бомба',
        price: 689,
        weight: 520,
        src: './images/menu/burger1.jpg',
        article: 101,
    },
    {
        name: 'Супер сырный',
        price: 550,
        weight: 512,
        src: './images/menu/burger2.jpg',
        article: 102,
    },
    {
        name: 'Сытный',
        price: 689,
        weight: 520,
        src: './images/menu/burger3.jpg',
        article: 103,
    },
    {
        name: 'Тяжелый удар',
        price: 480,
        weight: 470,
        src: './images/menu/burger4.jpg',
        article: 104,
    },
    {
        name: 'Вечная классика',
        price: 450,
        weight: 450,
        src: './images/menu/burger5.jpg',
        article: 105,
    },
    {
        name: 'Итальянский',
        price: 560,
        weight: 510,
        src: './images/menu/burger6.jpg',
        article: 106,
    }
]

const snacks = [
    {
        name: 'Начос',
        price: 250,
        weight: 220,
        src: './images/menu/snack1.jpg',
        article: 201

    },
    {
        name: 'Картошка фри',
        price: 245,
        weight: 180,
        src: './images/menu/snack2.jpg',
        article: 202
    },
    {
        name: 'Луковые кольца',
        price: 230,
        weight: 160,
        src: './images/menu/snack3.jpg',
        article: 203
    }
]

const hotDogs = [
    {
        name: 'Домашний',
        price: 290,
        weight: 250,
        src: './images/menu/hotDog1.jpg',
        article: 301
    },
    {
        name: 'Жгучий',
        price: 239,
        weight: 245,
        src: './images/menu/hotDog2.jpg',
        article: 302
    },
    {
        name: 'Классический',
        price: 220,
        weight: 215,
        src: './images/menu/hotDog3.jpg',
        article: 303
    }
]

export { hamburgers, snacks, hotDogs, menuOrder};