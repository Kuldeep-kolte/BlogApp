import React from 'react'
import NavbarComp from './NavbarComp';

const Technology = () =>{
  // const data = props.data;
  return (
    <>
    <NavbarComp />
      <div className="container bollywoodcontainer">
        <div className="row">
          <div className="col-md-8">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Technolgy</span> </h1>
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://images.indianexpress.com/2022/12/top-five-tech-trends-2022.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Wordle, ChatGPT and the collapse of cryptocurrency: The biggest tech trends of 2022</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://images.indianexpress.com/2022/12/fitbit-6d6.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Apple’s Medications Reminder to Fitbit Sense 2’s body response sensor, the overlooked tech features of 2022</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://images.indianexpress.com/2022/12/2023-apps-collage1.jpg" class="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">New Year 2023: The Android apps to help you gain control over your digital life</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/oct/WhatsApp1666781088545_m.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">WhatsApp Outage: IT Ministry Probes Hacking Angle, Seeks Report From Meta</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/oct/Drive_Blog_header_2880x1200_111666935973998_m.05.21.max-1000x1000.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Google To Increase Individual Workspace Storage From 15GB To 1 TB Soon; To..</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/nov/samsung1667720243406_m.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Samsung May Launch Galaxy S23 Series In First Week Of February 2023</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="data:image/jpeg;base64,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" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">VLC Media Player Returns To India After 8 Months As Govt Lifts Ban |..</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <span className="material-symbols-outlined downarrow">arrow_downward</span>
            <span style={{ fontSize: "20px" }}>Load More</span>
          </div>
          <div className="col-md-4 ">
            <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Top</span> Posts</h1>
            <div className="div">
              <div className="">
                <img src="https://images.indianexpress.com/2022/12/Twitter-Pixabay-1.jpg" className="card-img abcde" alt="..." />
                <h4>Twitter restores suicide prevention feature</h4>
                <p className="card-text"><small className="text-muted">Travel / Aug 21 2017</small></p>
                <hr />
              </div>Name
            </div>
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/dec/klim-musalimov-pneUVZ1pPvs-unsplash1670477728184_m.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6>Apple Announces End-To-End Encryption To iCloud Backups, Photos And More |..</h6>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/dec/Untitled%20design%20(31)1671512614734_m.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6>Google Introduces New Feature To Let Users Read Prescriptions With 'Sloppy..</h6>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://imgeng.jagran.com/images/2022/dec/Youtube1671599588296_m.jpg" className="card-img abcde" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6>YouTube's Creative Entrepreneurs Contributed Over Rs 10,000 Crore To..</h6>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className='adver'>Advertisement</h4>


            <hr />
          </div>
        </div>
      </div>

    </>
  )
}
export default Technology;