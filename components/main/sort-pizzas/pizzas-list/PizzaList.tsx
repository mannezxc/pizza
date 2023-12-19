"use client"

import { PurchaseContext } from "@/components/context/GlobalConext";
import { PizzaItem } from "@/components/main/pizzaitem/PizzaItem";
import { FC, JSX, useContext, useEffect } from "react";
import { Pizza, pizzas } from '@/database'
import './pizzalist.scss'

export const PizzaList: FC = (): JSX.Element => {
    const { pizzasList, setPizzasList } = useContext(PurchaseContext)
    useEffect(() => {
        setPizzasList(pizzas)
    }, [])

    return <div className={'pizzasList'}>
        <span className={'pl-title'}>
            Все пиццы
        </span>
        <div className={'pizzasBlock'}>
            {pizzasList?.map((pizza: Pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
        </div>
    </div>
}