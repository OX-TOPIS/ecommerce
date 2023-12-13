import React from 'react'
import Banner from './Banner'
import Company from './Company'
import NewArrivals from './NewArrivals'
import Payday from './Payday'
import YoungFavourite from './YoungFavourite'
import Products from './Products'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <Company/>
      <NewArrivals/>
      <Payday/>
      <YoungFavourite/>
      <Products/>
     </div>
  )
}

export default Home
