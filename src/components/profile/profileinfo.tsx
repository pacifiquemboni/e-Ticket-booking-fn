/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import profile from '../../assets/images/profile.png';
import removeprofile from '../../assets/images/removeimage.png';
import upload from '../../assets/images/upload.png';

const ProfileInfo: React.FC = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const handleIsProfile = () => {
    setIsProfile(true);
    setIsChangePassword(false);
  };
  const handleIsChangePassword = () => {
    setIsProfile(false);
    setIsChangePassword(true);
  };
  return (
    <>
      <div className="h-auto w-full mx-5 md:mx-24 md:w-11/12 bg-white rounded rounded-bl-2xl rounded-tr-2xl bottom-5 border">
        <h1 className="pt-5  text-primary text-1xl">Profile Information</h1>
        <div className="flex gap-4">
          <img src={profile} alt="" className="w-20 h-20 rounded-full border" />
          <div>
            <div>
              <p>Pacifique mbonimana</p>
              <div className="flex pt-2 flex-col md:flex-row">
                <div className="w-80">
                  <p className="text-[#797979]">role</p>
                  <p>Client</p>
                </div>
                <div className="w-80">
                  <p className="text-[#797979]">Phone Number</p>
                  <p>078*****01</p>
                </div>
                <div className="w-80">
                  <p className="text-[#797979]">Email</p>
                  <p>pac******@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-10 pt-16 mx-5">
            <p onClick={handleIsProfile} className="cursor-pointer">
              Prifile
            </p>
            <p onClick={handleIsChangePassword} className="cursor-pointer">
              Change Password
            </p>
          </div>
          {isProfile && (
            <div className="mx-5 ">
              <hr className="w-16 rounded bg-primary h-1" />
              <p className="pt-10">Profile Details</p>
              <div className="flex flex-col md:flex-row">
                <div className="flex  gap-4">
                  <div className="relative w-20 h-20">
                    <img
                      src={profile}
                      alt=""
                      className=" w-20 h-20 rounded-full border"
                    />
                    <img
                      src={removeprofile}
                      alt=""
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-[#F9F9F9] flex p-1">
                      <img src={upload} alt="" />
                      Upload Image
                    </button>
                    <p>Png or Jpg file</p>
                  </div>
                </div>
                <div className="ml-1 ">
                  <form action="" className="flex flex-col w-72 lg:ml-24 gap-3">
                    <label htmlFor="email"> Email </label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />

                    <label htmlFor="Names"> Names:</label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />

                    <label htmlFor="Phone Number">Phone Number</label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />
                    <div className="flex justify-between">
                      <button className="bg-[#F9F9F9] p-2 w-28 rounded border">
                        Discard
                      </button>
                      <button className="bg-primary p-2 text-white rounded">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {isChangePassword && (
            <div className="mx-5 bottom-5">
              <hr className="w-24 rounded bg-primary h-1 ml-20" />
              <p className="pt-10">Change Password</p>
              <div className="flex flex-col md:flex-row">
                <div className="ml-1 ">
                  <form action="" className="flex flex-col w-72 lg:ml-24 gap-3">
                    <label htmlFor="Old Password"> Old Password </label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />

                    <label htmlFor="New Password"> New Password:</label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />

                    <label htmlFor="Re-enter Password">Re-enter Password</label>
                    <input type="text" className="bg-[#F9F9F9] h-10 border" />
                    <div className="flex justify-between">
                      <button className="bg-[#F9F9F9] p-2 w-28 rounded border">
                        Discard
                      </button>
                      <button className="bg-primary p-2 text-white rounded">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
