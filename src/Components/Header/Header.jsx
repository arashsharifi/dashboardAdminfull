import React from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../../src/assets/images/f-logo.png";
import user from "../../assets/images/user-icon.png";
import Typewriter from "typewriter-effect";
export default function Header() {
  return (
    <div className="bg-gray-50 flex items-center justify-between p-4 px-10 shadow-lg font-iransans ">
      <div className="flex  w-[90%] md:w-[50%]  gap-2 items-center">
        <div className="w-14">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
        <Typewriter
          options={{
            strings: ["شرکت Fardvisor", "تحلیل کسب و کار"],
            autoStart: true,
            loop: true,
            delay: 400,
          }}
        />
      </div>
      <div className=" hidden md:flex items-center gap-2 bg-transparent border border-gray-500 rounded-md p-2">
        <CiSearch />
        <input
          className="bg-transparent outline-0 p-1 rtl"
          type="text"
          placeholder="...سرچ کردن "
        />
      </div>
      <div className="w-12 duration-200 hover:scale-110 cursor-pointer">
        <img className="w-full h-full" src={user} alt="nooot" />
      </div>
    </div>
  );
}
