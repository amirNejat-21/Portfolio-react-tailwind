/* eslint-disable react/style-prop-object */
import Typed from 'react-typed';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// image
import bg from "../assets/images/banner-bg(1).png"
import headerImg from "../assets/images/dev-ed-wave.png";

// icons
import {FaArrowCircleRight} from "react-icons/fa"
const Banner = () => {

  
   


    return (
        <section id='Banner'  className=''>
               <img src={bg} alt="bg"  className=' bg-cover bg-no-repeat bg-center h-[120vh] w-[100%] '/>  
              <div className='max-w-[390px] sm:max-w-[570px] md:max-w-[720px] lg:max-w-[940px] xl:max-w-[1140px] 2xl:max-w-[1320px] mr-auto ml-auto absolute top-[250px] left-[20px]  '>
                <div className='flex flex-wrap '>
                    <div className=' xl:flex-auto xl:w-[58.3%]  md:flex-initial md:w-[50%] sm:flex-initial sm:w-[100%]'>
                        <TrackVisibility>
                        {({ isVisible }: { isVisible: boolean }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className='font-bold tracking-[0.8px] py-[8px] px-[10px] bg-gradient-to-r from-pink-500 via-purple-600 border border-solid border-color: rgb(255, 255, 255, 0.5) text-xl mb-[16px] inline-block'>
                                Welcome to my Portfolio
                            </span>
                            <h1 className='text-[65px] font-bold tracking-[0.8px] leading-none mb-[20px] block'>
                            <Typed
                strings={[
                   ` Hi! I'm dmt Frontend Developer`,
                    `Hi! I'm dmt React Developer`,
                    `Hi! I'm dmt Web design`]}
                    typeSpeed={180}
                    backSpeed={50}
                    loop />
                            </h1>
                            <p className='text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] w-[90%] '>
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='text-white font-bold text-[20px] mt-[60px] tracking-[0.8px] flex items-center group'>Let’s Connect <FaArrowCircleRight className='group-hover:ml-6 text-[25px] ml-[10px]  duration-300 ease-in-out leading-none'/></button>
                        </div>}
                        </TrackVisibility>
                    </div>
                    <div className=' xl:flex-auto xl:w-[41.3%]  md:flex-initial md:w-[50%] sm:flex-initial sm:w-[100%]' >
                    <TrackVisibility>
                     {({ isVisible }: { isVisible: boolean }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt='avatar' className='animate-[updown_3s_linear_infinite] w-[526px] ml-5' />
                        </div>}
                        </TrackVisibility>
                    </div>

                </div>

              </div>
        </section>
    );
};

export default Banner;