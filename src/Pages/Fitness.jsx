// import React from 'react'

// export default function Fitness() {
//   return (
//     <div>Fitness</div>
//   )
// }
import React from 'react'
import { BollywoodComp } from '../Components/BollywoodComp'
import Sidebar from '../Components/Sidebar'
import { FitnessData } from '../Data/FitnessData'
import { FitnessSidebarData } from '../Data/SidebarData'
import NavbarComp from './NavbarComp'

export default function Fitness() {
  return (
    <>
      <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Fitness</span> </h1>
            <BollywoodComp data={FitnessData} />
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <Sidebar imgsrc="https://images.indianexpress.com/2023/01/Weight-training-tips-for-women.jpg"
              title="Women, here are five tips to keep in mind when lifting weights, according to an expert"
              sub="Travel / Aug 21 2017"
              data={FitnessSidebarData}
            />
          </div>
        </div>
      </div>

    </>
  )
}
