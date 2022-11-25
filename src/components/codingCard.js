import React, {useEffect} from 'react';

import "./coding.css"

import MyButton from "./MyButton";
import AOS from "aos";

function CodingCard(props) {
    const orientation = props.orientation
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    return (
        <div>
            {orientation === "left" ?
                <article className="postcard light blue" data-aos={"fade-right"}>
                    {props.linkToDemo!=="N/A"?
                            <a className="postcard__img_link" href={props.linkToDemo} target="blank">
                                <img className="postcard__img" src={props.imgSrc} alt="projectImg"/>
                            </a>:<img className="postcard__img" src={props.imgSrc} alt="projectImg"/>}
                    <div className="postcard__text">
                        <h1 className="postcard__title blue" data-aos={"fade-in"}>{props.projectName}</h1>
                        <small>{props.languages}</small>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">{props.projectDescription}
                        </div>
                        {props.linkToDemo!=="N/A"?
                        <div className={"demo"}>
                            <a href={props.linkToDemo} target={"_blank"}><MyButton btnText={"View Demo"}></MyButton></a>
                        </div>:""}
                    </div>
                </article>
                : <article className="postcard light blue"  data-aos={"fade-left"}>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue" data-aos={"fade-in"}>{props.projectName}</h1>
                        <small>{props.languages}</small>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">{props.projectDescription}
                        </div>
                        {props.linkToDemo!=="N/A"?
                            <div className={"demo"}>
                                <a href={props.linkToDemo} target={"_blank"}><MyButton btnText={"View Demo"}></MyButton></a>
                            </div>:""}
                    </div>
                    {props.linkToDemo!=="N/A"?
                        <a className="postcard__img_link" href={props.linkToDemo} target="blank">
                            <img className="postcard__img" src={props.imgSrc} alt="projectImg"/>
                        </a>:<img className="postcard__img" src={props.imgSrc} alt="projectImg"/>}
                </article>
            }
        </div>
    );
}

export default CodingCard;
