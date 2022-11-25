import React, {useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contactForm.css"

import MyButton from "./MyButton"

import AOS from "aos"
import "aos/dist/aos.css"

function ContactForm() {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);
    const [state, handleSubmit] = useForm("maykznvk");
    if (state.succeeded) {
        return <p className={"submittedText"}>Thanks for your message!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={"contactForm"} data-aos="fade-right" data-aos-delay="1000" data-aos-offset={"0"}>
            <p className={"submittedText"}>Use this space to ask me about my work, commissions, or to just say hi!</p>
            <div className={"formSection"}>
                <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder={"Your Name"}
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className={"formSection"}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={"Your Email"}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className={"messageArea formSection"}>
                <textarea
                    id="message"
                    name="message"
                    placeholder={"Your Message"}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <MyButton type="submit" disabled={state.submitting} className={"sendBtn"} btnText={`send`} btnType={"send"}></MyButton>
        </form>
    );
}

export default ContactForm;
