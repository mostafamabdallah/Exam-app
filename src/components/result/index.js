import React from "react";
const Result = () =>{
    const search = new URLSearchParams(window.location.search)
    return <div className="row justify-content-center align-content-center" style={{height:'100vh'}}>
            <div className="col-6 ">
                <h1 style={{textAlign:"center"}}>You score {search.get('score')}%</h1>
            </div>
    </div>
}
export default Result;