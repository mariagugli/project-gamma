import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'
import Input from '../../components/inputs/Input'
import Message from '../../components/messages/Message'
import './Contact.scss'

export default function Contact() {
    return <>
        <section className="section__contact section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className='title__contact'>Mensajes</h1>
        <section className="section__contact section__messages">
            <Message className="ms-contactpage" type="primary" size="small">Hola! Qué necesitas?</Message>
            <Message className="ms-contactpage" type="primary" size="small">No dudes en contactarme si quieres colaborar conmigo. 🙆‍♀️</Message>
            <Message className="ms-contactpage" type="primary" size="small">Soy una front-end developer junior con muchas ganas de seguir aprendiendo y desarrollando mis conocimientos.</Message>
        </section>
        <section className="section__contact contact__form">
            <Input isInputForm={true} type="input-row" size="input-small" label="Nombre" placeholder="Escríbeme tu nombre" />
            <Input isInputForm={true} type="input-row" size="input-small" inputtype="email" label="Correo" placeholder="Escribe aquí tu correo" />
            <Input isInputForm={true} type="input-column input-column--contact" size="input-small" inputtype="textarea" inputclass="input--contact__message" label="Mensaje" placeholder="Cuéntame qué necesitas en esta casilla" />
        </section>
    </>
   
}