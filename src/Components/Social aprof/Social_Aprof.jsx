import React from "react";

import Circle from "../../assets/Social_aprof icons/Circled_Play.png";
import Gallery from "../../assets/Social_aprof icons/Gallery.png";
import Reading_online from "../../assets/Social_aprof icons/Read_Online.png";
import Tableware from "../../assets/Social_aprof icons/Tableware.png";
import saparator from "../../assets/Social_aprof icons/saparator.png";

const Social_Aprof = () => {
  return (
    <div className=" m-auto flex items-center justify-between h-48 bg-bg-color my-16">
      <div className="w-max-100 m-auto flex items-center justify-between h-48">
        <div className="text-right flex items-center gap-3 ">
          <div className="">
            <h1 className="text-28 font-bold "> +69 </h1>
            <p className="font-IBM text-black-600 font-regular text-20">فيديو تعليمي</p>
          </div>
          <img src={Circle} alt="" />
        </div>

        <div className="align-middle">
          <img src={saparator} alt="" />
        </div>

        <div className="text-right flex items-center gap-3">
          <div>
            <h1 className="text-28 font-bold">+1520</h1>
            <p className="font-IBM text-black-600 font-regular text-20">صورة توضيحية </p>
          </div>

          <img src={Gallery} alt="" />
        </div>

        <div>
          <img src={saparator} alt="" />
        </div>

        <div className="text-right flex items-center gap-3">
          <div>
            <h1 className="text-28 font-bold "> +89,500 </h1>
            <p className="font-IBM text-black-600 font-regular text-20">متصفح في اليوم</p>
          </div>
          <img src={Reading_online} alt="" />
        </div>

        <div className="">
          <img src={saparator} alt="" />
        </div>

        <div className="text-right flex items-center gap-3">
          <div>
            <h1 className="text-28  font-bold "> +253 </h1>
            <p className="font-IBM text-black-600 font-regular text-20">وصفة تقليدية</p>
          </div>
          <img src={Tableware} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Social_Aprof;
