"use client"

import { PurchaseContext } from "@/components/context/GlobalConext";
import { PurchasesEmpty } from "@/components/purchases/PurchasesEmpty";
import { PurchasesBlock } from "@/components/purchases/PurchasesBlock";
import { JSX, useContext } from "react";
import './page.scss'

export default function PurchasesPage(): JSX.Element {
    const { purchases } = useContext(PurchaseContext)

    return <>
        {
            purchases!.length > 0
                ?
                <PurchasesBlock />
                :
                <PurchasesEmpty />
        }
    </>
}