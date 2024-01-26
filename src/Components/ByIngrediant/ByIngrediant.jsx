import React from "react";
import coscos from "../../assets/ByOccasions/coscos.png";
import ajin from "../../assets/byingrediants/ajin.png";
import mesfof from "../../assets/byingrediants/msfof.png";
import jijel from "../../assets/byingrediants/jijel.png";

import besbas from "../../assets/byingrediants/besbas.png";
import coscoos from "../../assets/byingrediants/cosocs.png";
import tomato from "../../assets/byingrediants/tomat.png";
import potato from "../../assets/byingrediants/potato.png";
import jaj from "../../assets/byingrediants/jaj.png";
import left from "../../assets/byingrediants/LEFT.png";
import right from "../../assets/byingrediants/Right.png";
import Line from '../../assets/regions/Line.png';

import sapar from "../../assets/receipes by regions/saparateur.png";

import clock from "../../assets/receipes by regions/Clock.png";

import stars from "../../assets/receipes by regions/starts.png";

const ByIngrediants = () => {
  return (
    <div>
      <div className="m-auto w-max-100">
        <h1 className=" text-center text-44 pb-8 font-bold font-IBM">
          {" "}
          ماذا لديك في الثلاجة؟{" "}
        </h1>
        <div className="h-90 w-max-100 grid items-center mb-12 rounded-md bg-mat-bg-color">
          <p className="text-center font-18 font-normal  ">
            اختر عدّة مكوّنات واحصل على أفكار جديدة لطبخها
          </p>
        </div>
      </div>

      <div className=" mb-12">
        <div className="flex items-center justify-between w-max-100 m-auto">
          <div className="cursor-pointer">
            <img src={right} alt="" />
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange ease-in duration-300 hover:text-white w-48 p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> العجينة المورقة </h1>
              <img src={Line} alt="" />
              <img src={ajin} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-40 p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> البسباس </h1>
              <img src={Line} alt="" />
              <img src={besbas} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-40 p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> طماطم </h1>
              <img src={Line} alt="" />
              <img src={tomato} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-40 p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> الكسكس </h1>
              <img src={Line} alt="" />
              <img src={coscoos} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-40 p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold">الدجاج </h1>
              <img src={Line} alt="" />
              <img src={jaj} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white w-40 ease-in duration-300  p-3 h-64 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> البطاطا </h1>
              <img src={Line} alt="" />
              <img src={potato} alt="" />
            </div>
          </div>

          <div className="cursor-pointer">
            <img src={left} alt="" />
          </div>
        </div>
      </div>

  <div className="flex items-center justify-between m-auto w-max-100 mb-14">
        <div className="w-390 gap-6">
          <img className="pb-6 cursor-pointer" src={jijel} alt="" />
          <div className="grid items-center text-right justify-end gap-3">
            <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
              طبق رئيسي
            </p>
            <h1 className=" text-righ font-IBM text-23 font-bold ">
              {" "}
              الكسكس بالسمك{" "}
            </h1>

            <div className="text-right flex items-center gap-6">
              <img src={stars} className="-mt-2" alt="Stars" />
              <img src={sapar} alt="saparateur" />

              <div className="flex gap-2">
                <p className="font-IBM font-regular">دقيقة ‎55</p>
                <img src={clock} alt="clock" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-390 gap-6">
          <img className="pb-6 cursor-pointer" src={mesfof} alt="" />
          <div className="grid items-center text-right justify-end gap-3">
            <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
              طبق رئيسي
            </p>
            <h1 className=" text-righ font-IBM text-23 font-bold ">
              {" "}
              الـمسفوف{" "}
            </h1>

            <div className="text-righ flex items-center gap-6">
              <img src={stars} className="-mt-2" alt="Stars" />
              <img src={sapar} alt="saparateur" />

              <div className="flex gap-2">
                <p className="font-IBM font-regular">دقيقة ‎55</p>
                <img src={clock} alt="clock" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-390 gap-6">
          <img className="pb-6 cursor-pointer" src={coscos} alt="" />
          <div className="grid items-center text-right justify-end gap-3">
            <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
              طبق رئيسي
            </p>
            <h1 className=" text-righ font-IBM text-23 font-bold ">
              {" "}
              الكسكس بالخضروات{" "}
            </h1>

            <div className="text-righ flex items-center gap-6">
              <img src={stars} className="-mt-2" alt="Stars" />
              <img src={sapar} alt="saparateur" />

              <div className="flex gap-2">
                <p className="font-IBM font-regular">دقيقة ‎55</p>
                <img src={clock} alt="clock" />
              </div>
            </div>
          </div>
        </div>
      </div>
       
      <div className="text-center"><button className='py-4 px-6 ml-5  font-IBM font-semibold border-2 border-mat-orange hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-black hover:bg-white rounded-full bg-mat-orange text-white '>تعرف على المزيد</button></div>
    </div>
  );
};

export default ByIngrediants;
