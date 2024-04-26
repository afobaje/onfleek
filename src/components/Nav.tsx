import React from 'react'
import { Logo, Notif, Person } from './Icons'
import Link from 'next/link'


const navItems = ['Feedback', 'Contacts', 'Help']
export default function Nav() {
    return (
        <nav className='flex items-center justify-between mb-10'>
             <div className="logo mt-5 md:hidden"><Logo /> </div>
            <div className="hidden md:flex items-center justify-between basis-10/12">
            <div className="searchbar basis-7/12 mr-5">
                <input type="text" className='w-full bg-input-gray rounded-xl p-4 outline-none' placeholder='Search for an item...' name="" id="" />
            </div>
            <ul className='flex flex-1 justify-between'>
                {
                    navItems.map((navItem: string, index: number) => <li key={index}><Link href='/'>{navItem}</Link></li>)
                }
            </ul>
            </div>
            <div className='flex  basis-16 justify-between'>
                <span><Notif/></span>
                <span><Person/></span>
            </div>
        </nav>
    )
}
