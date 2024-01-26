import React from 'react'
import Line from '../../assets/regions/Line.png';
import desert from '../../assets/regions/desert.png';
import north from '../../assets/regions/north.png';
import west from '../../assets/regions/west.png';
import east from '../../assets/regions/east.png';
import middle from '../../assets/regions/middle.png';
import rchta from '../../assets/receipes by regions/rchta.png'
import berkoks from '../../assets/receipes by regions/berkoks.png'
import ziton from '../../assets/receipes by regions/ziton.png'
import clock from '../../assets/receipes by regions/Clock.png'
import sapar from '../../assets/receipes by regions/saparateur.png'
import stars from '../../assets/receipes by regions/starts.png'

import Circle_orange from '../../assets/receipes by regions/Circle-orange.png'
import Circle_black from '../../assets/receipes by regions/Circle.png'

import line_between from '../../assets/receipes by regions/line_between.png'



const ByRegions = () => {
  return (
    
  <div>

    <div className=' pb-16'>

        <div className='m-auto w-max-100 '>
            <p className='text-center text-23 text-mat-orange font-IBM'> تصفح </p>
            <h1 className=' text-center text-44 pb-8 font-bold  font-IBM '> الوصفات حسب الـمناطق</h1>
        </div>

        <div className='flex items-center justify-between w-max-100 m-auto'>

        <div className='cursor-pointer'>
            <div className='flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange ease-in duration-300 hover:text-white w-232 p-3 h-64 text-right font-bold rounded-full'>
                <h1 className='font-IBM font-bold'> المنطقة الصحراوية </h1>
                <img src={Line} alt="" />
                <img src={east} alt="" />
            </div>
        </div>

        <div className='cursor-pointer'>
            <div className='flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-220 p-3 h-64 text-right font-bold rounded-full'>
                <h1 className='font-IBM font-bold'> المنطقة الغربية </h1>
                <img src={Line} alt="" />
                <img src={west} alt="" />
            </div>
        </div>

        <div className='cursor-pointer'>
            <div className='flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-64 text-right font-bold rounded-full'>
                <h1 className='font-IBM font-bold'> المنطقة الوسطى </h1>
                <img src={Line} alt="" />
                <img src={middle} alt="" />
            </div>
        </div>

        <div className='cursor-pointer'>
            <div className='flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-64 text-right font-bold rounded-full'>
                <h1 className='font-IBM font-bold'> المنطقة الشرقية </h1>
                <img src={Line} alt="" />
                <img src={desert} alt="" />
            </div>
        </div>

        <div className='cursor-pointer'>
            <div className='flex items-center justify-end gap-3 bg-grey hover:bg-mat-orange hover:text-white ease-in duration-300 w-225 p-3 h-64 text-right font-bold rounded-full'>
                <h1 className='font-IBM font-bold'>المنطقة الساحلية</h1>
                <img src={Line} alt="" />
                <img src={north} alt="" />
            </div>
        </div>


        </div>
    </div>

    <div className='flex w-max-100 m-auto justify-between pb-14' >

         <div className='w-390 gap-6'>
            <img className='pb-6 cursor-pointer' src={rchta} alt="" />
            <div className='grid items-center text-right justify-end gap-3'>

                   <p className='text-right font-semibold font-IBM font-14 text-mat-orange'>طبق رئيسي</p>
                   <h1 className=' text-righ font-IBM text-23 font-bold '> الرشتة العاصيمية </h1>

                <div className='text-right flex items-center gap-6'>

                <img className='-mt-2' src={stars} alt="Stars" />
                <img src={sapar} alt="saparateur" />

                    <div className='flex gap-2'>

                      <p className='font-IBM font-regular'>دقيقة ‎55</p>
                      <img src={clock} alt="clock" />
                      
                    </div>
                    
                </div>
            </div>
         </div>

      

      
         <div className='w-390 gap-6'>
            <img className='pb-6 cursor-pointer' src={berkoks} alt="" />
            <div className='grid items-center text-right justify-end gap-3'>

                   <p className='text-right font-semibold font-IBM font-14 text-mat-orange'>طبق رئيسي</p>
                   <h1 className=' text-righ font-IBM text-23 font-bold '> بركوكس بالخضرة </h1>

                <div className='text-righ flex items-center gap-6'>

                <img src={stars} className='-mt-2' alt="Stars" />
                <img src={sapar} alt="saparateur" />

                    <div className='flex gap-2'>

                      <p className='font-IBM font-regular'>دقيقة ‎55</p>
                      <img src={clock} alt="clock" />
                      
                    </div>
                    
                </div>
            </div>
         </div>


        <div className='w-390 gap-6'>
            <img className='pb-6 cursor-pointer' src={ziton} alt="" />
            <div className='grid items-center text-right justify-end gap-3'>

                   <p className='text-right font-semibold font-IBM font-14 text-mat-orange'>طبق رئيسي</p>
                   <h1 className=' text-righ font-IBM text-23 font-bold '> طاجين الزيتون</h1>

                <div className='text-righ flex items-center gap-6'>

                <img src={stars} className='-mt-2' alt="Stars" />
                <img src={sapar} alt="saparateur" />

                    <div className='flex gap-2'>

                      <p className='font-IBM font-regular'>دقيقة ‎55</p>
                      <img src={clock} alt="clock" />
                      
                    </div>
                    
                </div>
            </div>
        </div>
    
    </div>
     
     <div className='w-max-100 m-auto flex items-center place-content-between'>
        
        <img className='absolute -z-50 w-max-100' src={line_between} alt="" />

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_black} alt="" />
          <p className='font-IBM font-medium'>سكيكدة</p>
        </div>

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_black} alt="" />
          <p className='font-IBM font-medium'>الطارف</p>
        </div>

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_black} alt="" />
          <p className='font-IBM font-medium'>جيجل</p>
        </div>

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_black} alt="" />
          <p className='font-IBM font-medium'>مستغانم</p>
        </div>

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_black} alt="" />
          <p className='font-IBM font-medium '>عنابة</p>
        </div>

        <div className='grid w-14 h-14 text-center gap-2 cursor-pointer'>
          <img src={Circle_orange} alt="" />
          <p className='font-bold text-mat-orange'>العاصمة</p>
        </div>
        
        
     </div>



    </div>
  )
}

export default ByRegions
