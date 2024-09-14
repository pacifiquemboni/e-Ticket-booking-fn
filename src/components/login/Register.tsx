// UpdateModal.jsx
import React, { ReactNode } from 'react';
import bgimage from '../../assets/images/homebg.png';
import google from '../../assets/images/google.png';
import eye from '../../assets/images/eye.png';

const Register: React.FC = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative overflow-hidden "
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-white w-full md:w-1/3  m-auto mt-4 border-spacing-3 rounded border-primary">
          
          <div>
            <form action="" className="flex flex-col mx-8 my-8 md:mx-16 md:my-16 text-xs gap-3">
            <div className="text-center">
            <p className="text-[#03315D] text-xl font-bold">
              Get Started Now
            </p>
          </div>
            <label htmlFor="Names"> Names </label>
              <input
                type="text"
                placeholder="Enter your Names"
                className="bg-[#F9F9F9] h-10 border border-primary rounded"
              />
              <label htmlFor="email"> Email </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-[#F9F9F9] h-10 border border-primary rounded"
              />

              <label htmlFor="Password"> Password:</label>
              <div className='relative'>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="bg-[#F9F9F9] h-10 border w-full border-primary rounded"
                />
                <img src={eye} alt="" className='absolute right-1 top-2'/>
              </div>
              <label htmlFor="conf-Password">Confirm Password:</label>
              <div className='relative'>
                <input
                  type="text"
                  placeholder="confirm your password"
                  className="bg-[#F9F9F9] h-10 border w-full border-primary rounded"
                />
                <img src={eye} alt="" className='absolute right-1 top-2'/>
              </div>

              <button className="bg-primary text-white h-7 rounded">
                Register
              </button>
              <div className="flex justify-between items-center">
                <hr className="w-24 rounded bg-primary p-0" />

                <p className="text-xs">Or Continue with</p>
                <hr className="w-24 rounded bg-primary p-0 " />
              </div>
              <button className="bg-primary h-7 text-white flex justify-center rounded">
                <img src={google} alt="" />
              </button>
              <p className="text-center">
                Arledy have an account,
                <span className="text-[#2FF62B]">Login</span>
              </p>
              <p className="text-center">
                By signing in or creating an account, you agree with our Terms
                and Conditions and Privacy Statement
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
