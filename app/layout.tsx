import {PurchaseGlobalContext} from "@/components/context/GlobalConext";
import Header from "@/components/header/Header";
import {Inter} from 'next/font/google'
import type {Metadata} from 'next'
import React from "react";
import './globals.css'
import './reset.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Pizza',
    description: 'Best Pizza in the world'
}

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="./static/logo.ico" />
        </head>
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
