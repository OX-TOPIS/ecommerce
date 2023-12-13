import React from 'react'
import payday1 from '../../assets/images/payday1.png'
import payday2 from '../../assets/images/payday2.png'

const Payday = () => {
  return (
    <div className='bg-gradient-to-t from-bggra1 to-bggra2 flex p-4 md:p-0 items-center'>
    


    <div className="md:w-1/2">
        <img src={payday1} alt="" className='hidden md:block'/>
    </div>

    <div className=" md:w-1/2 flex flex-col items-center">
        <div className="flex flex-col items-center md:items-start">
            <img src={payday2} alt="" className='w-3/5 md:w-4/5' />
            <p className='md:m-5 my-5 text-center md:text-left h2'>Spend minimal $100 get 30% offvoucher code for your next purchase</p>
            <button className='btn hover:bg-White w-36 mx-5'>Shop Now</button>
        </div>
    </div>


    
    </div>
  )
}

export default Payday
