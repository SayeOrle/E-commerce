import React from 'react'
import Campaign from '../Campaign/Campaign'
import Arrivals from '../Products/Arrivals'
import FProducts from '../Products/FProducts'
import Categories from '../ui/Categories'

function Shop() {
  return (
    <div className="pt-[123.99] sm:pt-[139.98px]">
        <Categories/>
        <FProducts/>
        <Campaign/>
        <Arrivals/>
    </div>
  )
}

export default Shop