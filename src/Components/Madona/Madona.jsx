import React from 'react'
import timgad from '../../assets/Madona/timgad.png';
import keskas from '../../assets/Madona/keskas.png';
import hotel from '../../assets/Madona/hotel.png';

const Madona = () => {
  return (
    <div>
        <h1 className='text-center font-bold text-44 mb-10'>الـمدونة</h1>
        <div className=' w-max-100 mx-auto flex items-center justify-between mb-20'>
        
        <div>
          <div className='text-center relative w-390 '>
            <img src={hotel} alt="" />
            <div className='pt-7 text-center'>
                <p className=' pb-2 font-IBM font-medium text-mat-orange text-16 '> جنة الضيافة </p>
                <h1 className='font-IBM font-bold text-20'>افضل 5 فنادق اربع نجوم في الجزائر</h1>
            </div>
         </div>
      </div>

      <div>
         
          
         <div className='text-center relative w-390 '>
            <img src={keskas} alt="" />
            <div className='pt-7 text-center'>
                <p className='font-IBM pb-2 font-medium text-mat-orange text-16 '> أصالة الذوق </p>
                <h1 className='font-IBM font-bold text-20'>تعرف على تاريخ الكسكس الجزائري</h1>
            </div>
         </div>

      </div>

      <div>
         
          
         <div className='text-center relative w-390 '>
            <img src={timgad} alt="" />
            <div className='pt-7  text-center'>
                <p className='font-IBM pb-2 font-medium text-mat-orange text-16 '>رحلة إلى التاريخ</p>
                <h1 className='font-IBM  font-bold text-20'>افضل 10 معالـم أثرية يمكنك زيارتها في الجزائر</h1>
            </div>
         </div>

      </div>
        </div>
       
    </div>
  )
}

export default Madona
