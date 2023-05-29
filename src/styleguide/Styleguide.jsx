import './Style.scss'
import Nav from "./Nav"
import Btn from '../components/buttons/Btn'
import BtnText from '../components/buttons/BtnText'
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
import InputForm from '../components/inputs/InputForm'
import InputToggleSwitch from '../components/inputs/InputToggleSwitch'
import Tag from '../components/Tags/Tag'
import Message from '../components/messages/Message'
import Topbar from '../components/topbar/Topbar'
import SidebarMessage from '../components/sidebarMessage/SidebarMessage'
import Weather from '../components/weather/Weather'




export default function Styleguide() {
    return <>
        <h1>Style Guide - Portfolio Gugli</h1>
        <main className='main'>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Buttons</h2>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Primary buttons</h3>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-primary text-white" size="small" icon={<IconGithub size="xx-small" fill="white"/>} text="Enviar"/>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>  
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-primary text-white" text="Enviar"/>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-primary text-white" size="big"text="Enviar"/>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-primary text-white" size="xbig" text="Enviar"/>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>

                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Secundary buttons</h3>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-secundary" size="small" text="Ver más"/>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-secundary" text="Ver más"/>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-secundary" size="big" text="Ver más"/>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <Btn variant="btn-secundary" size="xbig" text="Ver más"/>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Button Text</h3>
                    <p>Light button text</p>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__light" size="small" icon={<IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="gray__darker"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__light" icon={<IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="gray__darker"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__light" size="big" icon={<IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="gray__darker"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__light" size="xbig" icon={<IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="gray__darker"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size xbig</h4>
                        </div>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Button Text</h3>
                    <p>Dark button text</p>
                    <div className='pattern__group-styleguide'>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__dark" size="small" icon={<IconBtnText variantbg="icon-dark-bg" variantbr="icon-light-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size small</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__dark" icon={<IconBtnText variantbg="icon-dark-bg" variantbr="icon-light-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size default</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__dark" size="big" icon={<IconBtnText variantbg="icon-dark-bg" variantbr="icon-light-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />} text="Ver proyecto"/>
                            <h4 className='text__explaining'>Size big</h4>
                        </div>
                        <div className='guide__elements-styleguide'>
                            <BtnText variant="btn-text__dark" size="xbig" icon={<IconBtnText variantbg="icon-dark-bg" variantbr="icon-light-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />} text="Ver proyecto"/>
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
                                    <IconGithub size="x-small"/>
                                    <IconLinkedIn size="x-small"/>
                                    <IconCodepen size="x-small"/>
                                </div>
                            </div>
                            <div className='width-100'>
                                <h3 className='subtitle__styleguide'>Arrows</h3>
                                <div className='group__elements--row'>
                                    <IconArrowRight size="x-small"/>
                                    <IconArrowLeft size="x-small"/>
                                    <IconArrowUp size="x-small"/>
                                    <IconArrowDown size="x-small"/>
                                </div>
                            </div>
                            <div className='width-100'>
                                <h3 className='subtitle__styleguide'>Extras decorativos</h3>
                                <div className='group__elements--row'>
                                    <IconSun size="x-small"/>
                                    <IconSearch size="x-small"/>
                                    <IconPlus size="x-small"/>
                                    <IconMinus size="x-small"/>
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
                        <IconDoc size="small" text="Este es un documento"/>
                        <IconDoc size="default" text="Este es un documento"/>
                        <IconDoc size="big" text="Este es un documento"/>
                        <IconDoc size="x-big" text="Este es un documento"/>
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Flowers</h3>
                    <div className='pattern__group-styleguide'>
                        <IconFlower size="big" fill="yellow" text="Hola" />
                        <IconFlowerLarge size="big" fill="yellow" text="Hola" />
                        <IconFlowerXlarge size="big" fill="yellow" text="Hola" />
                    </div>
                </article>
                <article className='articles__styleguide'>
                    <h3 className='subtitle__styleguide'>Logo</h3>
                    <div className='pattern__group-styleguide'>
                        <IconLogo size="small" fill="orange"/>
                        <IconLogo size="big" fill="orange"/>
                    </div>
                </article>
            </section>
            <section className='section__styleguide'>
                <h2 className='title__styleguide'>Inputs</h2>
                <article className='articles__styleguide'>
                    <h3>Inputs forms</h3>
                    <InputForm variant='input-row' label='Nombre' placeholder='Escribe tu nombre'type='text'/>
                    <InputForm variant='input-column' label='Email' placeholder='Escribe tu email'type='email'/>
                    <InputForm label='Nombre' placeholder='Escribe tu nombre'type='checkbox'/>
                    <InputForm label='Nombre' placeholder='Escribe tu nombre'type='radio'/>
                </article>
                <article className='articles__styleguide'>
                    <h3>Toggle Switch</h3>
                    <InputToggleSwitch />
                    <InputToggleSwitch variant='switch-big' slider='slider-big'/>
                </article>
            </section>
            <div className='group__sections-styleguide'>
                <section className='section__styleguide section__tags'>
                    <h2 className='title__styleguide'>Tags</h2>
                    <article className='articles__styleguide'>
                        <Tag variant='wordpress' size='small' />
                        <Tag variant='css' size='default' />
                        <Tag variant='javascript' size='big' />
                    </article>
                </section>
                <section className='section__styleguide'>
                    <h2 className='title__styleguide'>Mensajes</h2>
                    <div className='pattern__group-styleguide'>
                        <article className='articles__styleguide'>
                            <Message variant='ms-primary' text='Hola! Soy un mensaje principal pequeño' size='small'/>
                            <Message variant='ms-primary' text='Hola! Soy un mensaje principal default' size='default'/>
                            <Message variant='ms-primary' text='Hola! Soy un mensaje principal grande' size='big'/>
                        </article>
                        <article className='articles__styleguide'>
                            <Message variant='ms-secondary' text='Hola! Soy un mensaje secundario pequeño' size='small'/>
                            <Message variant='ms-secondary' text='Hola! Soy un mensaje secundario default' size='default'/>
                            <Message variant='ms-secondary' text='Hola! Soy un mensaje secundario grande' size='big'/>
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
                <SidebarMessage name='Gugli' message='Estoy disponible para trabajar.' btntext='Contáctame'/>
            </section>


            <Weather />
    
            

            
            
        </main>
        
    </>
}