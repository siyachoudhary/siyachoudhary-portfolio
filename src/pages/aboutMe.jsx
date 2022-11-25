import React, {useEffect} from "react";
import image from "../resources/myImg.png"
import "./about.css"
import "./pages.css"

import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrophy} from "@fortawesome/free-solid-svg-icons";

import AOS from "aos"
import "aos/dist/aos.css"

const AboutMe = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    return(
        <div>
            <section className={"allInfo"}>
                <div className="card">
                    <div className="details" data-aos={"fade-left"}>
                        <div className="content">
                            <h2 className={"mainTitle"}>about.</h2>
                            <h4>
                                <span>Artist & coder based in Chicago, IL</span>
                                <br/><br/>
                                I am Siya Choudhary, a high school student, artist, illustrator, and tech enthusiast. I always persevere to further enhance my knowledge, especially in the fields of Computer Science and Arts.

                                <br/><br/>
                                My goal is to utilize my creativity and skills to make the world a healthier and happier place!

                            </h4>
                        </div>
                    </div>
                    <div className="imgBx" data-aos={"fade-right"}>
                        <img
                            src={image}
                            alt=""/>
                    </div>
                </div>
                <div className={"skills card"}>
                    <br/><br/>
                    <h1 className={"awardsTitle mainTitle"}>skills.</h1>
                    <h4>Programming Skills</h4>
                    <div>
                        <ul>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={60} label={`react`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={80} label={`javascript`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={80} label={`java`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={60} label={`python`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={90} label={`HTML/CSS`} className={"progress"} variant="info"/>
                            </li>
                            <br/>
                            <br/>
                        </ul>
                    </div>
                    <h4>Art Skills</h4>
                    <div data-aos={"fade-right"}>
                        <ul>
                            <li className={"awardTxt"}>
                                <ProgressBar now={95} label={`digital mediums`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={80} label={`watercolor`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={50} label={`pencil`} className={"progress"} variant="info"/>
                            </li>
                            <li className={"awardTxt"} data-aos={"fade-right"}>
                                <ProgressBar now={70} label={`acrylic`} className={"progress"} variant="info"/>
                            </li>
                            <br/>
                            <br/>
                        </ul>
                    </div>
                </div>
                <div className={"awards card"}>
                    <br/><br/>
                   <h1 className={"awardsTitle mainTitle"}>awards.</h1>
                    <ul>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2022 Business Professionals of America National 3rd Place - Graphic Design</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2022 Business Professionals of America State 1st Place - Graphic Design</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2021 NCWIT Northern Illinois Affiliate State Honorable Mention</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>Microsoft Imagine Cup 2022 Semi-Finalist</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2nd Place - 8th Congressional District Rep. Raja Krishnamoorthi's 2021 Congressional App Challenge</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2nd Place - 8th Congressional District Rep. Raja Krishnamoorthi's 2021 Congressional Art Competition</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2021 JB Conant High School Featured Artist</li>
                        <li data-aos={"fade-right"} className={"awardTxt"}><FontAwesomeIcon icon={faTrophy} className={"trophy"}/>2020 & 2018 School District Boardroom Artist</li>
                        <br/>
                        <br/>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;