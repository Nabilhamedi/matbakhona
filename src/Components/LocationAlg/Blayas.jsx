import React from "react";
import djmila from "../../assets/locations/djmila.png";
import mansora from "../../assets/locations/mansora.png";
import jardin_des from "../../assets/locations/jardin_des.png";
import santa_cruz from "../../assets/locations/santa_cruz.png";
import heart from "../../assets/locations/heart.png";
import location from "../../assets/locations/location.png";
const Blayas = () => {
  return (
    <div>
      
 
      <div className="pt-20 ">
        <div className="text-center">
          <p className="text-center text-23 text-mat-orange font-IBM">هل تريد قضاء عطلتك في الجزائر ؟؟</p>
          <h1 className="text-center text-44 pb-8 font-bold  font-IBM">تعرف أشهر الوجهات السياحية</h1>
        </div>

        <div className="w-max-100 m-auto flex gap-10 justify-between mb-5">
          <div className="relative w-336">
            <div className="absolute top-6 left-5">
              <img src={heart} className="cursor-pointer" alt="" />
            </div>
            <div className="absolute bottom-8 right-8 ">
              <h1 className="font-IBM font-bold text-white text-3xl pb-2 ">
                {" "}
                سانتا كروز{" "}
              </h1>
              <div className="flex items-center justify-end gap-2">
                <p className="font-IBM text-white">سطيف</p>
                <img src={location} alt="Location_pin" />
              </div>
            </div>

            <img src={santa_cruz} className="rounded-md" alt="" />
          </div>

          <div className="relative w-336">
            <div className="absolute top-6 left-5">
              <img src={heart} className="cursor-pointer" alt="" />
            </div>
            <div className="absolute bottom-8 right-8 ">
              <h1 className="font-IBM font-bold text-white text-24 pb-2 ">
                {" "}
                حديقة التجارب{" "}
              </h1>
              <div className="flex items-center justify-end gap-2">
                <p className="font-IBM text-white">سطيف</p>
                <img src={location} alt="Location_pin" />
              </div>
            </div>

            <img src={jardin_des} className="rounded-md" alt="" />
          </div>

          <div className="relative w-336">
            <div className="absolute top-6 left-5">
              <img src={heart} className="cursor-pointer" alt="" />
            </div>
            <div className="absolute bottom-8 right-8 ">
              <h1 className="font-IBM font-bold text-white text-24 pb-2 ">
                {" "}
                مسجد المنصورة{" "}
              </h1>
              <div className="flex items-center justify-end gap-2">
                <p className="font-IBM text-white">سطيف</p>
                <img src={location} alt="Location_pin" />
              </div>
            </div>

            <img src={mansora} className="rounded-md" alt="" />
          </div>

          <div className="relative w-336">
            <div className="absolute top-6 left-5">
              <img src={heart} className="cursor-pointer" alt="" />
            </div>
            <div className="absolute bottom-8 right-8 z-10">
              <h1 className="font-IBM font-bold text-white text-28 pb-2 ">
                {" "}
                جميلة{" "}
              </h1>
              <div className="flex items-center justify-end  gap-2">
                <p className="font-IBM text-white">سطيف</p>
                <img src={location} alt="Location_pin" />
              </div>
            </div>
             
             <img src={djmila}  alt="" />
             
          </div>
          
        </div>
         <div className="text-center"><button className='py-4 px-6 ml-5 mt-8 mb-16 font-IBM font-semibold border-2 border-mat-orange hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-black hover:bg-white rounded-full bg-mat-orange text-white '>تعرف على المزيد</button></div>
        
        </div>
    </div>
  );
};

export default Blayas;
