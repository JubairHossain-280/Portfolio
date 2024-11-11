import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
  })


  return (
    <div name='about' className='w-full text-white bg-gradient-to-b from-gray-800 to-black h-full pt-20 md:h-screen md:pt-0'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-11/12 h-full '>
        <div className='pb-8' data-aos="fade-down" data-aos-easing='ease-in-out'
     data-aos-duration="1200">
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:text-5xl' >About</p>
        </div>
        
        <div data-aos='fade-up' data-aos-easing='ease-in-out'
     data-aos-duration="1200">
          <p className='mt-3 md:text-xl md:mt-10' >I am a front-end developer with a passion for crafting visually appealing and highly functional user interfaces. My work centers on creating responsive designs that provide a seamless experience across all devices, from desktops to mobile screens. Proficient in HTML, CSS, and JavaScript, I build the core structure, style, and interactive elements that define a website’s front end. I am working on frameworks and libraries like React,Angular, and Vue.js for smooth and fast development.</p>

          <br />

          <p className='md:text-xl'>I am a CSE student at National Polytechnic Collage. My dream is to be a Software Engineer. So, i'm continuously learning new technologies . I like programming and software development. I've expertise in programming languages like JavaScript, Python, Java etc.</p>
        </div>
      </div>
    </div>
  )
}

export default About