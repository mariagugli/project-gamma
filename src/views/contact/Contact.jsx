import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'
import Input from '../../components/inputs/Input'
import Message from '../../components/messages/Message'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import './Contact.scss'
import Popup from '../../components/popup/Popup';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className='title__contact'>{t("contactPage.title")}</h1>
        <section className="section__contact section__messages">
            <Message className="ms-contactpage ms--1" type="primary" size="small">{t("contactPage.message.ms1")}</Message>
            <Message className="ms-contactpage ms--2" type="primary" size="small">{t("contactPage.message.ms2")}</Message>
            <Message className="ms-contactpage ms--3" type="primary" size="small">{t("contactPage.message.ms3")}</Message>
        </section>
        <section className="section__contact contact__form">
            <form ref={form} onSubmit={sendEmail}>
                <Input isInputForm={true} type="input-row" size="input-small" label={t("contactPage.form.label.name")} placeholder={t("contactPage.form.placeholder.name")} inputName="user__name"/>
                <Input isInputForm={true} type="input-row" size="input-small" inputtype="email" label={t("contactPage.form.label.email")} placeholder={t("contactPage.form.placeholder.email")} inputName="user__email" />
                <Input isInputForm={true} type="input-column input-column--contact" size="input-small" inputtype="textarea" inputclass="input--contact__message" label={t("contactPage.form.label.message")} placeholder={t("contactPage.form.placeholder.message")} inputName="user__message" />
                <Btn type="btn-primary btn-submitform" size="small">
                    <input type='submit' value={t("contactPage.form.btn")} />
                </Btn>
                
            </form>
        </section>
        <Popup type="correct" className={showPopupCorrect}>{t("generalParts.popup.form.success")}</Popup>
        <Popup type="error" className={showPopupError}>{t("generalParts.popup.form.fail")}</Popup>
    </>
   
}