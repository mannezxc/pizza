import Link from "next/link";

export const PurchasesEmpty = () => {
    return <section className={'purchaseEmptyBlock'}>
        <span>
            Корзина пустая 😕
        </span>
        <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br/>
            Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img width={300} height={255} src={'../../static/pur-empty.png'}/>
        <Link href={'/'} className={'backButton'}>
            Вернуться назад
        </Link>
    </section>
}