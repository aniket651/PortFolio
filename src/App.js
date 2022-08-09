import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
//conditional rendering here for all different pages
// const conditionalRendering =()=>{

// }
let rendringElement = <Home />;
function App() {
  const [rendringElement, setRendringElement] = useState(<Home />)
  const renderHome = () => {
    setRendringElement(<Home />);
  }
  const renderAbout = () => {
    setRendringElement(<AboutMe />);
  }
  const renderResume = () => {
    setRendringElement(<Resume />);
  }
  const renderContact = () => {
    setRendringElement(<ContactMe />);
  }


  return (
    <div className="container-fluid app-master">
      {/* <div className="app-content row"> */}
      {/* <div className="col-1 sidebar-section"> */}
      
      <Sidebar homeClick={renderHome} aboutClick={renderAbout} resumeClick={renderResume} contactClick={renderContact}/>
      {/* </div> */}
      {/* <div className="everything-else col-11"> */}
      {rendringElement}
      {/* </div> */}
      {/* </div> */}

      {/* <h1>Hello World</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quod est provident iure eum animi deserunt tempore, pariatur magnam, reiciendis at nostrum quo dolorem! Expedita perspiciatis quia harum animi!</p> */}




      {/* <Resume /> */}
    </div >
  );
}

export default App;

// let res = document.getElementsByClassName('go-to-resume')
// const renderResume = ()=>{
//   rendringElement = <Resume />;
// }
// res[0].addEventListener("click",renderResume)



