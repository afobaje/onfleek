'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ActiveLink({ href, styles='', children }: { href: string, styles?: string, children: React.ReactNode }) {
    const pathName = usePathname()
    return (
        <Link href={href} className={`${styles} ${pathName === href ? 'linkactive shadow-2xl shadow-black' : ''} md:w-full h-10 inline-flex items-center justify-center rounded-xl py-2 `}>{children}</Link>
    )
}
