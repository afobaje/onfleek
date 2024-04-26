'use client'
import React from 'react'
import { Star, Time, Video } from './Icons'

export default function InfoCard() {
    return (
        <div className='flex flex-col justify-between p-5 rounded-xl md:w-[48%] shadow-xl bg-white'>
            <div className='flex client-info gap-3'>
                <span className='rounded-full bg-slate-400 size-10'></span>
                <div className='flex flex-col'>
                    <span>Lily Donovan</span>
                    <span className='text-xs text-theme-gray'>Business trainer</span>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-evenly'>
            <p className='font-semibold'>How to properly manage your personal budget?</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam ratione ipsam unde.</p> */}
                <div className='flex justify-between my-3'>
                    <div className='flex gap-2'>
                        <Video />
                        <span>video</span>
                    </div>
                    <div className='flex gap-2'>
                        <Time />
                        <span>15 mins</span>
                    </div>
                    <div className='flex gap-2'>
                        <Star />
                        <span>12 likes</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>5 days ago</span>
                    <button className='bg-theme-blue font-semibold gap-2 flex items-center justify-center p-3 rounded-3xl text-white'>
                        <span>Connect</span>
                        <span>&#62;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
