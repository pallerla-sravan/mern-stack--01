import React from 'react'

function Background() {
  return (
<div className='h-screen w-screen'>
<div
  className="relative h-full w-full bg-cover bg-center m-2"
  style={{ backgroundImage: "url('https://cdn.vectorstock.com/i/1000v/53/18/fox-logo-design-for-team-vector-47695318.jpg')" }}
>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 rounded-t-3xl rounded-b-3xl">
    <h1 className="text-4xl font-bold">What's coming next</h1>
    <p className="text-lg mt-4">Help build designstripe with us! We love hearing your thoughts and ideas</p>
  </div>
</div>

</div>

  )
}

export default Background