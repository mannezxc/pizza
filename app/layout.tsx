import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './reset.css'
import './globals.css'
import React from "react";
import {Flex} from "@/styled-comp/Flex";
import Header from "@/components/header/Header";
import {PurchaseGlobalContext} from "@/components/context/GlobalConext";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'React Pizza',
    description: 'Best Pizza in the world',
}

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <PurchaseGlobalContext>
            <div className={'global-container'}>
                <Header/>
                <hr style={{
                    height: '2px',
                    margin: '20px 10px',
                    background: '#d5d5d5',
                }}/>
                <div className={'blockContainer'}>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </PurchaseGlobalContext>
        </body>
        </html>
    )
}
