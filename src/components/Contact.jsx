import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    

  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-11/12 h-full'>
            <div className='pb-8' data-aos='fade-down' data-aos-easing='ease-in-out'
     data-aos-duration="1200">
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:text-5xl'>Contact</p>
                <p className='py-6 md:text-xl'>Submit the from below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center' data-aos='fade-up' data-aos-easing='ease-in-out'
     data-aos-duration="1200">
                <form action="https://getform.io/f/ajjjmxya" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' required className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'/>
                    <input type="email" name='email' placeholder='Enter your email' required className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'/>
                    <textarea name="message" id="" rows='7' placeholder='Enter your message...' className='resize-none p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'></textarea>
                    <input type='submit' value="Let's talk" className='cursor-pointer text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact