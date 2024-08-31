import React from 'react'

function Footer() {
  return (
<div className="h-screen w-screen  bg-gray-100">
  <div className=" pt-7 space-x-4 text-6xl text-gray-700 h-[50%] flex items-center justify-around">
    <i className="ri-facebook-box-line cursor-pointer hover:text-blue-600 transition-colors duration-300"></i>
    <i className="ri-instagram-line cursor-pointer hover:text-pink-500 transition-colors duration-300"></i>
    <i className="ri-twitter-x-line cursor-pointer hover:text-blue-400 transition-colors duration-300"></i>
    <i className="ri-twitter-line cursor-pointer hover:text-blue-400 transition-colors duration-300"></i>
  </div>
  <div className='flex justify-around h-[50%] items-center text-2xl font-bold'>
    <div className='flex justify-between w-[25%]'>
        <h4>WORK</h4>
        <h4>STORY</h4>
        <h4>SERVICE</h4>
    </div>
    <div><h1>flatstudio</h1></div>
    <div className='flex w-[25%] justify-around'>
    <h3>CAREEDS</h3>
    <h3>CONTACT US</h3>
    </div>
  </div>
</div>

  )
}

export default Footer