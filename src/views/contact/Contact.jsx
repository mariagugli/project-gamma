import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'
import Input from '../../components/inputs/Input'
import Message from '../../components/messages/Message'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import './Contact.scss'
import Popup from '../../components/popup/Popup';

export default function Contact() {
    const form = useRef();
    const [ showPopupCorrect, setShowPopupCorrect] = useState("popup");
    const [ showPopupError, setShowPopupError] = useState("popup");

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_lt708hl', 'template_kv68xmg', form.current, 'y0WvCZZ-Knai4KEAb')
        .then(
            (result) => {
                console.log(result.text);
                setShowPopupCorrect("open--popup");

                setTimeout(() => {
                    setShowPopupCorrect("popup");
                }, 3000);
            }, 
            (error) => {
                console.log(error.text);
                setShowPopupError("open--popup");

                setTimeout(() => {
                    setShowPopupError("popup");
                }, 4000);
            }
        );
        e.target.reset()
    };

    return <>
        <section className="section__contact section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className='title__contact'>Mensajes</h1>
        <section className="section__contact section__messages">
            <Message className="ms-contactpage ms--1" type="primary" size="small">Hola! Qué necesitas?</Message>
            <Message className="ms-contactpage ms--2" type="primary" size="small">No dudes en contactarme si quieres colaborar conmigo. 🙆‍♀️</Message>
            <Message className="ms-contactpage ms--3" type="primary" size="small">Soy una front-end developer junior con muchas ganas de seguir aprendiendo y desarrollando mis conocimientos.</Message>
        </section>
        <section className="section__contact contact__form">
            <form ref={form} onSubmit={sendEmail}>
                <Input isInputForm={true} type="input-row" size="input-small" label="Nombre" placeholder="Escríbeme tu nombre" inputName="user__name"/>
                <Input isInputForm={true} type="input-row" size="input-small" inputtype="email" label="Correo" placeholder="Escribe aquí tu correo" inputName="user__email" />
                <Input isInputForm={true} type="input-column input-column--contact" size="input-small" inputtype="textarea" inputclass="input--contact__message" label="Mensaje" placeholder="Cuéntame qué necesitas en esta casilla" inputName="user__message" />
                <Btn type="btn-primary btn-submitform" size="small">
                    <input type='submit' value="Send" />
                </Btn>
                
            </form>
        </section>
        <Popup type="correct" className={showPopupCorrect}>Perfecto! He recibido tu mensaje en mi correo.</Popup>
        <Popup type="error" className={showPopupError}>Hola, algo ha ocurrido y no se ha podido completar el envío. Inténtalo más tarde. O envíame un mensaje directamente a: info.mariagugli@gmail.com</Popup>
    </>
   
}