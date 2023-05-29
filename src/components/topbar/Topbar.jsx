import Btn from '../buttons/Btn';
import IconLogo from '../icons/IconLogo';
import IconPlus from '../icons/IconPlus';
import './Topbar.scss';

    function Topbar(className) {
        return (
            <div className={className ? `topbar ${className}` : "topbar"}>
                <IconLogo
                    className='logo-topbar'
                    size='x-small'
                    fill='orange'
                />
                <Btn className='btn-topbar' variant='btn-secundary' size='small' icon={<IconPlus size='xx-small' fill='gray__darker'/>}/>
            </div>
        )
    }

export default Topbar