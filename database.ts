enum TypesPizza {
    "meat",
    "vegan",
    "grill",
    "closed",
    "spicy",
}

export type Pizza = {
    id: number
    name: string
    image: string
    price: number
    sizes?: number[]
    testo?: ['тонкое', 'традиционное']
    type: ("all" | "meat" | "vegan" | "grill" | "closed" | "spicy")[]
    amount?: number
    purchased: number
}

export const pizzas: Pizza[] = [
    {
        id: 1,
        name: 'Чизбургер-пицца',
        image: './static/pizza-images/pizza1.png',
        price: 395,
        type: ["all", "meat"],
        purchased: 132
    },
    {
        id: 2,
        name: 'Сырная',
        image: './static/pizza-images/pizza2.png',
        price: 495,
        type: ["all", "vegan"],
        purchased: 11
    },
    {
        id: 3,
        name: 'Креветки по-азиатски',
        image: './static/pizza-images/pizza3.png',
        price: 290,
        type: ["all", "spicy", "closed", ],
        purchased: 1324
    },
    {
        id: 4,
        name: 'Сырный цыпленок',
        image: './static/pizza-images/pizza4.png',
        price: 325,
        type: ["all", "meat"],
        purchased: 1654
    },
    {
        id: 5,
        name: 'Чизбургер-пицца',
        image: './static/pizza-images/pizza1.png',
        price: 360,
        type: ["all", "meat"],
        purchased: 34
    },
    {
        id: 6,
        name: 'Сырная',
        image: './static/pizza-images/pizza2.png',
        price: 435,
        type: ["all", "vegan"],
        purchased: 76
    },
    {
        id: 7,
        name: 'Креветки по-азиатски',
        image: './static/pizza-images/pizza3.png',
        price: 250,
        type: ["all", "grill"],
        purchased: 23
    },
    {
        id: 8,
        name: 'Сырный цыпленок',
        image: './static/pizza-images/pizza4.png',
        price: 315,
        type: ["all", "meat"],
        purchased: 89
    },
]