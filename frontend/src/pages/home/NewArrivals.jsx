import React from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import { SlArrowRight } from "react-icons/sl";
const newarr = [
    {id:1, newar: new1, name: 'Hoodies'},
    {id:2, newar: new2, name: 'Dress'},
    {id:3, newar: new3, name: 'T-Shirt'}
]
const NewArrivals = () => {
  return (
    <div>
      <h1 className='title'>New Arrivals</h1>
      <div className="grid xl:grid-cols-3 md:mx-16  md:grid-cols-2">
        {
            newarr.map((item)=>(
                <div className="px-8 py-4" key={item.id}>
                    <img src={item.newar} alt="" className='w-full'/>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className='h1'>{item.name}</h1>
                            <p className='p'>Explore Now!</p>
                        </div>
                        {/* Link Rounter */}
                        <SlArrowRight className=''/>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default NewArrivals
