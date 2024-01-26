import React from "react";
import chkhckh from "../../assets/ByOccasions/chkhckh.png";
import coscos from "../../assets/ByOccasions/coscos.png";
import frmsa from "../../assets/ByOccasions/frmsa.png";
import ghrif from "../../assets/ByOccasions/ghrif.png";
import mhjb from "../../assets/ByOccasions/mhjb.png";
import rfis from "../../assets/ByOccasions/rfis.png";
import sapar from "../../assets/receipes by regions/saparateur.png";

import clock from "../../assets/receipes by regions/Clock.png";

import stars from "../../assets/receipes by regions/starts.png";

const ByOccsions = () => {
  return (
    <div>
      <div className="pb-16 pt-32">
        <div className="m-auto w-max-100 ">
          <p className="text-center text-23 text-mat-orange font-IBM"> تصفح </p>
          <h1 className=" text-center text-44 pb-8 font-bold  font-IBM ">
            {" "}
            الوصفات حسب الـمناطق
          </h1>
        </div>

        <div className="flex items-center justify-between w-max-100 m-auto">
          <div className="cursor-pointer ">
            <div className=" flex items-center justify-center gap-3 bg-grey hover:bg-mat-orange ease-in duration-300 hover:text-white w-232 p-3 h-16 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold "> عيد الأضحى </h1>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-center gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-220 p-3 h-16 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> عيد الفطر </h1>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-center gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-16 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> رمضان </h1>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-center gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-16 text-right font-bold rounded-full">
              <h1 className="font-IBM font-bold"> عاشوراء </h1>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-center gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-16 text-right font-bold rounded-full">
              <h1 className=" font-IBM font-bold"> رأس السنة الهجرية</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-max-100 m-auto justify-between pb-14">
          <div className="w-390 gap-6">
            <img className="pb-6 cursor-pointer" src={mhjb} alt="" />
            <div className="grid items-center text-right justify-end gap-3">
              <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
                طبق رئيسي
              </p>
              <h1 className=" text-righ font-IBM text-23 font-bold ">
                {" "}
                المحاجب{" "}
              </h1>

              <div className="text-right flex items-center gap-6">
                <img className="-mt-2" src={stars} alt="Stars" />
                <img src={sapar} alt="saparateur" />

                <div className="flex gap-2">
                  <p className="font-IBM font-regular">دقيقة ‎55</p>
                  <img src={clock} alt="clock" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-390 gap-6">
            <img className="pb-6 cursor-pointer" src={chkhckh} alt="" />
            <div className="grid items-center text-right justify-end gap-3">
              <p className="text-right  font-semibold font-IBM font-14 text-mat-orange">
                طبق رئيسي
              </p>
              <h1 className=" text-righ font-IBM text-23 font-bold ">
                {" "}
                الشخشوخة المسيلية{" "}
              </h1>

              <div className="text-righ flex items-center gap-6">
                <img src={stars} className="-mt-2" alt="Stars" />
                <img src={sapar} alt="saparateur" />

                <div className="flex gap-2">
                  <p className="font-IBM font-regular">دقيقة ‎55 </p>
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
                الكسكس{" "}
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

        <div className="flex w-max-100 m-auto justify-between pb-14">
          <div className="w-390 gap-6">
            <img className="pb-6 cursor-pointer" src={rfis} alt="" />
            <div className="grid items-center text-right justify-end gap-3">
              <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
                {" "}
                حلويات{" "}
              </p>
              <h1 className=" text-righ font-IBM text-23 font-bold ">
                {" "}
                الرفيس{" "}
              </h1>

              <div className="text-right flex items-center gap-6">
                <img className="-mt-2" src={stars} alt="Stars" />
                <img src={sapar} alt="saparateur" />

                <div className="flex gap-2">
                  <p className="font-IBM font-regular">دقيقة ‎55</p>
                  <img src={clock} alt="clock" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-390 gap-6">
            <img className="pb-6 cursor-pointer" src={ghrif} alt="" />
            <div className="grid items-center text-right justify-end gap-3">
              <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
                طبق رئيسي
              </p>
              <h1 className=" text-righ font-IBM text-23 font-bold ">
                {" "}
                البغرير{" "}
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
            <img className="pb-6 cursor-pointer" src={frmsa} alt="" />
            <div className="grid items-center text-right justify-end gap-3">
              <p className="text-right font-semibold font-IBM font-14 text-mat-orange">
                طبق رئيسي
              </p>
              <h1 className=" text-righ font-IBM text-23 font-bold ">
                {" "}
                المفرمسة{" "}
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
      </div>

      <div className="text-center pb-16"><button className='py-4 px-6 ml-5 font-IBM font-semibold border-2 border-mat-orange hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-black hover:bg-white rounded-full bg-mat-orange text-white '>تعرف على المزيد</button></div>
    </div>
  );
};

export default ByOccsions;
