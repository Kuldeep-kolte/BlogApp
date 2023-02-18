// import React from 'react'

// export default function Food() {
//   return (
//     <div>Food</div>
//   )
// }
import React from 'react'
import { BollywoodComp } from '../Components/BollywoodComp'
import Sidebar from '../Components/Sidebar'
import { FoodData } from '../Data/FoodData'
import { FoodSidebarData } from '../Data/SidebarData'
import NavbarComp from './NavbarComp'

export default function Food() {
  return (
    <>
      <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Food</span> </h1>
            <BollywoodComp data={FoodData} />
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <Sidebar imgsrc="https://c.ndtvimg.com/2019-11/7arf7ppg_detox_625x300_12_November_19.jpg"
              title="Detox Recipe: This 3-Ingredient Amla Drink May Help You Detox This Winter Season"
              sub="Travel / Aug 21 2017"
              data={FoodSidebarData}
            />
          </div>
        </div>
      </div>

    </>
  )
}
