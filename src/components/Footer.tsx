import { MailchimpForm } from './MailchimpForm';
import footerBg from "../assets/images/footer-bg(1).png"

// icons
import {FaInstagram} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaArrowAltCircleUp} from "react-icons/fa"

import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";


const Footer = () => {
    return (
        <Router>
        <section className='  '>
                <img src={footerBg} alt="bg"  className='  h-[100%] '/> 
                <div className='max-w-[1320px] mr-auto ml-auto mt-[-390px]'>
                    <div className='flex flex-wrap '>
                        <div className=' flex-auto w-[100%] pr-2 pl-2 '>
                         <MailchimpForm mailchimpUrl={''} mailchimpU={''} mailchimpId={''}/>
                        </div>
                        <div className=' xl:flex-auto xl:w-[50%]  text-[#fff] '>
                            <h1 className='text-5xl sm:6xl md:7xl lg:8xl'>DMT</h1>
                        </div>
                        <div className='xl:flex-auto xl:w-[50%] text-right'>
                        <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
                        before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                            <FaInstagram className="w-[20px] h-[20px]  z-[1] transition duration-300 ease-in-out text-[#fff]  hover:text-black"/> </a>
                            <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
                        before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                            <FaFacebook className="w-[20px] h-[20px] z-[1] transition duration-300 ease-in-out text-[#fff]  hover:text-black"/> </a>
                            <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
                        before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                            <FaGithub className="w-[20px] h-[20px] z-[1] transition duration-300 ease-in-out text-[#fff]  hover:text-black"/> </a>
                         <p className='font-normal text-[14px] text-[#B8B8B8] tracking-[0.5px] mt-[20px]   '>Copyright 2022. All Rights Reserved</p>
                        </div>
                <HashLink smooth to="/#Banner">   
                <button > <FaArrowAltCircleUp className=' text-[#fff] text-[45px] relative right-0 bottom-0  hover:mt-[-10px] duration-300 '/></button>
                   </HashLink>
                    </div>
                </div>
              
        </section>
        </Router>
    );
};

export default Footer;