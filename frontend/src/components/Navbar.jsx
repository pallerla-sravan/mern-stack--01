import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate= useNavigate()
  return (
    <div className='flex justify-between border-b-2 border-black sticky top-0 backdrop-blur-md z-50' >
        <div ><img className='pb-1 h-[90px] w-[80px] object-cover'src="https://cdn.vectorstock.com/i/1000v/53/18/fox-logo-design-for-team-vector-47695318.jpg" alt="" /></div>
        <div className='flex justify-evenly items-center w-[40%] font-semibold text-lg'>
            <div className='hover:text-blue-600' onClick={()=>{navigate("/")}}>HOME</div>
            <div className='hover:text-blue-600' onClick={()=>{navigate("/components/About")}}>ABOUT</div>
            <div className='flex'><div>THE PARK</div><div><i class="ri-arrow-down-s-line"></i></div></div>
            <div>CONTACT</div>
        </div>
    </div>
  )
}

export default Navbar