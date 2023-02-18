// import React from 'react'

// export default function Hollywood() {
//   return (
//     <div>Hollywood</div>
//   )
// }
import React from 'react'
import { BollywoodComp } from '../Components/BollywoodComp'
import Sidebar from '../Components/Sidebar'
import { HollywoodData } from '../Data/HollywoodData'
import { HollywoodSidebarData } from '../Data/SidebarData'
import NavbarComp from './NavbarComp'

export default function Hollywood() {
  return (
    <>
      <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Hollywood</span> </h1>
            <BollywoodComp data={HollywoodData} />
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <Sidebar imgsrc="https://www.hollywoodreporter.com/wp-content/uploads/2022/11/2060A_0070_v0962.1283K.jpg"
              title="Avatar The Way of Water box office Day 9:"
              sub="Travel / Aug 21 2017"
              data={HollywoodSidebarData}
            />
          </div>
        </div>
      </div>
    </>
  )
}
