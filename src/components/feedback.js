import React, { useEffect, useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
const Feedback = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the visibility state based on the scroll position
      setIsVisible(window.pageYOffset > 200); // Adjust the value according to your preference
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  };
  return (
    <div name='feedback' className='p-2 bg-stone-900'>
        {/**feedback section */}
        <div>
            <h1 className='text-2xl font-bold text-lime-500 text-center'>Feedback</h1>
            <form className='flex flex-col justify-center items-center gap-2 text-center p-2' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" 
            method="post">
                <label className='text-white' htmlFor="">Name:
                    <input name='name' className='border bg-transparent outline-none p-1 ml-1'
                    type="text" 
                    placeholder='Enter Name' />
                    </label>
                <label className='text-white' htmlFor="">Message:
                    <input name='message' className='border bg-transparent outline-none p-1 ml-1'
                     type="text" 
                     placeholder='Enter Message' />
                    </label>
<button className='border bg-transparent font-bold text-green-400 p-1' >Submit</button>
            </form>
        </div>
        <div>
            <FaArrowCircleUp className='text-white cursor-pointer font-bold' size={25} onClick={scrollToTop}/>
        </div>
    </div>
  )
}

export default Feedback