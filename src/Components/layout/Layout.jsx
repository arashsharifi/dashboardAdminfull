import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CgBolt } from "react-icons/cg";

import { MdDashboard } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";

import logo from "../../assets/images/f-logo.png";

// import { Menus } from "./assets/dummy-data";

const Menus = [
  { id: 1, title: "داشبرد", icon: <MdDashboard />, link: "/" },
  { id: 2, title: "چک های مد نظر", icon: <CiChat1 />, link: "/" },
  { id: 3, title: "کاربران", icon: <CiUser />, gap: true, link: "/users" },
  { id: 4, title: "تقویم", icon: <SlCalender />, link: "/" },
  { id: 5, title: "جستوجو", icon: <CiSearch />, link: "/" },
  { id: 6, title: "تجزیه و تحلیل", icon: <IoMdAnalytics />, link: "/" },
  {
    id: 7,
    title: "فایل ها",
    icon: <FaFileSignature />,
    gap: true,
    link: "/users",
  },
  { id: 8, title: "تنظیمات", icon: <IoMdAnalytics />, link: "/users" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 970) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex rtl font-iransans">
        <div
          className={` h-[100vh] ${
            open ? "w-16" : "w-72"
          } bg-dark-purple text-white relative duration-300 flex flex-col`}
        >
          <div
            onClick={() => setOpen((preve) => !preve)}
            className="bg-white absolute left-[-14px] top-9 w-11 border-2 border-dark-purple p-2 rounded-full flex items-center justify-center cursor-pointer"
          >
            {open ? (
              <IoIosArrowForward className="text-black text-xl" />
            ) : (
              <IoIosArrowBack className="text-black text-xl" />
            )}
          </div>
          <div
            className={`flex items-center gap-3 p-3 duration-500  
           
          `}
          >
            <div
              className={`w-[50px] duration-500 ${
                open && "rotate-[360deg] scale-0 w-0"
              }`}
            >
              <img className="w-full h-full" src={logo} alt="nooot" />
            </div>
            <h1
              className={`text-white origin-left font-medium  duration-300 text-sm ${
                open && "scale-0"
              }`}
            >
              به داشبرد ادمین خوش آمدید
            </h1>
          </div>
          <div className="flex p-2">
            <ul className="flex flex-col gap-2 ml-4  w-full">
              {Menus.map((menu) => (
                <li className="w-full" key={menu.id}>
                  <Link
                    className={`flex items-center gap-3 text-xl cursor-pointer duration-300 hover:bg-gray-600 p-2 rounded-md ${
                      menu.gap ? "mt-9" : "mt-2"
                    }`}
                    to={menu.link}
                  >
                    <div className={`${open ? "text-3xl" : "text-xl"}`}>
                      {" "}
                      {menu.icon}
                    </div>
                    <span
                      className={`${
                        open && "hidden "
                      } origin-left duration-200`}
                    >
                      {" "}
                      {menu.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full overflow-hidden h-[100vh] overflow-scroll  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
