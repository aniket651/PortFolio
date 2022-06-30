import { useState } from 'react';
import './ProjectsComp.css';
import myary from '../data/Projects.json';
export default ()=>{

    const skBlocks = (y) =>{
        return(
            <div className="skill-blocks">
                {y}
            </div>
        )
    }

    const prcomp = (x) => {
        return (
            <div className="container-fluid pr-card" key={x.id}>
                    <div className="name ">{x.name}</div>
                    <div className="tech">Tech-Stacks Used: {(x.techStacksInvolved).map(skBlocks)} </div>
                    <div className="description">{x.description}</div>
            </div>
        )
    }
    const myarr = myary.map(prcomp)
    return(
        <div className="co">
            {myarr}
        </div>
    )
}
