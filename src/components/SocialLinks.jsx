import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })

    const socialLinks = [
        {
            id: 1,
            child: <>Linkedin <FaLinkedin size={30}/></>,
            href: 'https://www.linkedin.com/in/jubair-hossain-805550341/',
            target: '_blank',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: <>GitHub <FaGithub size={30}/></>,
            href: 'https://github.com/JubairHossain-280',
            target: '_blank',
        },
        {
            id: 3,
            child: <>Mail <HiOutlineMail size={30}/></>,
            href: 'mailto:jubaircse280@gmail.com',

        },
        {
            id: 4,
            child: <>Resume <BsFillPersonLinesFill size={30}/></>,
            href: '/CV of Jubair Hossain Shakib.pdf',
            download: true,
            style: 'rounded-br-md',
        }
    ]



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-10' data-aos='fade-right' data-aos-easing='ease-in-out'
    data-aos-duration="1200">
        <ul>

            {socialLinks.map(({id, child, href, download, style, target}) => (

            <li key={id} className={`flex justify-between items-center w-40 h-10 px-4 text-white bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-in-out ${style}` } >
                <a href={href} target={target} download={download} rel="noreferrer" className='flex justify-between items-center w-full text-xl font-medium'>
                    {child}
                </a>
            </li>

            ))}

        </ul>
    </div>
  )
}

export default SocialLinks