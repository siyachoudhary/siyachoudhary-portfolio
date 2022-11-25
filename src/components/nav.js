import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../resources/logo.png'
import './nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";

function MyNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={"navTop"}>
            <Container>
                <Navbar.Brand href="/" className={"myLogo"}>
                    <img src={Logo} width={75}/>
                    <a href={"/"} className={"myName"}>Siya Choudhary</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#features">Siya Choudhary</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <CustomLink href={"/"}>HOME</CustomLink>
                        <CustomLink href={"/aboutMe"}>ABOUT</CustomLink>
                        <NavDropdown title="MY PORTFOLIOS" id="collasible-nav-dropdown" className={"linkItem"}>
                            <NavDropdown.Item href="/techPortfolio">Coding</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/artPortfolio">Art</NavDropdown.Item>
                        </NavDropdown>
                        <CustomLink href={"/contact"}>CONTACT</CustomLink>
                        <div>
                            <ul>
                                <li><a href={"https://www.instagram.com/siyac_art/"} target={"_blank"}><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href={"https://www.linkedin.com/in/siya-choudhary-2b0b89229/"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href={"https://github.com/siyachoudhary"} target={"_blank"}><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href={"https://www.youtube.com/channel/UCWRd7PQTU_SsYW-VJ09i2Jw"} target={"_blank"}><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
        path===href?
        <Nav.Link href={href} {...props} className={"active"}>{children}</Nav.Link>:
            <Nav.Link href={href} {...props}>{children}</Nav.Link>
    )

}

export default MyNav;