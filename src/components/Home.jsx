import React from 'react'
import HeroImage from '../assets/hero-img.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen'>
       <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full pb-4 pt-32 md:flex-row md:pt-12'>
        <div className='flex flex-col justify-center h-full mb-8'>
            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white'>
                I'm a Front-End Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>with a focus on building user-friendly, responsive interfaces using HTML, CSS, and JavaScript. I enjoy creating visually engaging, interactive experiences that work seamlessly across devices and browsers.
            </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white font-semibold cursor-pointer w-fit px-6 py-3 flex justify-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 md:my-2'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="Profile-img" className='rounded-2xl w-2/3 mx-auto md:w-full'/>
        </div>
       </div>
    </div>
  )
}

export default Home