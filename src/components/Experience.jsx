import React from 'react'
import HTML5 from '../assets/icons8-html5 (3).svg'
import CSS3 from '../assets/icons8-css3.svg'
import JS from '../assets/icons8-js.svg'
import react from '../assets/icons8-react-js.svg'
import Tailwind from '../assets/icons8-tailwind-css.svg'
import Bootstrap5 from '../assets/icons8-bootstrap.svg'
import Figma from '../assets/icons8-figma.svg'
import GitHub from '../assets/icons8-github (1).svg'

const Experience = () => {

    const experiences = [
        {
          id: 1,
          src: HTML5,
          child: <>HTML</>,
            style: 'shadow-orange-500'
        },
        {
          id: 2,
          src: CSS3,
          child: <>CSS</>,
            style: 'shadow-blue-500'
        },
        {
          id: 3,
          src: JS,
          child: <>JS</>,
            style: 'shadow-yellow-500'
        },
        {
          id: 4,
          src: react,
          child: <>React</>,
            style: 'shadow-blue-600'
        },
        {
          id: 5,
          src: Tailwind,
          child: <>Tailwind CSS</>,
            style: 'shadow-sky-400'
        },
        {
          id: 6,
          src: Bootstrap5,
          child: <>Bootstrap</>,
            style: 'shadow-purple-500'
        },
        {
          id: 7,
          src: Figma,
          child: <>Figma</>,
            style: 'shadow-pink-500'
        },
        {
          id: 8,
          src: GitHub,
          child: <>GitHub</>,
            style: 'shadow-gray-500'
        },
      ]




  return (
    <div name='experience' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-11/12 md:w-full h-full '>
        <div className='pb-8 '>
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:text-5xl'>Experience</p>
          <p className='py-6 md:text-xl'>These are the technologies I've worked with</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 md:gap-8'>

          {experiences.map(({id, src, child, style}) => (

          <div key={id} className={`flex flex-col justify-center items-center sm:py-3 shadow-md rounded-lg overflow-hidden duration-500 hover:-translate-y-3 ${style}`}>
            <img src={src} alt="" className='w-full h-1/2 sm:h-full md:w-1/2 rounded-md '/>
            <div>
                <p className='font-bold'>{child}</p>
            </div>
          </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience