import React from "react";
import logo_footer from "../../assets/footer/footer_logo.png";
import fb from "../../assets/footer/fb.png";
import ig from "../../assets/footer/ig.png";
import pin from "../../assets/footer/pin.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-footer">
      <div className="pb-5 flex justify-between mx-auto w-max-100 h-400 pt-20">
        
        <div className="text-right ">
          <h1 className="text-23 font-IBM pb-2 text-white font-bold"> تابعنا عبر</h1>
          <div className="pt-4 flex justify-end items-center gap-6 ">
            <img src={fb} alt="" />
            <img src={pin} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>

        <div className="text-right flex flex-col gap-2 ">
          <h1 className="text-23 font-IBM pb-4 text-white font-bold">تواصل معنا</h1>
          <h3 className="text-16 font-IBM text-white font-normal" > اتصل بنا </h3>
          <h3 className="text-16 font-IBM text-white font-normal" > من نحن </h3>
          <h3 className="text-16 font-IBM text-white font-normal" > الجديد </h3>
        </div>


        <div className="flex flex-col gap-2 text-right ">
          <h1 className="text-23 font-IBM pb-4 text-white font-bold"> روابط مهمة </h1>
          <h3  className="text-16 font-IBM text-white font-normal"> التوظيف </h3>
          <h3 className="text-16 font-IBM text-white font-normal"> سياسة الخصوصية </h3>
          <h3 className="text-16 font-IBM text-white font-normal"> شروط الاستخدام </h3>
          
        </div>

        <div className="text-right flex flex-col gap-2 ">
          <h1 className="text-23 font-IBM pb-4 text-white font-bold"> روابط مختصرة </h1>
          <h3 className="text-16 font-IBM text-white font-normal"> الـمدونة </h3>
          <h3 className="text-16 font-IBM text-white font-normal "> الاطباق الرئيسية </h3>
          <h3 className="text-16 font-IBM text-white font-normal "> مقبلات </h3>
          <h3 className="text-16 font-IBM text-white font-normal "> حلويات </h3>
        </div>

        <div className=" text-right">
          <div className="pb-4">
          <img className=" float-right " src={logo_footer} alt="" />
          </div>
          <br />
          <br />
          
        
          <p className="text-16 font-IBM leading-7 text-white font-normal ">
            نحن رفاق الطهي ورحّالة الأذواق، يسرّنا أن <br />
            نرحب بكم في عالمنا المفعم بالطعم والجمال. <br /> انضموا إلينا
            لاستكشاف عبق التقاليد ورونق <br /> السياحة في أرضنا الجزائرية
            الساحرة.
          </p>

        </div>
      </div>
      <hr className="pb-5 w-max-100 mx-auto border-mat-orange" />
      <div className="pb-5 text-center">
        <h4 className="text-16 font-IBM text-white font-normal"><span className="text-mat-orange">©</span> مطبخنا 2024 - تم تطويره بواسطة Anatomy Innovations</h4>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
