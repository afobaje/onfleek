import React from 'react'
import ClientCard from './ClientCard'
import StatisticsChart from './StatisticsChart'
import SpentTime from './SpentTime'
import InfoCard from './InfoCard'

export default function Board({ show }: { show: string }) {
    return (
        <div className={`md:flex flex-1 flex-col ${show === 'firstview' ? 'flex' : 'hidden'}`}>
            <div className="flex p-2 justify-between overflow-x-auto md:overflow-x-hidden">
                <ClientCard clientType='visitors' clientNumber={10_320} />
                <ClientCard clientNumber={4_628} />
                <ClientCard clientType='orders' backgroundSpecifiedColor='rgba(255, 57, 43, 1)' clientNumber={2_980} />
            </div>
            <div className='overflow-x-auto md:overflow-x-hidden'>
                <StatisticsChart />
            </div>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between'>
                <SpentTime />
                <InfoCard />
            </div>
        </div>
    )
}
