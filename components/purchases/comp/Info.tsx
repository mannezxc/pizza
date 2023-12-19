import {TPurhcasePizza} from "@/components/context/GlobalConext";

type Info = {
    sum: number
    amount: number
}

export const Info = ({amount, sum}: Info) => {

    return <div className={'purchaseInfo'}>
        <p className={'purchaseInfoTotal'}>
            Всего пицц: <span>{amount} шт.</span>
        </p>
        <p className={'purchaseInfoSum'}>
            Сумма заказа: <span>{sum} ₽</span>
        </p>
    </div>
}