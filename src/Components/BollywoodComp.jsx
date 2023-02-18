// import { BollywoodData } from "../Data/BollywoodData"
export const BollywoodComp = (props) => {
    return (
        <>
            {props.data.map((val) => {
                return (
                    <>
                        
                        <div className=" mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={val.imgsrc} className="card-img abcde" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{val.title}</h5>
                                        <p class="card-text">{val.sub} </p>
                                        <p class="card-text"><small class="text-muted">{val.update} </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />                   
                    </>
                )
            })}

        </>
    )
}