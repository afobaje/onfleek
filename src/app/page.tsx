'use client'
import Board from '@/components/Board'
import { BarChart, Card } from '@/components/Icons'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Transactions from '@/components/Transactions'
import React, { useState } from 'react'

export default function Home() {
  const [mobileToggle,setMobileToggle]=useState('firstview')


  return (
    <div className='h-screen relative md:static flex w-full'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto relative z-20 bg-theme-white rounded-3xl px-10 py-5'>
        <Nav />

        {/* mobile screen only */}
        <div className="togglewrapper flex md:hidden items-center mb-10 justify-center">
          <div className="toggle flex rounded-2xl shadow-2xl">
            <label htmlFor="firstview" className='p-2 w-14 h-12 inline-grid place-content-center cursor-pointer rounded-2xl'>
              <BarChart/>
              <input type="radio" onChange={(e)=>setMobileToggle(e.target.value)} name='toggleView' className='hidden' value='firstview' id="firstview" defaultChecked />
            </label>
            <label htmlFor="secondview" className='p-2 w-14 h-12 rounded-2xl cursor-pointer inline-grid place-content-center'>
              <Card/>
              <input value='secondview' onChange={(e)=>setMobileToggle(e.target.value)} className='hidden' name='toggleView' type="radio" id="secondview" />
            </label>
          </div>
        </div>
{/* end of mobile screen */}

        <div className="flex justify-between gap-10">
          <Board show={mobileToggle} />
          <Transactions show={mobileToggle} />
        </div>
      </div>
    </div>
  )
}
