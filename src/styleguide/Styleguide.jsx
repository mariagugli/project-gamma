import './Style.scss'
import Nav from "./Nav"
import Btn from '../components/buttons/Btn'
import IconArrowRight from '../components/icons/IconArrowRight'
import IconBtnText from '../components/icons/IconBtnText'
import IconGithub from '../components/icons/IconGithub'
import IconLinkedIn from '../components/icons/IconLinkedIn'
import IconCodepen from '../components/icons/IconCodepen'
import IconArrowLeft from '../components/icons/IconArrowLeft'
import IconArrowUp from '../components/icons/IconArrowUp'
import IconArrowDown from '../components/icons/IconArrowDown'
import IconSun from '../components/icons/IconSun'
import IconSearch from '../components/icons/IconSearch'
import IconPlus from '../components/icons/IconPlus'
import IconMinus from '../components/icons/IconMinus'
import IconLogo from '../components/icons/IconLogo'
import IconDoc from '../components/icons/IconDoc'
import IconFlower from '../components/icons/IconFlower'
import IconFlowerLarge from '../components/icons/IconFlower-large'
import IconFlowerXlarge from '../components/icons/IconFlower-xlarge'
import Input from '../components/inputs/Input'
import Tag from '../components/Tags/Tag'
import Message from '../components/messages/Message'
import Topbar from '../components/topbar/Topbar'
import Notification from '../components/notification/Notification'
import Weather from '../components/weather/Weather'
import Footer from '../components/footer/Footer'
import Card from '../components/cards/Card'



export default function Styleguide() {
    return <>
        <h1>Style Guide - Portfolio Gugli</h1>
        <main className='main__styleguide'>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Buttons</h2>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Primary buttons</h3>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-primary" size="small">
                                <IconGithub size="icon-xx-small" fill="fill-white"/>
                                Enviar
                            </Btn>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-primary">Enviar</Btn>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-primary" size="big">Enviar</Btn>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-primary" size="xbig">Enviar</Btn>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>

                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Secundary buttons</h3>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-secundary" size="small">Ver más</Btn>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-secundary">Ver más</Btn>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-secundary" size="big">Ver más</Btn>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-secundary" size="xbig">Ver más</Btn>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Button Text</h3>
                    <p>Light button text</p>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__light" size="small">
                                <IconBtnText bg="icon-light-bg" br="icon-dark-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-gray__darker"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__light">
                                <IconBtnText bg="icon-light-bg" br="icon-dark-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-gray__darker"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__light" size="big">
                                <IconBtnText bg="icon-light-bg" br="icon-dark-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-gray__darker"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__light" size="xbig">
                                <IconBtnText bg="icon-light-bg" br="icon-dark-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-gray__darker"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Button Text</h3>
                    <p>Dark button text</p>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__dark" size="small">
                                <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__dark">
                                <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__dark" size="big">
                                <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn type="btn-text__dark" size="xbig">
                                <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                                    <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                                </IconBtnText>
                                Ver proyecto
                            </Btn>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>
            </section>

            <div className='group__sections-styleguide'>
                <div className='group__sections-styleguide--column'>
                    <section className='section__styleguide'>
                        <h2 className='title__styleguide'>Encabezados</h2>
                        <article className='articles__styleguide'>
                            <h1>Encabezado h1</h1>
                            <h2>Encabezado h2</h2>
                            <h3>Encabezado h3</h3>
                            <h4>Encabezado h4</h4>
                            <h5>Encabezado h5</h5>
                            <h6>Encabezado h6</h6>
                            <p data-text='Paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem ipsam assumenda ratione consequatur voluptas repudiandae nihil eaque corrupti, deleniti aliquam accusamus eius numquam illum, reprehenderit minus cumque nulla unde?</p>
                        </article>
                    </section>
                    <section className='section__styleguide'>
                        <h2 className='title__styleguide'>Iconos</h2>
                        <article className='articles__styleguide article__icons--styleguide'>
                            <div className='width-100'>
                                <h3 className='subtitle__styleguide'>Redes sociales</h3>
                                <div className='group__elements--row'>
                                    <IconGithub size="icon-x-small"/>
                                    <IconLinkedIn size="icon-x-small"/>
                                    <IconCodepen size="icon-x-small"/>
                                </div>
                            </div>
                            <div className='width-100'>
                                <h3 className='subtitle__styleguide'>Arrows</h3>
                                <div className='group__elements--row'>
                                    <IconArrowRight size="icon-x-small"/>
                                    <IconArrowLeft size="icon-x-small"/>
                                    <IconArrowUp size="icon-x-small"/>
                                    <IconArrowDown size="icon-x-small"/>
                                </div>
                            </div>
                            <div className='width-100'>
                                <h3 className='subtitle__styleguide'>Extras decorativos</h3>
                                <div className='group__elements--row'>
                                    <IconSun size="icon-x-small"/>
                                    <IconSearch size="icon-x-small"/>
                                    <IconPlus size="icon-x-small"/>
                                    <IconMinus size="icon-x-small"/>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <section className='section__styleguide'>
                    <h2 className='title__styleguide'>Tipografía</h2>
                    <h1 className='typography__name'><span className='underline__title'>Prompt</span></h1>
                    <div className='guide__elements-styleguide'>
                        <h1 className='text-light'>Aa</h1>
                        <h2 className='text-light'>Prompt Light</h2>  
                    </div>
                    <div className='guide__elements-styleguide'>
                        <h1 className='text-regular'>Aa</h1>
                        <h2 className='text-regular'>Prompt Regular</h2>  
                    </div>
                    <div className='guide__elements-styleguide'>
                        <h1 className='text-extrabold'>Aa</h1>
                        <h2 className='text-extrabold'>Prompt Extrabold</h2>  
                    </div>
                </section>
            </div>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Iconos como elementos</h2>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Docs</h3>
                    <div className='pattern__group-styleguide'>
                        <IconDoc size="icondoc-small">
                            Esto es un documento
                        </IconDoc>
                        <IconDoc size="icondoc-default">
                            Esto es un documento
                        </IconDoc>
                        <IconDoc size="icondoc-big">
                            Esto es un documento
                        </IconDoc>
                        <IconDoc size="icondoc-x-big">
                            Esto es un documento
                        </IconDoc>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Flowers</h3>
                    <div className='pattern__group-styleguide'>
                        <IconFlower size="flower-big" fill="fill-yellow">
                            Proyecto
                        </IconFlower>
                        <IconFlowerLarge size="flowerlarge-big" fill="fill-yellow">
                            Proyecto
                        </IconFlowerLarge>
                        <IconFlowerXlarge size="flowerxlarge-big" fill="fill-yellow">
                            Proyecto
                        </IconFlowerXlarge>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Logo</h3>
                    <div className='pattern__group-styleguide'>
                        <IconLogo size="logo-small" fill="fill-orange"/>
                        <IconLogo size="logo-big" fill="fill-orange"/>
                    </div>
                </article>
            </section>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Inputs</h2>
                <article className='articles__styleguide'>
                    <h3>Inputs forms</h3>
                    <Input isInputForm={true} type='input-row' label='Nombre' placeholder='Escribe tu nombre' inputtype='text'/>
                    <Input isInputForm={true} type='input-column' label='Email' placeholder='Escribe tu email' inputtype='email'/>
                    <Input isInputForm={true} label='Nombre' placeholder='Escribe tu nombre' inputtype='checkbox'/>
                    <Input isInputForm={true} label='Nombre' placeholder='Escribe tu nombre' inputtype='radio'/>
                </article>
                <article className='articles__styleguide'>
                    <h3>Toggle Switch</h3>
                    <Input isToggle={true} />
                    <Input isToggle={true} switch='switch-big' slider='slider-big'/>
                </article>
            </section>
            <div className='group__sections-styleguide'>
                <section className='section__styleguide section__tags'>
                    <h2 className='title__styleguide'>Tags</h2>
                    <article className='articles__styleguide'>
                        <Tag type='wordpress' size='tag-small' />
                        <Tag type='css' size='tag-default' />
                        <Tag type='javascript' size='tag-big' />
                    </article>
                </section>
                <section className='section__styleguide'>
                    <h2 className='title__styleguide'>Mensajes</h2>
                    <div className='pattern__group-styleguide'>
                        <article className='articles__styleguide'>
                            <Message type='ms-primary' size='ms-small'>
                                Hola! Soy un mensaje principal pequeño.
                            </Message>
                            <Message type='ms-primary' size='ms-default'>
                                Hola! Soy un mensaje principal default.
                            </Message>
                            <Message type='ms-primary' size='ms-big'>
                                Hola! Soy un mensaje principal grande.
                            </Message>
                        </article>
                        <article className='articles__styleguide'>
                        <Message type='ms-secondary' size='ms-small'>
                                Hola! Soy un mensaje secundario pequeño.
                            </Message>
                            <Message type='ms-secondary' size='ms-default'>
                                Hola! Soy un mensaje secundario default.
                            </Message>
                            <Message type='ms-secondary' size='ms-big'>
                                Hola! Soy un mensaje secundario grande.
                            </Message>
                        </article>
                    </div>
                </section>
            </div>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Topbar</h2>
                <Topbar />
                <Topbar />
            </section>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Mensaje del Sidebar</h2>
                <Notification 
                    name='Gugli' 
                    text='Estoy disponible para trabajar.' 
                    btntext='Contáctame'
                />
            </section>
            <section className='section__styleguide'>
                <Footer />
            </section>

            <section className='section__styleguide'>
                <Card />
            </section>

            <section className='section__styleguide'>
                <Weather />
            </section>
            
        </main>
        
    </>
}