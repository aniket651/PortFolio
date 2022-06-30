import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

import './Sidebar.css';


export default ({resumeClick,homeClick,aboutClick,contactClick})=>(
    <div className='main-menu'>
        <div className="pages">
            <FontAwesomeIcon className='home-icon go-to-home' onClick={homeClick} icon={ faHouse } />
            <FontAwesomeIcon className='home-icon go-to-about' onClick={aboutClick} icon={ faIdBadge } />
            <FontAwesomeIcon className='home-icon go-to-resume' onClick={resumeClick} icon={ faFile } />
            <FontAwesomeIcon className='home-icon go-to-contact' onClick={contactClick} icon={ faAddressCard } />

        </div>
        <div className="social-media">
            <a href="https://github.com/aniket651"><FontAwesomeIcon className='home-icon2' icon={faGithub} /></a>
        </div>
        {/* <h1>Hello World</h1> */}
    </div>
)