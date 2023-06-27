/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// images
import meter1 from "../assets/images/meter1(1).svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

const Skilles = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



    return (
        <section id='Skilles' className='pb-[50px] relative'>
            <div className='max-w-[390px] sm:max-w-[570px] md:max-w-[720px] lg:max-w-[940px] xl:max-w-[1140px] 2xl:max-w-[1320px] mr-auto ml-auto'>
                <div className='flex flex-wrap'>
                    <div className='flex-auto w-[100%]'>
                        <div className='bg-[#151515] rounded-[64px] text-center py-[60px] px-[50px] mt-[-100px]'>
                            <h2 className='text-[45px] font-bold'>Skills</h2>
                            <p className='text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] mt-[14px] mb-[75px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="w-[80%] my-0 mx-auto">
                            <div className="item">
                                <img className='w-[50%] mr-auto mb-[15px] ml-auto ' src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img className='w-[50%] mr-auto mb-[15px] ml-auto ' src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img className='w-[50%] mr-auto mb-[15px] ml-auto ' src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img className='w-[50%] mr-auto mb-[15px] ml-auto ' src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                        </div>

                    </div>

                </div>

            </div>
            <img className="absolute top-[28%] bottom-0 w-[40%] z-[-4] " src={colorSharp} alt="Image" />
        </section>
    );
};

export default Skilles;