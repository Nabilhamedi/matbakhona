import React from 'react'
import Hero_img from "../../assets/hero_img.jpg";

const Hero = () => {
  return (
    <div>

      <section className='container flex flex-wrap md:flex-row items-center justify-between w-max-100 m-auto  '>

        <div className='cursor-zoom-in'>
            <img src={Hero_img} alt="Hero_img"/>
        </div>

        <div className='-mt-14'>
            <h1 className='text-right text-69 font-IBM font-bold leading-tight my-10'> اكتشف جمال المطبخ<br /> <span className='text-mat-orange'> الجزائري </span> الأصيل </h1>
             
            <p className='text-right text-lg font-IBM leading-relaxed text-black-75 '>تذوق تنوع المأكولات الجزائرية واستمتع بجمال السياحة, اكتشف المطبخ  <br />الجزائري بوصفات تحتفي بالتقاليد و بمكونات أصيلة، مع رحلة لاستكشاف  <br />الأماكن السياحية التي تعكس تراث وجمال الجزائر</p>
            
            <div className='text-right'>
               <button className='py-4 px-6 ml-5 mt-8 font-IBM font-semibold border-2 hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-white hover:bg-mat-orange rounded-full border-mat-orange '> اكتشف الأماكن السياحية </button>
               <button className='py-4 px-6 ml-5 mt-8 font-IBM font-semibold border-2 border-mat-orange hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-black hover:bg-white rounded-full bg-mat-orange text-white'>تعرف عليها الأن</button>
            </div>
            
        </div>

      </section>

    </div>
  )
}

export default Hero
