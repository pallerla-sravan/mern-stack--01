import React from 'react'

function Home() {
  return (
    <div className='h-screen w-screen pt-3'>
        <div className='bg-gradient-to-r from-[#fdd02d] to-[#fdd02d] h-full w-full rounded-b-3xl rounded-t-3xl m-1'>
            <div className='flex flex-col justify-center items-center h-[40%]'>
            <div  className="font-bold text-8xl pt- 3 pb-5 text-center">
            <span className="block">Always on Topic.</span>
            <span className="block">Always on Brand.</span>
            </div>
            <div className='text-lg text-center' >Stay true to your brand with automatic logo and color application.</div>
            </div>
        </div>
    </div>
  )
}

export default Home