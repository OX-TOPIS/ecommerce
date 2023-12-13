import React from 'react'
import young1 from '../../assets/images/young1.png'
import young2 from '../../assets/images/young2.png'
import { SlArrowRight } from "react-icons/sl";
const newarr = [
    {id:1, newar: young1, name: 'Best sellers'},
    {id:2, newar: young2, name: 'All Under $40'}
]

const YoungFavourite = () => {
    return (
        <div>
          <h1 className='title'>Young’s Favourite</h1>
          <div className="grid md:mx-16  md:grid-cols-2">
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

export default YoungFavourite
