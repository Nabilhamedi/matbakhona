import React from "react";
import "../../../src/index.css";
import Logo_light from "../../../src/assets/Icons/Logo.png";
import heart from "../../../src/assets/Icons/heart.png";
import support from "../../../src/assets/Icons/support.png";
import notification from "../../../src/assets/Icons/notification.png";
import profile from "../../../src/assets/Icons/profile.png";

import fb from "../../../src/assets/Icons/Facebook.png";
import ig from "../../../src/assets/Icons/Instagram.png";
import pin from "../../../src/assets/Icons/Pinterest.png";


import ALG from "../../../src/assets/Icons/ALg.png";

const Navbar = () => {
  return (
    <div>
      {/* Social media icons */}
      
      <div className="w-max-100 m-auto flex justify-between mt-4 mb-4">

        <div className="flex items-center ">
          <p className="text-right text-md font-IBM font-bold leading-relaxed text-black"> اختر اللغة التي تناسبك </p>
          <img src={ALG} className="mt-2 cursor-pointer	" alt="ALG"/>
        </div>
  
        <div className="flex items-center gap-4">

          <img src={fb} className="" alt="fb"/>
          <img src={pin} className="" alt="pin"/>
          <img src={ig} className="" alt="ig"/>

        </div>

      </div>

      
         <hr className="w-max-100 m-auto pt-6"/>
         
      <div className="flex items-center justify-between w-max-100 m-auto sticky">
        {/* icons */}
        <div className="flex gap-2 items-center">
          <div className="pr-8 cursor-pointer	">
            <img src={profile} className="h-15 w-15" alt="" srcset="" />
          </div>

          <div className="flex gap-4 items-center ">
            <img src={notification} className="h-44 w-44" alt="" srcset="" />
            <img src={heart} className="h-44 w-44" alt="" srcset="" />
            <img src={support} className="h-44 w-44" alt="" srcset="" />
          </div>
        </div>

        {/* search */}
        <div>
          <input
            type="search"
            className="p-3 w-800 h-52 text-right border-2 border-mat-orange border-solid rounded-3xl	"
            placeholder="اكتب وصفة او مكون...ن"
          />
        </div>

        {/* Logo */}
        <div className="cursor-pointer	">
          <img src={Logo_light} alt="Logo" />
        </div>
      </div>
      <span className="pb-6">‎  </span>
      <hr className="w-max-100 m-auto pt-6"/>

      <div className="w-max-100 m-auto">
        <ul className="flex items-center justify-between">
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300 " href="#">
              تواصل معنا
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300" href="#">
              من نحن؟
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300" href="#">
              الجديد
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300" href="#">
              المدونة
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300 " href="#">
              افكار للـمطبخ
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300" href="#">
              الـمناطق
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300 " href="#">
              الـمناسبات
            </a>
          </li>
          <li>
            <a className="font-IBM font-bold hover:text-mat-orange ease-in-out duration-300 " href="#">
              الوجبات
            </a>
          </li>
        </ul>
      </div>
      <div className="pb-8">‎  </div>
    </div>
  );
};

export default Navbar;
