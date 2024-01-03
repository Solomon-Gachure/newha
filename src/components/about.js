import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-stone-900'>
        <div className='p-2'>
            <h1 className='font-bold text-2xl text-lime-400'>About Us:</h1>
            <h1 className='text-xl font-bold text-center text-amber-400 '>Our Mission & Vision</h1>
            <p className=' font-semibold text-center text-white'>We seek to provide and carefully craft great spaces where tenants can get to enjoy every neccesity.<br/>
Our apartments seek to offer services to perfection be it security, privacy and provision of amenities like water & electricity.<br/>
We are what you need and we understand all of your needs. Safe is home & home is safe!
            </p>
        </div>
        {/**ameneties section */}
        <div className='grid md:grid-cols-4 gap-2 p-2 text-white'>
            <div className='h-[250px] border'>
                {/**security services */}
                <img className=' h-[200px] w-full object-cover'
                src="https://img.freepik.com/free-photo/portrait-male-security-guard-with-uniform_23-2150368713.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais"
                 alt="security" />
                 <p className='flex justify-center items-center p-4 font-bold'>Round the clock security</p>
            </div>
            <div className='h-[250px] border'>
                {/**water services */}
                <img  className=' h-[200px] w-full object-cover'
                src="https://img.freepik.com/free-photo/close-up-water-running_1161-84.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais"
                 alt="water" />
                 <p className='flex justify-center items-center p-4 font-bold'>Running water available</p>
            </div>
            <div className='h-[250px] border'>
                {/**electricity services */}
                <img  className=' h-[200px] w-full object-cover'
                src="https://img.freepik.com/free-photo/glowing-light-bulb-fuels-ideas-innovation-generated-by-ai_188544-15498.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais"
                 alt="elec" />
                 <p className='flex justify-center items-center p-4 font-bold'>24hr Electricity available</p>
            </div>
            <div className='h-[250px] border'>
                {/**trash services */}
                <img  className=' h-[200px] w-full object-cover'
                src="https://img.freepik.com/free-photo/man-wearing-orange-gloves-collecting-garbage-black-bag_1150-23971.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais"
                 alt="trash" />
                 <p className='flex justify-center items-center p-4 font-bold'>Proper trash management</p>
            </div>
        </div>
    </div>
  )
}

export default About