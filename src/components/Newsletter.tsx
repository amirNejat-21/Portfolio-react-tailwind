import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

interface NewsletterProps {
  status: any;
  message: any;
  onValidated: (data: { EMAIL: string }) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    
      <div className="bg-white rounded-[55px] text-black py-[85px]  mb-[80px] mt-[150px] md:mt-[80px] lg:mt-[0px] xl:mt-[-140px] "> 
          <div className='flex flex-wrap '>
            <div className=' flex-auto w-[100%] md:flex-auto md:w-[41%] '>
              <h3 className="font-bold tracking-[0.5px] leading-[1.2em] ml-10 mb-10 ">Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </div>
            <div className=' flex-auto w-[100%] md:flex-auto md:w-[59%]'>
              <form onSubmit={handleSubmit}>
                  <div className="bg-white p-[5px] m-2 rounded-[20px] relative z-0 flex items-center 
                  before:content-[''] before:bg-gradient-to-r from-pink-700 to-indigo-900 before:rounded-[20px] before:absolute before:z-[-1] before:top-[-1px] before:left-[-1px] before:bottom-[-1px] before:right-[-1px]
                  after:content-[''] after:bg-white after:rounded-[20px] after:absolute after:z-[-1] after:top-[0] after:left-[0] after:bottom-[0] after:right-[0]">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-black font-medium bg-transparent border-[0px] px-[15px] "  type="email"  placeholder="Email Address" />
                    <button className="bg-gradient-to-r from-pink-700 to-indigo-900 py-[20px] px-[65px] text-white  first-letter:font-medium tracking-[0.5px] rounded-[18px]  " type="submit">Submit</button>
                  </div>
              </form>
            </div>
          </div>
      </div>
  );
};