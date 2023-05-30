import Btn from '../buttons/Btn';
import './Notification.scss';

export default function Notification(props) {
    return <div className={props.className ? `notification ${props.className}` : "notification"}>
        <h4 className={props.nameclass ? `notification__name ${props.nameclass}` : "notification__name"}>{props.name}</h4>
        <p className={props.textclass ? `notification__text ${props.textclass}` : "notification__text"}>{props.text}</p>
        <div className={props.btnboxclass ? `notification__btnbox ${props.btnboxclass}` : "notification__btnbox"}>
            <Btn type='btn-primary' size='btn-small'>
                Contáctame
            </Btn>
        </div>
                    
    </div>
}