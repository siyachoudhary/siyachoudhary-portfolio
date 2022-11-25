import React, {useEffect} from "react";
import "./pages.css"
import "./portfolio.css"

import AOS from "aos"
import "aos/dist/aos.css"

import ImageCard from "../components/artwork"

import dauntless from "../resources/art/dauntless.jpeg"
import blindingLights from "../resources/art/blindingLights.JPG"
import window from "../resources/art/window.jpg"

import clarke from "../resources/art/clarke.jpeg"
import yellowGirl from "../resources/art/yellow.jpeg"
import hatter from "../resources/art/hatter.jpeg"

import bigHorse from "../resources/art/bigHorse.jpg"
import belle from "../resources/art/belle.jpeg"
import coffeeGirl from "../resources/art/coffee.png"

import paris from "../resources/art/Paris.jpeg"
import katniss from "../resources/art/katniss.jpg"
import ross from "../resources/art/ross.jpeg"

import blueHair from "../resources/art/blueHair.jpeg"
import flowers from "../resources/art/flowers.jpeg"
import billieWater from "../resources/art/billiewater.jpeg"

import cloudgate from "../resources/art/cloudgate.jpeg"
import coffeeAvocado from "../resources/art/coffeeavacado.jpeg"
import chefs from "../resources/art/chefs.jpeg"

import butterfly from "../resources/art/Butterfly.jpeg"
import dog from "../resources/art/dog.jpeg"
import blue from "../resources/art/blue.jpeg"

const Art = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    return(
        <div>
            <section className={"allInfo"}>
                <div data-aos={"fade-down"}>
                    <h1 className={"mainTitle portfolioTitle"}>art portfolio.</h1>
                    <p className={"subTitle"}>Check out some of my latest artworks across various mediums.</p>
                </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={dauntless} imageName={"Dauntless"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={blindingLights} imageName={"Blinding Lights"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={window} imageName={"Window to Your Dreams"} imgShape={"rect"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={clarke} imageName={"Clarke Griffin from 'the 100'"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={yellowGirl} imageName={"A Pop of Color"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={hatter} imageName={"The Mad Hatter of Wonderland"} imgShape={"sqr"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={bigHorse} imageName={"Maximum Security"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={belle} imageName={"Belle from Beauty and the Beast"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={coffeeGirl} imageName={"Calming Coffee"} imgShape={"rect"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={paris} imageName={"Revere de la Paris"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={katniss} imageName={"Katniss Everdeen from the Hunger Games"} imgShape={"rect"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={ross} imageName={"Ross Geller and Marcel from F.R.I.E.N.D.S"} imgShape={"rect"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={blueHair} imageName={"Blue Hues"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={flowers} imageName={"Thinkin' of Summer"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={billieWater} imageName={"Tearing Up"} imgShape={"sqr"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={coffeeAvocado} imageName={"Coffee & Avocados"} imgShape={"rectSide"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={cloudgate} imageName={"Cloudgate, Chicago"} imgShape={"rectSide"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={chefs} imageName={"Chef's Kiss"} imgShape={"rectSide"}></ImageCard></div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}><ImageCard imageRoute={butterfly} imageName={"Wonder"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={dog} imageName={"Puppy Love"} imgShape={"sqr"}></ImageCard></div>
                        <div className={"column"}><ImageCard imageRoute={blue} imageName={"Spring Blues"} imgShape={"sqr"}></ImageCard></div>
                    </div>
                <div className={"linkToContact"}>
                    <p className={"subTitle"}>Want to leave some feedback?</p>
                    <a href={"/contact"}>Contact Me</a>
                </div>
            </section>
        </div>
    )
}

export default Art;