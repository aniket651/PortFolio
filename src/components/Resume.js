import './Resume.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import studentimage from "../svg-images/student-g6fc0d00bd_1280.png";
import { useState } from 'react';

const ProjectsComp = () => {
    return (
        <div className="container-fluid">

        </div>
    )
}

const InterestsComp = () => {
    return (
        <div className="container-fluid">

        </div>
    )
}

const SkillsComp = () => {
    return (
        <div className="container-fluid">

        </div>
    )
}
const educationData = async () => {
    const edarr = await fetch("../data/EducationData.json")
    let data = await edarr.json();
    return data;
}

const EducationComp = async () => {
    const educationArray = await educationData();
    
    const edcomp = (x) => {
        // const a = x.id
        // const b = x.school
        // const c = x.year
        // const d = x.degree
        // const e = x.grades
        return (
            <div key = {x.id } className="container-fluid ">
                <div className="row">
                    <div className="col-9">{x.school}</div>
                    <div className="col-3">{x.year}</div>
                </div>
                <div className="row">
                    <div className="col-7">{x.degree}</div>
                    <div className="col-5">{x.grades}</div>
                </div>
            </div>
        )
    }
    const eArray = educationArray.map(edcomp)
    return (
        <div className="container-fluid">
            {eArray}
        </div>
        
    )
}


export default () => {
    const [componentToBeRendered, setComponentToBeRendered] = useState(<EducationComp />)
    const arr = ["Education", "Skills", "Projects", "Interests"]
    const ResumeTopics = (x) => {
        return (
            <div key={x} className="resume-topics" id={x} onClick={(event) => {
                console.log(event.target);
                //chage document using this event.target as dom element
                if (x == "Education") {
                    setComponentToBeRendered(<EducationComp />)
                }
                else if (x == "Skills") {
                    setComponentToBeRendered(<SkillsComp />)
                }
                else if (x == "Projects") {
                    setComponentToBeRendered(<ProjectsComp />)
                }
                else if (x == "Interests") {
                    setComponentToBeRendered(<InterestsComp />)
                }
            }}>
                {x}
            </div>
        )
    }
    const myarr = arr.map(ResumeTopics)
    return (
        <div className="Resume">
            {/* <Grads /> */}
            <div className="main-heading"><h1>Resume</h1></div>
            <div className="container-fluid parent-row-1">
                <div className="row row-1">
                    <div className="col-4">
                        <div className="submenu"></div>
                        {myarr}
                    </div>
                    <div className="col-8">
                        {componentToBeRendered}
                    </div>
                </div>

            </div>
        </div>
    )
}