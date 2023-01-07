import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarComp from './NavbarComp';
class Home extends Component {
    render() {
        return (
            <>
                
                <NavbarComp />
                {/* Container 1 */}
                <div className="container">
                    <div className="row row1">
                        <div className="col-md-7 main1 card card1">
                            <div className="box1">
                                <h5 className="card-title t1">Special title treatment</h5>
                                <p className="card-text">Travel / August 21 2017</p>
                            </div>
                        </div>
                        <div className="col-md-5 main2">
                            <div className="card box2 card2">
                                <h5 className="card-title t2">Special title treatment</h5>
                                <p className="card-text">Travel / August 21 2017</p>
                            </div>
                            <div className="card box3 card3">
                                <h5 className="card-title t3">Special title treatment</h5>
                                <p className="card-text">Travel / August 21 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container 2 */}
                <div className="container">
                    <div className="row row2">
                        <h1 style={{ marginBottom: '3%' }}><span style={{ borderBottom: '2px solid red' }}>The</span> Latest</h1>

                        <div className="col-md-4 card4">
                            <Link to="/NextPage">
                                <div className="card">
                                    <img className="card-img-top" src="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 >Joshua Tree Overnight Adventure</h4>
                                        <p className="card-text" style={{ textDecoration: 'none' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-4 card4">
                            <div className="card">
                                <img className="card-img-top" src="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=" alt="Card image cap" />
                                <div className="card-body">
                                    <h4>Joshua Tree Overnight Adventure</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card4">
                            <div className="card">
                                <img className="card-img-top" src="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=" alt="Card image cap" />
                                <div className="card-body">
                                    <h4>Joshua Tree Overnight Adventure</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container 3 */}
                <div className="container">
                    <div className="row">
                        <h1 style={{ marginBottom: '3%' }}><span style={{ borderBottom: '2px solid red' }}>Latest</span> Articles</h1>
                        <div class="col-md-8">
                            <div class=" mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" class="card-img abcde" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class=" mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" class="card-img abcde" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class=" mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" class="card-img abcde" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class=" mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" class="card-img abcde" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <div className="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" className="card-img abcde" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4>Catch wave with an Advanture Guide</h4>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" className="card-img abcde" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4>Catch wave with an Advanture Guide</h4>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" className="card-img abcde" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4>Catch wave with an Advanture Guide</h4>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="container">
                    <div className="row row2">
                        <h1 className='ax'><span style={{ borderBottom: '2px solid red' }}>Latest</span> Stories</h1>

                        <div className="col-md-4 card4 ">
                            <div className="card cards">

                                <div className="card-body">
                                    <h4>Catch wave with an Advanture Guide</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card4">
                            <div className="card cards">

                                <div className="card-body">
                                    <h4>Catch wave with an Advanture Guide</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card4">
                            <div className="card cards">

                                <div className="card-body">
                                    <h4>Catch wave with an Advanture Guide</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>View More <span className="material-symbols-outlined downarrow">
                        arrow_right_alt
                    </span></h5>
                </div>

            </>
        );
    }
}

export default Home;
