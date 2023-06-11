import Btn from '../buttons/Btn';
import IconLogo from '../icons/IconLogo';
import IconMinus from '../icons/IconMinus';
import IconPlus from '../icons/IconPlus';
import './Topbar.scss';

export default function Topbar(props) {
    return <div className={props.className ? `topbar ${props.className}` : "topbar"}>
        <IconLogo
            className='logo-topbar'
            size='logo-x-small'
            fill="fill-orange"
        />
        <Btn type={`btn-topbar btn-secundary ${props.btnPlustopbar}`} size='small' onClick={props.handleClickPlus}>
            <IconPlus size='icon-xx-small' fill='fill-gray__darker'/>
        </Btn>
        <Btn type={`btn-topbar btn__minus-topbar btn-secundary ${props.btnMinustopbar}`} size='small' onClick={props.handleClickMinus}>
        <IconMinus size='icon-xx-small' fill='fill-gray__darker'/>
        </Btn>
        
    </div>
}