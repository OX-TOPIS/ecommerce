import React from 'react'
import company1 from '../../assets/images/company1.png'
import company2 from '../../assets/images/company2.png'
import company3 from '../../assets/images/company3.png'
import company4 from '../../assets/images/company4.png'
import company5 from '../../assets/images/company5.png'
const compamyLogo = [
    {id:1, company: company1},
    {id:2, company: company2},
    {id:3, company: company3},
    {id:4, company: company4},
    {id:5, company: company5}
]
const Company = () => {
  return (
    <div className='bg-Yellow'>
        <div className="flex items-center justify-around flex-wrap gap-4 py-5">
            {
                compamyLogo.map(({id, company})=>(
                    <div className="" key={id}><img src={company} alt="" /></div>
                ))
            }
      </div>
    </div>
  )
}

export default Company
