import React from 'react'

const Home = () => {
  return (
    <div name='home' className=' w-full h-full'>
        {/**hero section */}
        <div className='relative' >
            <img className='object-cover w-full h-[300px] md:h-[500px]'
            src="https://img.freepik.com/free-photo/mock-up-poster-frame-boho-interior-background-wooden-living-room-design-scandinavian-style-genera_1258-151572.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais" 
            alt="hero section" />
            
            <div className='flex flex-col  items-center justify-center  absolute inset-0 '>
            <h1 className='md:text-6xl font-bold text-3xl text-center text-yellow-400'>Welcome to Hearthstone Apartments!</h1>
            <p className='md:text-4xl font-bold text-xl text-green-400'>Where safe is home & home is safe!</p>
            <button className='p-2 border bg-black/40 md:mt-8 font-bold text-white'>Take a tour</button>
        </div>
        
        </div>
        
    </div>
  )
}

export default Home