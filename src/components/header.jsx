import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
     <div
        className='flex flex-row justify-between items-center p-4 mb-8 border-b border-slate-500'
    >
        <p
            className='font-bold text-[#D6594B] text-3xl'
        >
            Acolyte
        </p>
{/* 
        <button
            className='flex flex-row justify-between items-center h-[52px] bg-slate-500/50 py-2 px-4 rounded-xl text-white font-medium text-lg'
        >
           <Image 
            src="/assets/metamask.png" 
            className="mr-2"
            width="24" 
            height="24"
            alt=''
           /> 
           Connect Metamask
        </button> */}
    </div>
  )
}

export default Header
