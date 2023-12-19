"use client"

import {FC, useContext, useState} from "react";
import './sort-pizzas.scss'
import {PurchaseContext} from "@/components/context/GlobalConext";
import {Pizza, pizzas} from "@/database";

type TSortParam = {
    id: number
    name?: string
    type?: string
}

type TSortAt = {
    id: number
    name: string
}

const SortParams: TSortParam[] = [
    {
        id: 1,
        name: 'Все',
        type: "all"
    },
    {
        id: 2,
        name: 'Мясные',
        type: "meat"
    },
    {
        id: 3,
        name: 'Вегетарианская',
        type: "vegan"
    },
    {
        id: 4,
        name: 'Гриль',
        type: "grill"
    },
    {
        id: 5,
        name: 'Острые',
        type: "spicy"
    },
    {
        id: 6,
        name: 'Закрытые',
        type: "closed"
    },
]

const sortListAt: TSortAt[] = [
    {
        id: 1,
        name: 'популярности'
    },
    {
        id: 2,
        name: 'цене'
    },
    {
        id: 3,
        name: 'алфавиту'
    },
]

export const SortPizzas: FC = () => {
    const [selectedSort, setSelectedSort] = useState<TSortParam>({id: 1})
    const {setPizzasList} = useContext(PurchaseContext)
    const [showSort, setShowSort] = useState<boolean>(false)

    return <div className={'sortPizzaBlock'}>
        <ul className={'sortPizzasList'}>
            {SortParams.map((param: TSortParam) => <li
                onClick={() => {
                    setSelectedSort(param)
                    setPizzasList(pizzas.filter(item => item.type.find(type => type == param.type)))
                }}
                className={`${selectedSort.id == param.id && 'selectedSortItem'} sortPizzasItem`} key={param.id}>
                {param.name}
            </li>)}
        </ul>
        <div className={'sortPizzaAt'}>
            <p>
                Сортировать по: <button onClick={() => setShowSort(prev => !prev)}>популярности</button>
            </p>

            {showSort && <ul className={'buttonSortList'}>
                {sortListAt.map((item: TSortAt) => <li
                        onClick={() => {
                            if (item.name == 'алфавиту') {
                                setPizzasList((prev): Pizza[] => {
                                    return prev.sort((a, b) => {
                                        const nameA = a.name.toUpperCase();
                                        const nameB = b.name.toUpperCase();
                                        if (nameA < nameB) {
                                            return -1;
                                        }
                                        if (nameA > nameB) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(a => a)
                                })
                            }
                            if (item.name == 'цене') {
                                setPizzasList((prev): Pizza[] => {
                                    return prev.sort((a, b) => {
                                        const priceA = a.price;
                                        const priceB = b.price;
                                        if (priceA < priceB) {
                                            return -1;
                                        }
                                        if (priceA > priceB) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(a => a)
                                })
                            }
                            if (item.name == 'популярности') {
                                setPizzasList((prev): Pizza[] => {
                                    return prev.sort((a, b) => {
                                        const purchasedA = a.purchased;
                                        const purchasedB = b.purchased;
                                        if (purchasedA > purchasedB) {
                                            return -1;
                                        }
                                        if (purchasedA < purchasedB) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(a => a)
                                })
                            }
                        }}
                        key={item.id}>
                        {item.name}
                    </li>
                )}
            </ul>}
        </div>
    </div>
}