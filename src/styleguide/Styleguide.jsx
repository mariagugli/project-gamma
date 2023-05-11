import './Style.scss'
import Nav from "./Nav"
import Btn from '../components/buttons/Btn'

export default function Styleguide() {
    return <>
        <h1>Hola, soy tu Style Guide</h1>
        <main className='main'>
            <Nav />
            <div className='pattern__section'>
                <h2>Buttons</h2>
                <Btn />
                
            </div>
            
            <div className='pattern__section'>
                
                <h1>Encabezado h1</h1>
                <h2>Encabezado h2</h2>
                <h3>Encabezado h3</h3>
                <h4>Encabezado h4</h4>
                <h5>Encabezado h5</h5>
                <h6>Encabezado h6</h6>
            </div>

        </main>
        
        
    </>
}