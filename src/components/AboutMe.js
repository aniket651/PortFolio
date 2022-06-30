import './About.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



export default ()=>{
    return(
        <div className="About-me container-fluid">
            <div className="about-content mx-auto row ">
                <div className="col-4 mycol-1">
                    <div className="title">About me</div>
                </div>
                <div className="col-8 mycol-2 ">
                    <div className="main-content mx-auto">
                        <p>
                        An undergraduate pursuing BTECH in Electronics and Communication Engineering (graduating in 2024).
                        <br />
                        Interested in field of competitive Programming and Web-Development
                        Proficient in C++, Data Structures and Algorithms
                        Familiar with Html, CSS, JavaScript, React.js
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}