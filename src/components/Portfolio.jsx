import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Portfolio1 from '../assets/E-commerce_portfolio.png'
import Portfolio2 from '../assets/Portfolio2.jpeg'
import Portfolio3 from '../assets/Portfolio3.png'
import Portfolio4 from '../assets/Portfolio4.jpeg'
import Portfolio5 from '../assets/Portfolio5.jpeg'
import Portfolio6 from '../assets/Portfolio6.jpeg'


const Portfolio = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
})


  const portfolios = [
    {
      id: 1,
      src: Portfolio1,
      demo: 'https://exclusive-ecommerce-shop.vercel.app/index.html',
      code: 'https://github.com/JubairHossain-280/Exclusive'
    },
    {
      id: 2,
      src: Portfolio2,
      demo: ' ',
      code: ' '
    },
    {
      id: 3,
      src: Portfolio3,
      demo: ' ',
      code: ' '
    },
    {
      id: 4,
      src: Portfolio4,
      demo: ' ',
      code: ' '
    },
    {
      id: 5,
      src: Portfolio5,
      demo: ' ',
      code: ' '
    },
    {
      id: 6,
      src: Portfolio6,
      demo: ' ',
      code: ' '
    },
    
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-11/12 h-full pt-20'>
        <div className='pb-8 ' data-aos='fade-down' data-aos-easing='ease-in-out'
     data-aos-duration="1200">
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:text-5xl'>Portfolio</p>
          <p className='py-6 md:text-xl'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-12 md:px-0' data-aos='fade-up' data-aos-easing='ease-in-out'
     data-aos-duration="1200">

          {portfolios.map(({id, src, demo, code}) => (

          <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-3/4'/>
            <div className='flex justify-center items-center'>
              <a href={demo} target='_blank' className='w-1/2 px-6 py-3 flex justify-center duration-200 hover:scale-105'>Demo</a>
              <a href={code} target='_blank' className='w-1/2 px-6 py-3 flex justify-center duration-200 hover:scale-105'>Code</a>
            </div>
          </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio