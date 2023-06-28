import 'animate.css';
import TrackVisibility from 'react-on-screen';
// images
import contactImg from "../assets/images/contact-img(1).svg"


const Contact = () => {
    return (
        <section id='Contact' className='bg-gradient-to-r from-pink-600 to-indigo-800 pt-[60px] pb-[200px]'>
            <div className='max-w-[1320px] mr-auto ml-auto'>
                <div className='items-center flex flex-wrap'>
                    <div className='flex-auto w-[50%]'>
                <TrackVisibility>
              {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__backInLeft w-[92%]" : ""} src={contactImg} alt='' />  
                     }
                     </TrackVisibility>
                    </div>
                    <div className='md:flex-auto md:w-[50%]'>
                        <h2 className='text-[45px] font-bold mb-[30px] '>Get In Touch</h2>
                        <form>
                            <div className='flex flex-wrap '>
                                <div className='px-1 flex-auto w-[100%] sm:flex-auto sm:w-[50%] xl:flex-auto xl:w-[50%]  '>
                                    <input type="text" placeholder='First Name' className=' focus:bg-[#fff] w-full bg-[#FFFFFF1A] border border-solid border-[#FFFFFF80] rounded-[20px] text-black mb-[8px] py-[18px] px-[26px] font-medium text-[18px] duration-300 ease-in-out '  />
                                </div>
                                <div className='px-1 flex-auto w-[100%] sm:flex-auto sm:w-[50%] xl:flex-auto xl:w-[50%]'>
                                    <input type="text" placeholder='Last Name' className=' focus:bg-[#fff] w-full bg-[#FFFFFF1A] border border-solid border-[#FFFFFF80] rounded-[20px] text-black mb-[8px] py-[18px] px-[26px] font-medium text-[18px] duration-300 ease-in-out '  />
                                </div>
                                <div className='px-1 flex-auto w-[100%] sm:flex-auto sm:w-[50%] xl:flex-auto xl:w-[50%]'>
                                    <input type="text" placeholder='Email Address' className=' focus:bg-[#fff] w-full bg-[#FFFFFF1A] border border-solid border-[#FFFFFF80] rounded-[20px] text-black mb-[8px] py-[18px] px-[26px] font-medium text-[18px] duration-300 ease-in-out '  />
                                </div>
                                <div className='px-1 flex-auto w-[100%] sm:flex-auto sm:w-[50%] xl:flex-auto xl:w-[50%]'>
                                    <input type="text" placeholder='phone' className=' focus:bg-[#fff] w-full bg-[#FFFFFF1A] border border-solid border-[#FFFFFF80] rounded-[20px] text-black mb-[8px] py-[18px] px-[26px] font-medium text-[18px] duration-300 ease-in-out '  />
                                </div>
                                <div className='px-1 xl:flex-auto xl:w-[100%] flex-auto w-[100%]'>
                                    <textarea rows={6}  placeholder='Message' className='focus:bg-[#fff]  w-full bg-[#FFFFFF1A] border border-solid border-[#FFFFFF80] rounded-[20px] text-black mb-[8px] py-[18px] px-[26px] font-medium text-[18px] duration-300 ease-in-out '></textarea>
                                    <button className="font-bold text-black hover:text-[#121212] border border-solid border-white py-[15px] px-[45px] text-lg  relative bg-white  "><span className='z-[1]'>Send</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;