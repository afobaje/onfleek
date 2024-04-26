import React from 'react'
import chart from './../assets/network-wave-chart.png'
import Image from 'next/image'
export default function ClientCard({ clientType = 'customer', clientNumber = 0, backgroundSpecifiedColor = 'white' }: { clientType?: string, clientNumber: number, backgroundSpecifiedColor?: string }) {
    return (
        <div style={{
            backgroundColor: backgroundSpecifiedColor
        }} className='flex flex-col-reverse md:flex-row rounded-xl justify-start items-center h-24 py-1 px-2 w-[30%] md:p-3 md:w-[32%] gap-2 md:gap-5 shadow-2xl'>
            <div className="chart size-10 ">
                <Image src={chart.src} width={0} height={0} className='object-contain w-full h-full' alt='chart'  />
                {/* <img src={chart.src} className='object-contain w-full h-full' alt="" /> */}
            </div>
            <div className="flex flex-col">
                <span className='text-xs uppercase'>{clientType}</span>
                <span className='font-semibold md:text-black text-theme-blue text-xl'>{new Intl.NumberFormat().format(clientNumber)}</span>
            </div>
        </div>
    )
}
