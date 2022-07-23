import './Contact.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'


export default () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fkxnxgz', 'template_zj5v4z9', e.target, 'XY7Z8fCTcUj5GHryW')
    }
    return (
        <div className="Contact-me container-fluid">
            <div className="heading"><span>Contact Me</span></div>
            <div className="row page-division">
                <div className="col-3 left-gutter"></div>
                <div className="maincontent row col-7">
                    <div className="col-4 maincontent-left">
                        <h3>My Email: </h3>
                        <h6>aniketpandey651@gmail.com</h6>
                    </div>
                    <div className="col-8 maincontent-right">
                        {/* <h2>Contact form</h2> */}
                        <form onSubmit={sendEmail}>
                            <label htmlFor="name">name :</label>
                            <input type="text" name='name' id='name' required/>
                            <br /><br />
                            <label htmlFor="email">Email :</label>
                            <input type="email" name='user_email' id='email' required/>
                            <br /><br />
                            <label htmlFor="message-box">Message :</label>
                            <br />
                            <textarea name="message" id="message-box" required cols="50" rows="3" />
                            <br /><br />
                            <input type="submit" value='Send' className='btn btn-primary'/>

                        </form>
                    </div>
                </div>
                <div className="col-2 right-gutter"></div>
            </div>

        </div>
    )
}