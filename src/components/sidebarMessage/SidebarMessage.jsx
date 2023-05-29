import Btn from '../buttons/Btn';
import './SidebarMessage.scss';

    function SidebarMessage({ name, message, btntext, className, classNamems, classNamename, classNamebox }) {
        return (
            <>
                <div className={className ? `sidebar__message ${className}` : "sidebar__message"}>
                    <h4 className={classNamename ? `sidebarms__name ${classNamename}` : "sidebarms__name"}>{name}</h4>
                    <p className={classNamems ? `sidebarms_message ${classNamems}` : "sidebarms__message"}>{message}</p>
                    <div className={classNamebox ? `sidebar__btnbox ${classNamebox}` : "sidebar__btnbox"}>
                        <Btn variant='btn-primary' size='small' text={btntext}/>
                    </div>
                    
                </div>
            </>
        )
    }

export default SidebarMessage