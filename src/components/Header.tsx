/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
// icons
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import {FaBars,FaTimes} from "react-icons/fa";


const NavBar = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }
 
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    
    <Router>
      <nav className= {scrolled ? " fixed w-full top-[0px] z-50  duration-[0.32s] ease-in-out p-0 bg-[#121212]  " : "py-[18px] fixed w-full top-0 z-50  duration-[0.32s] ease-in-out   "}>
        <div className='flex flex-wrap items-center justify-between max-w-[380px] sm:max-w-[630px] md:max-w-[720px] lg:max-w-[940px] xl:max-w-[1140px] 2xl:max-w-[1320px] pr-2 pl-2   mr-auto ml-auto'>
          <span className='w-[9%] mr-4   text-sm sm:text-base md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-bold '>
           DMT 
          </span>
          
          <div className="      md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 ">
            <FaBars className={`fill-current  text-[25px] sm:text-[30px] ${isOpen ? "hidden" : "block"}`}/>
            <FaTimes className={`fill-current text-[25px] sm:text-[30px] ${isOpen ? "block" : "hidden"}`}/>
          </button>
        </div>
       
        <div
          className={` flex-grow md:flex md:items-center md:w-auto   ${isOpen ? "block " : "hidden"}`}
        >
          <div className=" flex  flex-col md:flex-row lg:ms-auto  first-letter: text-sm    justify-center items-center ">
             <HashLink smooth to="/#Banner" className=" w-full" >
             <a href='https'  className={activeLink === 'home' ? 'text-[#fff] font-normal tracking-wider px-[25px] text-lg ' : 'block text-gray-400 font-normal tracking-wider px-[25px] text-lg'} onClick={() => onUpdateActiveLink('home')}>Home</a>
            </HashLink>
             <HashLink smooth to="/#Skilles" className=" w-full">
            <a href='https' className={activeLink === 'Skills' ? 'text-[#fff] font-normal tracking-wider px-[25px] text-lg' : 'text-gray-400 font-normal tracking-wider px-[25px] text-lg'}  onClick={() => onUpdateActiveLink('Skills')}>Skills</a>
             </HashLink>
            <HashLink smooth to="/#Projects" className=" w-full">
            <a href='https' className={activeLink === 'Projects' ? 'text-[#fff] font-normal tracking-wider px-[25px] text-lg' : 'text-gray-400 font-normal tracking-wider px-[25px] text-lg'}  onClick={() => onUpdateActiveLink('Projects')}>Projects</a>
            </HashLink>

      </div>
          <span className='flex items-center py-2 '>
            <div className=' inline-block ml-[14px] '>
            <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
            before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                <FaInstagram className="text-[#fff]  hover:text-black  w-[20px] h-[20px]  z-[1]  duration-300 ease-in-out  "/> </a>
                <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
            before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                <FaFacebook className="w-[20px] h-[20px] z-[1]  duration-300 ease-in-out text-[#fff]  hover:text-black"/> </a>
                <a href="https" className='w-[42px] h-[42px] bg-gray-100 bg-opacity-10 inline-flex rounded-full mr-[6px] items-center justify-center leading-none border border-solid border-color: rgb(255, 255, 255, 0.5) 
            before:content-[""] before:w-[42px] before:h-[42px] before:absolute before:bg-white before:rounded-full before:transform before:scale-0 before:duration-300   before:ease-in-out before:hover:scale-100'>
                <FaGithub className="w-[20px] h-[20px] z-[1]  duration-300 ease-in-out text-[#fff]  hover:text-black"/> </a>
            </div>
            <HashLink smooth to="/#Contact">
            <button className="font-bold text-[#fff] hover:text-[#121212] border border-solid border-white py-[18px] px-[34px] text-lg ml-[18px] relative bg-transparent  duration-300 ease-in-out
            hover:before:content-[''] hover:before:w-[100%] hover:before:h-[100%] hover:before:absolute   
             before:content-[''] before:w-[0%] before:h-[100%] before:absolute before:bg-white before:left-0 before:top-0 before:z-[-1] before:duration-300   before:ease-in-out
            "><span className='z-[1]'>Let’s Connect</span></button>
            </HashLink>
            
        </span>
      </div>
    
     
    </div>
  </nav>




</Router>
  )
}

export default NavBar;