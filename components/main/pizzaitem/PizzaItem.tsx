"use client"

import {FC, JSX, useContext, useState} from "react";
import {Pizza} from "@/database";
import './pizza-item.scss'
import {PurchaseContext, TPurhcasePizza} from "@/components/context/GlobalConext";

export const PizzaItem: FC<Pizza> = (
    {
        id,
        name,
        image,
        price,
        sizes = [26, 30, 40],
        testo = ['тонкое', 'традиционное'],
        amount = 1
    }: Pizza): JSX.Element => {

    const {setPurchases, purchases} = useContext(PurchaseContext)
    const [selTesto, setSelTesto] = useState('тонкое')
    const [selSizes, setSelSizes] = useState(26)

    const selPizza: TPurhcasePizza = {id, name, image, price, sizes: selSizes, testo: selTesto, amount, purchased: 1}

    return <div className={'pizzaItem'}>
        <img src={image}/>
        <div className={'pizzaName'}>
            {name}
        </div>
        <div className={'settPizza'}>
            <ul className={'settTesto'}>
                {testo.map((testo: string) => <li
                    onClick={() => setSelTesto(testo)}
                    className={`${testo == selTesto && 'selectedSett'}`} key={testo}>
                    {testo}
                </li>)}
            </ul>
            <ul className={'settSizes'}>
                {sizes.map((size: number) => <li
                    onClick={() => setSelSizes(size)}
                    className={`${size == selSizes && 'selectedSett'}`} key={size}>
                    {size} см.
                </li>)}
            </ul>
        </div>
        <div className={'pizzaInter'}>
            <p>
                от {
                Intl.NumberFormat('ru', {
                    currency: 'RUB',
                    style: 'currency',
                    maximumSignificantDigits: 3
                }).format(price)
            }
            </p>
            <button onClick={() => {
                setPurchases((prev: TPurhcasePizza[]) => {
                    if (prev.some(p => p.name == selPizza.name && p.testo == selPizza.testo && p.sizes == selPizza.sizes)) {
                        console.log(1)
                        const t = [...prev.map(p => {
                            if (p.name == selPizza.name && p.testo == selPizza.testo && p.sizes == selPizza.sizes) {
                                return {...p, amount: p.amount + 1}
                            }
                            return {...p}
                        })]
                        // setAmountItem((prev) => ({
                        //         num: t.reduce((acc, item): number => {
                        //             if (item.name == name) {
                        //                 return acc + item.amount
                        //             } else {
                        //                 return null
                        //             }
                        //         }, 0)
                        //     })
                        // )
                        return t
                    }
                    if (prev.some(p => p.id == selPizza.id)) {
                        console.log(2)
                        const t = [...prev, {
                            ...selPizza,
                            id: selPizza.id + Math.floor(Math.random() * 10000)
                        }]
                        // setAmountItem((prev) => ({
                        //         num: t.reduce((acc, item): number => {
                        //             if (item.name == name) {
                        //                 return acc + item.amount
                        //             }
                        //             return 0
                        //         }, 0)
                        //     })
                        // )
                        return t
                    }
                    const t = [...prev, {
                        ...selPizza
                    }]
                    // setAmountItem((prev) => ({
                    //         num: t.reduce((acc, item): number => {
                    //             if (item.name == name) {
                    //                 return acc + item.amount
                    //             }
                    //             return 0
                    //         }, 0)
                    //     })
                    // )
                    return t
                })
            }}>
                < svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                </svg>
                Добавить
                {/*{*/}
                {/*    purchases.some(p => p.id == id) && <p>*/}
                {/*        {amountItem.num}*/}
                {/*    </p>*/}
                {/*}*/}
            </button>
        </div>
    </div>
}