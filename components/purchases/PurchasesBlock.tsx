import {PurchaseContext, TPurhcasePizza} from "@/components/context/GlobalConext";
import {useContext} from "react";
import Link from "next/link";
import {Title} from "@/components/purchases/comp/Title";
import {Info} from "@/components/purchases/comp/Info";
import {Footer} from "@/components/purchases/comp/Footer";
import {PurchaseItem} from "@/components/purchases/comp/PurchaseItem";

export const PurchasesBlock = () => {
    const {purchases} = useContext(PurchaseContext)

    return <section className={'sc-purchases'}>
        <Title/>

        <div className={'purchaseListItem'}>
            {purchases.map((item: TPurhcasePizza) => <div key={item.id}>
                <hr style={{
                    height: '1px',
                    width: '100%',
                    background: '#F4F4F4',
                    margin: '30px 0'
                }}/>
                <PurchaseItem item={item} num={1}/>
            </div>)}
        </div>
        <Info
            amount={purchases.reduce((acc: number, item) => acc + item.amount, 0)}
            sum={purchases.reduce((acc: number, item) => acc + item.price * item.amount, 0)}
        />
        <Footer/>
    </section>
}