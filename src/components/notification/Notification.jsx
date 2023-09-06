import { useTranslation } from 'react-i18next';
import Btn from '../buttons/Btn';
import './Notification.scss';

export default function Notification(props) {

    return <div className={props.className ? `notification ${props.className}` : "notification"}>
        <h4 className={props.nameclass ? `notification__name ${props.nameclass}` : "notification__name"}>{props.name}</h4>
        <p className={props.textclass ? `notification__text ${props.textclass}` : "notification__text"}>{props.text}</p>
        <div className={props.btnboxclass ? `notification__btnbox ${props.btnboxclass}` : "notification__btnbox"}>
            <Btn isLink={true} to={props.to} type='btn btn-primary btn-notification' size='small'>
                {props.btntext}
            </Btn>
        </div>
                    
    </div>
}