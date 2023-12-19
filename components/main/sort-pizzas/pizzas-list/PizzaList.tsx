"use client"

import {FC, JSX, useContext, useEffect} from "react";
import {PizzaItem} from "@/components/main/pizzaitem/PizzaItem";
import './pizzalist.scss'
import {Flex} from "@/styled-comp/Flex";
import {Pizza, pizzas} from '@/database'
import {PurchaseContext} from "@/components/context/GlobalConext";

export const PizzaList: FC = (): JSX.Element => {
    const {pizzasList, setPizzasList} = useContext(PurchaseContext)
    useEffect(() => {
        setPizzasList(pizzas)
    }, [])

    return <div className={'pizzasList'}>
        <span className={'pl-title'}>
            Все пиццы
        </span>
        <div className={'pizzasBlock'}>
            {pizzasList?.map((pizza: Pizza) => <PizzaItem key={pizza.id} {...pizza}/>)}
        </div>
    </div>
}