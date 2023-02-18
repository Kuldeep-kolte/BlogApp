import { HomeData } from "../Data/HomeData"
import { HomeContainer2, HomeContainer3, HomeContainer4, HomeContainer5 } from '../Data/HomeData';
import { Link } from "react-router-dom";
export function Container(props) {
    return (
        <>
            {/* Container 1 */}
            <div className="container">
                <div className="row row1">
                    <div className="col-md-7 main1 card card1">
                        <div className="box1">
                            <h2 className="card-title t1">{props.title}</h2>
                            <p className="card-text">{HomeData[0].subtitle}</p>
                        </div>
                    </div>
                    <div className="col-md-5 main2">
                        <div className="card box2 card2">
                            <h5 className="card-title t2">{HomeData[0].title}</h5>
                            <p className="card-text">{HomeData[0].subtitle}</p>
                        </div>
                        <div className="card box3 card3">
                            <h5 className="card-title t3">{HomeData[0].title}</h5>
                            <p className="card-text">{HomeData[0].subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Container2() {
    return (
        <>
            {/* Container 2 */}
            <div className="container">
                <div className="row row2">
                    <h1 style={{ marginBottom: '3%' }}><span style={{ borderBottom: '2px solid red' }}>The</span> Latest</h1>
                    {HomeContainer2.map((val) => {
                        return (
                            <>
                                <div className="col-md-4 card4">
                                    <Link to="/NextPage" className='rem'>
                                        <div className="card">
                                            <img className="card-img-top" src={val.imgsrc} alt="" />
                                            <div className="card-body">
                                                <h4 >{val.title} </h4>
                                                <p className="card-text" style={{ textDecoration: 'none' }}>{val.desc} </p>
                                                <p className="card-text"><small className="text-muted">{val.update} </small></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export function Container3() {
    return (
        <>
            {/* Container 3 */}
            <div className="container">
                <div className="row">
                    <h1 style={{ marginBottom: '3%' }}><span style={{ borderBottom: '2px solid red' }}>Latest</span> Articles</h1>
                    <div class="col-md-8">
                        {
                            HomeContainer3.map((val) => {
                                return (
                                    <>
                                        <Link to="/NextPage" className='rem re'>
                                            <div class=" mb-3">

                                                <div class="row no-gutters">
                                                    <div class="col-md-4">
                                                        <img src={val.imgsrc} class="card-img abcde" alt="..." />
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="card-body">
                                                            <h5 class="card-title">{val.title}</h5>
                                                            <p class="card-text">{val.desc} </p>
                                                            <p class="card-text"><small class="text-muted">{val.update}</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                        <hr />
                                    </>

                                )
                            })
                        }
                        <span className="material-symbols-outlined downarrow">arrow_downward</span>
                        <span style={{ fontSize: "20px" }}>Load More</span>
                    </div>
                    <div className="col-md-4 ">
                        <h4 className='adver'>Advertisement</h4>
                        <div className="div">
                            <h1><span style={{ borderBottom: '2px solid red' }}>Top</span> Posts</h1>
                            <div class="">
                                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" class="card-img abcde" alt="..." />
                                <h4>Catch wave with an Advanture Guide</h4>
                                <p class="card-text"><small class="text-muted">Travel / Aug 21 2017</small></p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export const Container4 = () => {
    return (
        <>
            {/* Container 4 */}
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="main1 card card1">
                            <div className="boxfirst">
                                <h2 className="card-title t1">Title of Vertical Gallary</h2>
                                <p className="card-text">Travel / August 21 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" mb-3">
                            <div className="row no-gutters">
                                {HomeContainer4.map((val) => {
                                    return (
                                        <>
                                            <div className="col-md-4">
                                                <img src={val.imgsrc} className="card-img abcde" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4>{val.title} </h4>
                                                    <p className="card-text"><small className="text-muted">{val.update}</small></p>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//  {/* container 5 */}
export const Container5 = () => {
    return (
        <>
            <div className="container">
                <div className="row row2">
                    <h1 className='ax'><span style={{ borderBottom: '2px solid red' }}>Latest</span> Stories</h1>
                    {HomeContainer5.map((val) => {
                        return (
                            <>
                                <div className="col-md-4 card4 ">
                                    <div className="card cards">
                                        <div className="card-body">
                                            <h4>{val.title}</h4>
                                            <p className="card-text">{val.desc}</p>
                                            <p className="card-text"><small className="text-muted">{val.update}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <h5>View More <span className="material-symbols-outlined downarrow">
                    arrow_right_alt
                </span></h5>
            </div>
        </>
    )
}