import React, {useEffect} from "react";
import ContactForm from "../components/contactForm";
import "./pages.css"
import "./contact.css"

import AOS from "aos"
import "aos/dist/aos.css"

import Insta from "../resources/insta.jpeg"
import Linkedin from "../resources/linkedin.png"
import Git from "../resources/git.png"
import Youtube from "../resources/youtube.png"

import fullFace from "../resources/fullFace.png"

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    return(
        <div>
            <section className={"allInfo"}>
                <h1 className={"mainTitle contactTitle"} data-aos={"slide-right"}>contact me.</h1>
                <ContactForm></ContactForm>
                <div>
                    <div className={"socials"}>
                        <div  data-aos={"fade-right"}>
                            <h1 className={"mainTitle acrossSM"}>reach out across social media.</h1>
                            <h6 data-aos={"flip-down"} data-aos-delay={"2500"}>(And give me a follow while you're at it)</h6>
                            <br/>
                            <div className={"socialLinks"}>
                                <div data-aos={"fade-in"} data-aos-delay={"500"}>
                                    <div className={"socialIcon"}>
                                        <a href={"https://www.instagram.com/siyac_art/"} target={"_blank"}><img src={Insta}/></a>
                                        <a href={"https://www.instagram.com/siyac_art/"} target={"_blank"}><p>Instagram</p></a>
                                    </div>
                                </div>
                                <div data-aos={"fade-in"} data-aos-delay={"1000"}>
                                    <div className={"socialIcon"}>
                                        <a href={"https://www.linkedin.com/in/siya-choudhary-2b0b89229/"} target={"_blank"}><img src={Linkedin}/></a>
                                        <a href={"https://www.linkedin.com/in/siya-choudhary-2b0b89229/"} target={"_blank"}><p>LinkedIn</p></a>
                                    </div>
                                </div>
                                <div data-aos={"fade-in"} data-aos-delay={"1500"}>
                                    <div className={"socialIcon"}>
                                        <a href={"https://github.com/siyachoudhary"} target={"_blank"}><img src={Git}/></a>
                                        <a href={"https://github.com/siyachoudhary"} target={"_blank"}><p>GitHub</p></a>
                                    </div>
                                </div>
                                <div data-aos={"fade-in"} data-aos-delay={"2000"}>
                                    <div className={"socialIcon"}>
                                        <a href={"https://www.youtube.com/channel/UCWRd7PQTU_SsYW-VJ09i2Jw"} target={"_blank"}><img src={Youtube}/></a>
                                        <a href={"https://www.youtube.com/channel/UCWRd7PQTU_SsYW-VJ09i2Jw"} target={"_blank"}><p>Youtube</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"contactImg"}  data-aos={"fade-left"}>
                            <img src={fullFace}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;