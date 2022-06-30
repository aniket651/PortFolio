import './Resume.css';
import Sidebar from './Sidebar';
import EducationComp from './EducationComp.js';
import ProjectsComp from './ProjectsComp.js';
import InterestsComp from './InterestsComp.js';
import SkillsComp from './SkillsComp.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import studentimage from "../svg-images/student-g6fc0d00bd_1280.png";
import { useState } from 'react';

// let rendringElement = <EducationComp />;

// const ProjectsComp = () => {
//     return (
//         <div className="container-fluid">

//         </div>
//     )
// }

// const InterestsComp = () => {
//     return (
//         <div className="container-fluid">

//         </div>
//     )
// }

// const SkillsComp = () => {
//     return (
//         <div className="container-fluid">

//         </div>
//     )
// }
// const educationData = async () => {
//     const edarr = await fetch("../data/EducationData.json")
//     let data = await edarr.json();
//     return data;
// }


export default () => {

    const [rendringElement, setRendringElement] = useState(<EducationComp />)
    const renderEducation = () => {
        setRendringElement(<EducationComp />);
    }
    const renderSkills = () => {
        setRendringElement(<SkillsComp />);
    }
    const renderProjects = () => {
        setRendringElement(<ProjectsComp />);
    }
    const renderInterests = () => {
        setRendringElement(<InterestsComp />);
    }

    // const arr = ["Education", "Skills", "Projects", "Interests"]
    const arr = ["Education", "Skills", "Projects"]
    const ResumeTopics = (x) => {
        return (
            <div key={x} className="resume-topics" id={x} onClick={() => {
                if (x === "Education") {
                    renderEducation()
                }
                if (x === "Skills") {
                    renderSkills()
                }
                if (x === "Projects") {
                    renderProjects()
                }
                if (x === "Interests") {
                    renderInterests()
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
                        {/* <div className="submenu"></div> */}
                        {myarr}
                    </div>
                    <div className="col-8">
                        { rendringElement }
                    </div>
                </div>

            </div>
        </div>
    )
}