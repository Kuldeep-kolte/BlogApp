import React from 'react';
const Sidebar = (props) => {
    return (
        <>
            
                <h1 className='headofbollywood'><span style={{ borderBottom: '2px solid red' }}>Top</span> Posts</h1>
                <div className="div">
                    <div className="">
                        <img src={props.imgsrc} className="card-img abcde" alt="..." />
                        <h4>{props.title} </h4>
                        <p className="card-text"><small className="text-muted">{props.sub} </small></p>
                        <hr />
                    </div>
                </div>
                {props.data.map((val) => {
                return (
                    <>
                        <div className=" mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={val.imgsrc} className="card-img abcde" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5>{val.title} </h5>
                                        <p className="card-text"><small className="text-muted">{val.update}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
                <h4 className='adver'>Advertisement</h4>
                <hr />
          

        </>
    );
}

// export const Sidebar2 = (props) => {
//     return (
//         <>
//             {props.data.map((val) => {
//                 return (
//                     <>
//                         <div className=" mb-3">
//                             <div className="row no-gutters">
//                                 <div className="col-md-4">
//                                     <img src={val.imgsrc} className="card-img abcde" alt="..." />
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="card-body">
//                                         <h5>{val.title} </h5>
//                                         <p className="card-text"><small className="text-muted">{val.update}</small></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 )
//             })}
//         </>
//     )
// }
export default Sidebar;
