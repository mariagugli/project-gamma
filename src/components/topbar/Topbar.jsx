import Btn from '../buttons/Btn';
import IconLogo from '../icons/IconLogo';
import IconPlus from '../icons/IconPlus';
import './Topbar.scss';

export default function Topbar(props) {
    return <div className={props.className ? `topbar ${props.className}` : "topbar"}>
        <IconLogo
            className='logo-topbar'
            size='x-small'
            fill='orange'
        />
        <Btn className='btn-topbar' type='btn-secundary' size='btn-small'>
            <IconPlus size='xx-small' fill='gray__darker'/>
        </Btn>
    </div>
}