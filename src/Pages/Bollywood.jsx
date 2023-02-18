import React from 'react'
import { BollywoodComp } from '../Components/BollywoodComp'
import Sidebar from '../Components/Sidebar'
import NavbarComp from './NavbarComp'
import { SidebarData } from '../Data/SidebarData'
import { BollywoodData } from '../Data/BollywoodData'
export default function Bollywood() {
  return (
    <>
      <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Bollywood</span> </h1>
            <BollywoodComp data = {BollywoodData}/>
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <Sidebar imgsrc="https://imgeng.jagran.com/images/2022/dec/Salman-Khan-Birthday-Special1672107798410_m.jpg"
              title="Salman Khan Birthday Special: 7 Reasons Why Bollywood’s Bhaijaan Is Called A Man With Golden Heart"
              sub="Travel / Aug 21 2017"
              data={SidebarData}
            />
          </div>
        </div>
      </div>
    </>
  )
}
