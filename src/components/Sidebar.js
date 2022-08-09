import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Sidebar.css';


export default ({ resumeClick, homeClick, aboutClick, contactClick }) => {
    // let toggle = document.getElementById("toggler");
    // toggle.addEventListener("click", () => {
    //     let v = document.getElementById("main-menu");
    //     v.classList.toggle("vanish");
    // })
    const toggleClick = ()=>{
        console.log(document.getElementById("main-menu"));
        document.getElementById("main-menu").classList.toggle("vanish");
    }
    const handleHomeClick = ()=>{
        toggleClick();
        homeClick();
    }
    const handleResumeClick = ()=>{
        toggleClick();
        resumeClick();
    }
    const handleAboutClick = ()=>{
        toggleClick();
        aboutClick();
    }
    const handleContactClick = ()=>{
        toggleClick();
        contactClick();
    }
    return (
        <div className="wrapper">
            <div className='main-menu vanish' id="main-menu">
                <div className="pages">
                    <FontAwesomeIcon className='home-icon go-to-home' onClick={handleHomeClick} icon={faHouse} />
                    <FontAwesomeIcon className='home-icon go-to-about' onClick={handleAboutClick} icon={faIdBadge} />
                    <FontAwesomeIcon className='home-icon go-to-resume' onClick={handleResumeClick} icon={faFile} />
                    <FontAwesomeIcon className='home-icon go-to-contact' onClick={handleContactClick} icon={faAddressCard} />

                </div>
                <div className="social-media">
                    <a href="https://github.com/aniket651"><FontAwesomeIcon className='home-icon2' icon={faGithub} /></a>
                </div>
                {/* <h1>Hello World</h1> */}
            </div>
            <button className="toggler" id="toggler" type="button" onClick={toggleClick}><FontAwesomeIcon className="toggle-icon" icon={faBars} /></button>
        </div>

    )
}