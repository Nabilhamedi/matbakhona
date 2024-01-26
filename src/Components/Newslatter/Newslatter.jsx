import React from 'react'
import woman from '../../assets/newlatter images/Woman.png'
import ilustration from '../../assets/newlatter images/ilustration.png'

const Newslatter = () => {
  return (
    <div>
       <div className='flex items-center relative'>
         <div className='bg-mat-bg-color h-464 w-max-100 mx-auto grid items-center relative rounded-32 mt-24 mb-20'>
            <div className='text-right pr-24'>
              
              <div className='mb-12 '>
              <h1 className='font-IBM font-bold text-44 mb-3'>اشترك في نشرتنا الاخبارية</h1>
             <p className='font-IBM font-regular text-23 text-black-75'>تفضل بالانضمام إلى عائلتنا الرقمية واحصل على أحدث الأخبار<br /> والمستجدات مباشرة في صندوق بريدك</p>    
              </div>
             

           

            <div className='flex justify-end items-center '>

                <div className='relative flex justify-end items-center'>

                <input className='text-right rounded-full w-568 h-70 pr-6' type="text" placeholder='أدخل بريدك الالكتروني...'/>
                <button className='h-14 w-32 absolute left-2 font-IBM font-semibold border-2 border-mat-orange hover:border-2 ease-in-out duration-300 hover:border-mat-orange hover:text-black hover:bg-white rounded-full bg-mat-orange text-white '> اشترك الأن </button>

                </div>
                
            </div>

            </div> 

            <div className='absolute bottom-0 left-40'>

              <img src={woman}  alt="" />
         
            </div>

            <div className='absolute bottom-14 left-0' >
              <img src={ilustration}  alt="" />
            </div>

        </div>
          
        
       </div>
    </div>
  )
}

export default Newslatter

