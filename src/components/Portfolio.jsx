import React from 'react'
import Portfolio1 from '../assets/Portfolio1.jpeg'
import Portfolio2 from '../assets/Portfolio2.jpeg'
import Portfolio3 from '../assets/Portfolio3.png'
import Portfolio4 from '../assets/Portfolio4.jpeg'
import Portfolio5 from '../assets/Portfolio5.jpeg'
import Portfolio6 from '../assets/Portfolio6.jpeg'

const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      src: Portfolio1,
    },
    {
      id: 2,
      src: Portfolio2,
    },
    {
      id: 3,
      src: Portfolio3,
    },
    {
      id: 4,
      src: Portfolio4,
    },
    {
      id: 5,
      src: Portfolio5,
    },
    {
      id: 6,
      src: Portfolio6,
    },
    
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-11/12 md:w-full h-full pt-20'>
        <div className='pb-8 '>
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:text-5xl'>Portfolio</p>
          <p className='py-6 md:text-xl'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({id, src}) => (

          <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full'/>
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio