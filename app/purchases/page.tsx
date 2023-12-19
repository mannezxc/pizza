"use client"

import {FC, JSX, useContext} from "react";
import {PurchaseContext, TPurhcasePizza} from "@/components/context/GlobalConext";
import './page.scss'
import {PurchasesEmpty} from "@/components/purchases/PurchasesEmpty";
import {PurchasesBlock} from "@/components/purchases/PurchasesBlock";

export default function PurchasesPage(): JSX.Element {
    const {purchases} = useContext(PurchaseContext)

    return <>
        {
            purchases.length > 0
                ?
                <PurchasesBlock/>
                :
                <PurchasesEmpty/>
        }
    </>
}