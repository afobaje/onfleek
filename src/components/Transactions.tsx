import React from 'react'
import { Edit, Netflix } from './Icons'
import ProgressRing from './ProgressRing'

export default function Transactions({ show }: { show: string }) {
    return (
        <aside className={`bg-card-bg p-5 md:basis-3/12 md:block rounded-3xl ${show === 'secondview' ? 'block flex-1' : 'hidden'}`}>
            <div className="flex-col relative gap-5 flex items-center">
                <div className="edit flex w-full items-center justify-end">
                    <button><Edit /></button>
                </div>
                <div className="value top-10 -right-10 text-sm bg-theme-blue rounded-lg text-white absolute p-2">$10,600</div>
                <div className="pie-chart">
                    <ProgressRing labelStyle={{ fill: 'rgba(51,38,174,1)', fontSize: 'larger' }} radius={70} strokeWidth={2} stroke='rgba(51,38,174,1)' progress={38} />
                </div>
                <div className="card flex flex-col gap-3 w-full">
                    <div className='flex justify-between items-center '>
                        <h2 className='font-semibold'>My Card</h2>
                        <span className='font-semibold'>..</span>
                    </div>
                    <div className='card-img w-full h-44  rounded-3xl '></div>
                </div>
                <div className="transactions w-full my-5">
                    <div className="title flex items-center justify-between">
                        <h2 className='font-semibold'>Transactions</h2>
                        <button className=' rounded-lg w-6 h-6 inline-grid bg-theme-red place-content-center outline-none text-theme-white'>+</button>
                    </div>
                    <div className='transaction-items flex flex-col gap-5 my-3'>


                        <div className="item flex justify-between">
                            <div className='details flex gap-5'>
                                <span className="img  w-9 h-9 inline-grid place-content-center bg-theme-white rounded-xl">
                                    <Netflix />
                                </span>
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>Taxi</span>
                                    <span className='text-xs text-theme-gray'>01:21pm</span>
                                </div>
                            </div>
                            <div className='font-semibold'>
                                -$9,20
                            </div>
                        </div>
                        <div className="item flex justify-between">
                            <div className='details flex gap-5'>
                                <span className="img  w-9 h-9 inline-grid place-content-center bg-theme-white rounded-xl">
                                    <Netflix />
                                </span>
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>Shopping</span>
                                    <span className='text-xs text-theme-gray'>11:15am</span>
                                </div>
                            </div>
                            <div className='font-semibold'>
                                -$142,00
                            </div>
                        </div>
                        <div className="item flex justify-between">
                            <div className='details flex gap-5'>
                                <span className="img  w-9 h-9 inline-grid place-content-center bg-theme-white rounded-xl">
                                    <Netflix />
                                </span>
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>Netflix</span>
                                    <span className='text-xs text-theme-gray'>Jan 10, 2020</span>
                                </div>
                            </div>
                            <div className='font-semibold'>
                                -$24,99
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </aside>
    )
}
