import { PizzaList } from "@/components/main/sort-pizzas/pizzas-list/PizzaList";
import { SortPizzas } from "@/components/main/sort-pizzas/SortPizzas";
import './page.css'

export default function Home() {
    return (
        <section className={'sc-pizzas'}>
            <SortPizzas />
            <PizzaList />
        </section>
    )
}
