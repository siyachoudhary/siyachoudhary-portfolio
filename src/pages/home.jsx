import React, {useEffect} from "react";
import "./home.css"
import "./pages.css"

import ImgLeft from "../resources/leftImg.png"
import ImgRight from "../resources/rightImg.png"

import AOS from "aos"
import "aos/dist/aos.css"

import Typewriter from "typewriter-effect";
import {Button} from "react-bootstrap";

const HomePage = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);


    return(
        <div>
            <section className={"allInfo"}>
                <div className={"myIntro"} data-aos={"fade-in"}>
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                                .pauseFor(1000)
                                .typeString("Hey, I'm Siya")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm an artist and coder")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Check out my work:")
                                .start();
                        }}
                    />
                </div>
                <div className={"whoAmI"}>
                    <div className={"leftImg"} data-aos={"fade-right"}>
                        <a href={"/artPortfolio"}><img src={ImgLeft} alt={"left"}/></a>
                    </div>

                    <div className={"rightImg"} data-aos={"fade-left"}>
                        <a href={"/techPortfolio"}><img src={ImgRight} alt={"right"}/></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;