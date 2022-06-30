import './Resume.css';
import Sidebar from './Sidebar';
import EducationComp from './EducationComp';
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
// const educationData = async () => {
//     const edarr = await fetch("../data/EducationData.json")
//     let data = await edarr.json();
//     return data;
// }


export default () => {
    const [componentToBeRendered, setComponentToBeRendered] = useState(<EducationComp />)
    const [data,setData] = useState([])
    const [edCompArr,setEdCompArr] = useState(data.map(arrayOfComponents))

    const renderEducation = async ()=>{
        console.log("into renderEducation")
        let response = await fetch("./EducationData.json")
        let edData = await response.json()
        console.log(edData)
        setData(edData);
        setEdCompArr(data.map(arrayOfComponents))
        setComponentToBeRendered(<EducationComp />)
    }
    const renderSkills = async ()=>{
        let response = await fetch("../data/SkillsData.json")
        let skData = await response.json()
        setData(skData);
        setComponentToBeRendered(<SkillsComp />)
    }
    const renderProjects = async ()=>{
        let response = await fetch("../data/ProjectsData.json")
        let prData = await response.json()
        setData(prData);
        setComponentToBeRendered(<ProjectsComp />)
    }
    const renderInterests = async ()=>{
        let response = await fetch("../data/EducationData.json")
        let itData = await response.json()
        setData(itData);
        setComponentToBeRendered(<InterestsComp />)
    }

    const arrayOfComponents = (mydata)=>{
        if(componentToBeRendered===<EducationComp />){
            return(
                <div className="edu" key={mydata.id}>
                    <EducationComp school={mydata.school} year={mydata.year} degree={mydata.degree} grades={mydata.grades} />
                </div>
            )
        }
        else if(componentToBeRendered===<SkillsComp />){
            return(
                <div className="skl" key={mydata.id}>
                    <SkillsComp skldata = {mydata} />
                </div>
            )
        }
        else if(componentToBeRendered===<ProjectsComp />){
            return(
                <div className="pro" key={mydata.id}>
                    <ProjectsComp name={mydata.name} techStacksInvolved={mydata.techStacksInvolved} description={mydata.description} />
                </div>
            )
        }
        return(
            <div className="edu" key={mydata.id}>
                <EducationComp school={mydata.school} year={mydata.year} degree={mydata.degree} grades={mydata.grades} />
            </div>
        )
    }


    // let edCompArr = data.map(arrayOfComponents)



    
    const arr = ["Education", "Skills", "Projects", "Interests"]
    const ResumeTopics = (x) => {
        return (
            <div key={x} className="resume-topics" id={x} onClick={()=>{
                if(x==="Education"){
                    renderEducation()
                }
                if(x==="Skills"){
                    renderSkills()
                }
                if(x==="Projects"){
                    renderProjects()
                }
                if(x==="Interests"){
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
                        <div className="submenu"></div>
                        {myarr}
                    </div>
                    <div className="col-8">
                        {edCompArr}
                        {console.log(data)}
                    </div>
                </div>

            </div>
        </div>
    )
}