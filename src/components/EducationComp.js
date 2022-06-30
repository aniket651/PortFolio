import { useState } from 'react';

export default (props) => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-9">{props.school}</div>
                <div className="col-3">{props.year}</div>
            </div>
            <div className="row">
                <div className="col-7">{props.degree}</div>
                <div className="col-5">{props.grades}</div>
            </div>
        </div>
    )
}

