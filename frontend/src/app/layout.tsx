import type { Metadata } from 'next'
import './globals.css'
import {Footer} from "@/app/footercomponent/Footer";
import React from "react";

export const metadata: Metadata = {
    title: 'Title Goes Here',
    description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html  lang="en" suppressHydrationWarning>
        <body>
        {children}
        </body>
        </html>
    )
}
