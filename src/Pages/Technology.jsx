import React from 'react'
import NavbarComp from './NavbarComp';
import { TechnologyData } from '../Data/TechnologyData';
import Sidebar from '../Components/Sidebar';
import { TechnologySidebarData } from '../Data/SidebarData';

const Technology = () => {
  // const data = props.data;
  return (
    <>
      <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Technolgy</span> </h1>
            {TechnologyData.map((val) => {
              return (<>
                <div className=" mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={val.imgsrc} className="card-img abcde" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{val.title}</h5>
                        <p class="card-text">{val.sub} </p>
                        <p class="card-text"><small class="text-muted">{val.update}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>)
            })}
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <Sidebar imgsrc="https://i.gadgets360cdn.com/large/spacex_reuters_1556260807227.JPG?downsize=950:*"
              title="Elon Musk's SpaceX Faces $175,000 Fine for Failing to Submit Starlink Safety Data"
              sub="Travel / Aug 21 2017"
              data={TechnologySidebarData}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Technology;