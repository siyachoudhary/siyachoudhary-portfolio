import React, {useEffect} from "react";
import "./portfolio.css"
import "./pages.css"

import AOS from "aos"
import "aos/dist/aos.css"

import CodingCard from "../components/codingCard";

import quizzania from "../resources/dev/quizzania.png"
import dealNoDeal from "../resources/dev/dealOrNoDeal.png"
import frogger from "../resources/dev/frogger.png"
import omni from "../resources/dev/omni.png"
import cancerDetector from "../resources/dev/cancer.png"
import rube from "../resources/dev/physics.png"

const Tech = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    return(
        <div>
            <section className={"allInfo"}>
                <div data-aos={"fade-down"}>
                    <h1 className={"mainTitle portfolioTitle"}>coding portfolio.</h1>
                    <p className={"subTitle"}>Check out some of my latest projects and apps.</p>
                </div>
                <div className={"projects"}>
                    <CodingCard imgSrc={cancerDetector} projectName={"AI Skin Cancer Detector"} projectDescription={
                        "Developed with the use of image classification and CNN technologies, this Machine Learning model was developed to help analyze skin lesions and classify them as cancerous. This detector is incredibly useful from preemptive diagnosis to prevent the further spread of the melanoma. The model was also trained to prevent bias with the use of techniques such as data augmentation. Eventually, the model was able to accurately diagnose skin lesions in seven different categories with approximately 70% accuracy."}
                                orientation={"left"} linkToDemo={"N/A"} languages={"Google Colaboratory, Python"}
                    ></CodingCard>
                    <CodingCard imgSrc={rube} projectName={"Rube Goldberg"} projectDescription={
                        "This Rube Goldberg machine uses physics properties to launch a rocket into space that propels an astroid towards Earth to cause its demise. The course is incredibly challenging and at times, requires assistance from the user to help guide the obstacles through space. And sometimes, gravity isn’t always what it seems like. "}
                                orientation={""} linkToDemo={"https://youtu.be/TwjZg2efJU4"} languages={"Matter.js, P5"}
                    ></CodingCard>
                    <CodingCard imgSrc={quizzania} projectName={"Quizzania"} projectDescription={
                        "'Quizzania' is an award winning web application developed using the Django framework of Python. The app was inspired by education being affected by the COVID-19 pandemic. The purpose of the app was to allow students and teachers to create various quizzes on topics of their choice to help them study for classes or tests. Users had the opportunity to play others' quizzes and leave ratings as a way of broadening the scope of playability of the app. This app recieved 2nd place at the 2021 8th Congressional District Congressional App Challenge."}
                        orientation={"left"} linkToDemo={"" +
                        "https://www.youtube.com/watch?v=CcHUGIwACjg"} languages={"Python, Django"}
                    ></CodingCard>
                    <CodingCard imgSrc={omni} projectName={"OmniFit"} projectDescription={
                        "OmniFit is an app that allows a user to find, log, and track their workouts all in one place. With an easy to understand interface, a user is able to create an account on their Android device within seconds along with creating a personalized weekly workout plan that fits their needs. OmniFit provides a platform where users can also log their daily workouts along with its duration as well as rate their experience with workout. It is vital to have the ability to track one’s workouts over an extended period and OmniFit does just that. "}
                                orientation={""} linkToDemo={"" +
                        "https://youtu.be/yV_9foj4YWI"} languages={"Android Studios, Java, XML"}
                    ></CodingCard>
                    <CodingCard imgSrc={frogger} projectName={"Frogger"} projectDescription={
                        "This is my take on the traditional Frogger arcade game with a goal to guide three frogs into their “homes” at the top of the screen while jumping on top of logs and avoiding obstacles like cars, snakes, and crocodiles. In order to win a round, you must guide three frogs into their home without running out of time or lives. Power-ups like an extra life and more time are found randomly spear across the playing area. As the player moves up levels, the game progressively gets more challenging."}
                                orientation={"left"} linkToDemo={"" +
                        "https://www.youtube.com/watch?v=GWPyif09xDE"} languages={"Javascript"}
                    ></CodingCard>
                    <CodingCard imgSrc={dealNoDeal} projectName={"Deal or No Deal"} projectDescription={
                        "Based on the original game show, my Deal Or No Deal allows the player to use intuition and analysis to open boxes that gradually reveal money values. The player begins by blocking one of the boxes to save as their own. The player opens fewer boxes each round and at the end of each round, the player receives an offer from the banker. If they choose to accept the deal they go home with the money they have and if not they continue to the next round. When there are only two boxes remaining the player can choose which one they would like to open and the value they get in that box is the one they go take."}
                                orientation={""} linkToDemo={"" +
                        "https://www.youtube.com/watch?v=cm2aqHtyt2A"} languages={"Javascript"}
                    ></CodingCard>
                </div>
                <div className={"linkToContact"}>
                    <p className={"subTitle"}>Want to leave some feedback?</p>
                    <a href={"/contact"}>Contact Me</a>
                </div>
            </section>
        </div>
    )
}

export default Tech;