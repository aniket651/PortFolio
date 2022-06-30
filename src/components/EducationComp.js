import { useState } from 'react';
import './EducationComp.css';
import myary from '../data/EducationData.json';
export default ()=>{
    const edcomp = (x) => {
        return (
            <div className="container-fluid ed-card" key={x.id}>
                <div className="row">
                    <div className="col-9 name lefty">{x.school}</div>
                    <div className="col-3 year righty">{x.year}</div>
                </div>
                <div className="row">
                    <div className="col-7 degree lefty">{x.degree}</div>
                    <div className="col-5 grades righty">{x.grades}</div>
                </div>
            </div>
        )
    }
    const myarr = myary.map(edcomp)
    return(
        <div className="co">
            {myarr}
        </div>
    )
}
