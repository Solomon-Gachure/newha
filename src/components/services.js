import React, { useState } from 'react'

const Services = () => {
    
  return (
    <div name='services' className='w-full h-full bg-stone-900'>
        {/**section for the payment of services like elec, water, trash */}
        <div>
            <h1 className='text-center text-xl md:text-2xl font-bold text-lime-400'>Pay for Your Services</h1>
            {/**rent section */}
            <div className='md:flex justify-center items-center gap-4 p-2'>
                <h1 className='text-center flex justify-center md:text-2xl font-bold text-amber-300'>Rent payment:</h1>
                <div>
                    <p className='md:text-xl text-white'>Rent details<br/>
Paybill number: 400200<br/>
Account Number: 40040940<br/>
Business Name: Cecilia Gathoni Ndungu
                    </p>
                </div>
                <form className='flex flex-col justify-center text-white items-center gap-2 p-2' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="post">
                    <input type="number" required name='House no' className='border bg-transparent outline-none p-1' placeholder='Enter House no.  ' />
                    <input type="number" required  name='Paybill no' className='border bg-transparent outline-none p-1' placeholder='Enter Paybill no. ' />
                    <input type="number" required  name='Account no' className='border bg-transparent outline-none p-1' placeholder='Enter Account no. ' />
                    <input type="number" required  name='Amount' className='border bg-transparent outline-none p-1' placeholder='Enter Amount ' />
<button className='border font-bold bg-green-500 text-white w-[150px] p-1 rounded-lg'>Pay</button>
                </form>
            </div>
              {/**water section */}
            <div className='md:flex justify-center items-center gap-4 p-2'>
                <h1 className='text-center flex justify-center md:text-2xl font-bold text-amber-300'>Water payment:</h1>
                <div>
                    <p className='md:text-xl text-white'>Water Payment details<br/>
Paybill number: 508885<br/>
Account Number: 5702#House no.<br/>
Business Name: Daniel Munene Mwangi
                    </p>
                </div>
                <form className='flex flex-col text-white justify-center items-center gap-2 p-2' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="post">
                    <input type="number" required  name='House no' className='border bg-transparent outline-none p-1' placeholder='Enter House no.  ' />
                    <input type="number" required name='Paybill no' className='border bg-transparent outline-none p-1' placeholder='Enter Paybill no. ' />
                    <input type="number" required  name='Account no' className='border bg-transparent outline-none p-1' placeholder='Enter Account no. ' />
                    <input type="number" required  name='Amount' className='border bg-transparent outline-none p-1' placeholder='Enter Amount ' />
<button className='border font-bold bg-green-500 text-white w-[150px] p-1 rounded-lg'>Pay</button>
                </form>
            </div>
            {/**electricity & trash section */}
            <div className='p-2 md:flex justify-between text-white'>
                <div className='md:pl-4'>
                    <h1>Pay & check for your Electricity account</h1>
<p>
    Pay as below:
</p>
<div className='p-2 w-[200px] '>
    <button className='p-1 w-full bg-black/40 border'> <a href="https://kplc.co.ke/" target='_blank' className=' font-bold  text-white'>Pay</a> </button>
</div>
                </div>
                <div>
                    <h1>Pay & check for your Trash bin</h1>
<p>
    Pay via: 0726334744
</p>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Services