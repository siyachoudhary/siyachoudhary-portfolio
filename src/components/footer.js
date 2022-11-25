import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

function MyFooter() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className={"footerContainer"}>
                <h1 className={"footerText"}>@2022 Siya Choudhary</h1>

            <div>
                <ul>
                    <li><a href={"https://www.instagram.com/siyac_art/"} target={"_blank"}><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href={"https://www.linkedin.com/in/siya-choudhary-2b0b89229/"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href={"https://github.com/siyachoudhary"} target={"_blank"}><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href={"https://www.youtube.com/channel/UCWRd7PQTU_SsYW-VJ09i2Jw"} target={"_blank"}><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
            </div>
        </Navbar>
    );
}

export default MyFooter;