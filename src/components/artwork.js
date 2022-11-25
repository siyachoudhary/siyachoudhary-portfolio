import React from 'react';
import "./art.css"
import MyButton from "./MyButton";

function ContactForm(props) {
    const imageSrc = props.imageRoute
    const imgName = props.imageName

    function display(imageId){
        document.getElementById(`popUp-${imageId}`).style.visibility="visible"
    }

    function removeImg(imageId){
        document.getElementById(`popUp-${imageId}`).style.visibility="hidden"
    }

    return (
        <div>
            <div className={`artwork ${props.imgShape}`} >
                <img src={imageSrc} onClick={() => display(imgName)}/>
            </div>
            <div className={"popUp"} style={{visibility:"hidden"}} id={`popUp-${imgName}`}>
                <div className={"popUpContent"}>
                    <img src={imageSrc}/>
                    <h3>{imgName}</h3>
                    <MyButton btnText={"Close"} onClick={() => removeImg(imgName)}></MyButton>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
