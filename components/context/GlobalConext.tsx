"use client"

import React, {
    createContext,
    Dispatch, DispatchWithoutAction,
    FC,
    ProviderProps,
    ReactNode, ReducerStateWithoutAction, ReducerWithoutAction,
    SetStateAction,
    useState,
    WeakValidationMap
} from "react";
import {Pizza} from "@/database";

export type TPurhcasePizza = {
    id: number
    name: string
    image: string
    price: number
    sizes: number
    testo: string
    type?: string
    amount: number
    purchased?: number
}

type ContextValue = {
    purchases: TPurhcasePizza[],
    setPurchases: Dispatch<SetStateAction<TPurhcasePizza[]>>,
    pizzasList: Pizza[],
    setPizzasList: Dispatch<SetStateAction<Pizza[]>>
}
export const PurchaseContext = createContext({} as ContextValue)

export const PurchaseGlobalContext = ({children}: { children: React.ReactNode }) => {
    const [purchases, setPurchases] = useState<TPurhcasePizza[]>([])
    const [pizzasList, setPizzasList] = useState<Pizza[]>([])
    const value: ContextValue = {
        purchases,
        setPurchases,
        pizzasList,
        setPizzasList
    }

    return <PurchaseContext.Provider value={value}>
        {children}
    </PurchaseContext.Provider>
}