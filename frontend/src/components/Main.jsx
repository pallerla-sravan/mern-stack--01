import React from 'react'

function Main() {
  return (
    <div className='h-screen w-screen'>
        <div className='flex flex-col justify-center items-center h-[50%] font-bold text-8xl gap-1 pt- 3 pb-5'>
        <span className="block">Social Media</span>
        <span className="block">Assets in an</span>
        <span className="block">Instant.</span>
        </div>
        <div className='h-full'>
          <div className='flex gap-2 backdrop:blur-2xl hover:fo'>
            <img className='h-[364px] w-[299px] object- transform transition-transform duration-300 hover:scale-110 pl-1 ' src="https://cdn.prod.website-files.com/60f85e33b5a89c7e65d83755/6438086f198182897f2e5e62_new-collection-p-500.png" alt="" />
            <img className='h-[364px] w-[299px] object- transform transition-transform duration-300 hover:scale-110 ' src="https://cdn.prod.website-files.com/60f85e33b5a89c7e65d83755/6438086f198182897f2e5e62_new-collection-p-500.png" alt="" />
            <img className='h-[364px] w-[299px] object- transform transition-transform duration-300 hover:scale-110' src="https://cdn.prod.website-files.com/60f85e33b5a89c7e65d83755/6438086f198182897f2e5e62_new-collection-p-500.png" alt="" />
            <img className='h-[364px] w-[299px] object- transform transition-transform duration-300 hover:scale-110' src="https://cdn.prod.website-files.com/60f85e33b5a89c7e65d83755/6438086f198182897f2e5e62_new-collection-p-500.png" alt="" />
            <img className='h-[364px] w-[299px] object- transform transition-transform duration-300 hover:scale-110' src="https://cdn.prod.website-files.com/60f85e33b5a89c7e65d83755/6438086f198182897f2e5e62_new-collection-p-500.png" alt="" />
          
          </div>
        </div>

    </div>
  )
}

export default Main