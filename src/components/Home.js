import './Home.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const BottomWaves = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,144C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}
const Blob = () => {
    return (

        <div className='blob'>

            <svg
                width="400"
                height="500"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>


                    <linearGradient id="linearGradientId" gradientTransform="rotate(225 0.5 0.5)">
                        <stop offset="0%" stopColor="#00DBDE" />
                        <stop offset="100%" stopColor="#FC00FF" />
                    </linearGradient>




                    <clipPath id="shape">
                        <path fill="currentColor" d="M945,645Q899,790,776,879.5Q653,969,504,957Q355,945,233.5,863.5Q112,782,57.5,641Q3,500,63,363Q123,226,234.5,125.5Q346,25,496.5,36.5Q647,48,755.5,141.5Q864,235,927.5,367.5Q991,500,945,645Z"></path>
                    </clipPath>
                </defs>



                <g clipPath="url(#shape)">
                    <path fill="url(#linearGradientId)" d="M945,645Q899,790,776,879.5Q653,969,504,957Q355,945,233.5,863.5Q112,782,57.5,641Q3,500,63,363Q123,226,234.5,125.5Q346,25,496.5,36.5Q647,48,755.5,141.5Q864,235,927.5,367.5Q991,500,945,645Z" />
                </g>



            </svg>
        </div>

    )
}
export default () =>
(
    <div className='home ' >

        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, reiciendis consequatur numquam, cupiditate eligendi soluta dolor hic doloremque minus animi eum saepe, ipsa quod. Voluptas ipsum officiis quos laborum cupiditate!</p> */}
        <div className="row container-fluid myrow1">
            {/* <div className="side-bar col-2"> */}
            {/* <Sidebar /> */}
            {/* </div> */}
            <div className="textual col-6">
                <div className="line1">Hi</div>
                <div className="line2">
                    <span>I'm</span>
                    <span className='myName'> Aniket</span>
                </div>
                <div className="line3">
                    <span>web Developer</span>
                    <span className='sepeator'> | </span>
                    <span>CP enthusiast</span>
                </div>
                <div className="buttons-here">
                    <a
                        href="https://drive.google.com/file/d/1EkyKGSD2225OOVRlkE4rQbibeJlgH75Z/view?usp=sharing"
                        download target="_blank"
                    ><button type="button" className="btn btn-warning"><FontAwesomeIcon icon={faDownload} /> Resume </button></a>
                </div>
                {/* <div className="row container-fluid button-row">
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        
                    </div>
                </div> */}
            </div>
            <div className="col-6 blob-div">
                {/* <Blob /> */}
            </div>
        </div>

    </div>
)
