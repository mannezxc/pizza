import Image from 'next/image'
import Link from "next/link";
import {Metadata} from "next";
import './page.css'
import {SortPizzas} from "@/components/main/sort-pizzas/SortPizzas";
import {PizzaItem} from "@/components/main/pizzaitem/PizzaItem";
import {PizzaList} from "@/components/main/sort-pizzas/pizzas-list/PizzaList";


export default function Home() {

    return (
        <section className={'sc-pizzas'}>
            <SortPizzas/>
            <PizzaList/>
        </section>
    )
}
