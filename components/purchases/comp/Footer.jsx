import Link from "next/link";

export const Footer = () => {
    return <div className={'purchaseFooter'}>
        <Link className={'purchaseBttn purchaseBack'} href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Вернуться назад
        </Link>
        <button className={'purchaseBttn purchasePay'}>
            Оплатить сейчас
        </button>
    </div>
}