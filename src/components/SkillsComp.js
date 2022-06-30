import { useState } from 'react';
import './SkillsComp.css';
import myary from '../data/Skills.json';
export default ()=>{

    const skcomp = (y) =>{
        return(
            <div key={y}  className="skill-blocks">
                {y}
            </div>
        )
    }

    // const prcomp = (x) => {
    //     return (
    //         <div className="container-fluid pr-card" key={x.id}>
    //                 <div className="name ">{x.name}</div>
    //                 <div className="tech">Tech-Stacks Used: {(x.techStacksInvolved).map(skBlocks)} </div>
    //                 <div className="description">{x.description}</div>
    //         </div>
    //     )
    // }
    const myarr = myary.map(skcomp)
    return(
        <div className="co container-fluid">
            <div className='sk-card row row-cols-lg-2 row-cols-sm-1'>
                {myarr}
            </div>
        </div>
    )
}
