import { useTranslation } from 'react-i18next';
import Btn from '../buttons/Btn';
import './Notification.scss';

export default function Notification(props) {

    const { t } = useTranslation();

    return <div className={props.className ? `notification ${props.className}` : "notification"}>
        <h4 className={props.nameclass ? `notification__name ${props.nameclass}` : "notification__name"}>{props.name}</h4>
        <p className={props.textclass ? `notification__text ${props.textclass}` : "notification__text"}>{t("generalParts.notification.work.text")}</p>
        <div className={props.btnboxclass ? `notification__btnbox ${props.btnboxclass}` : "notification__btnbox"}>
            <Btn isLink={true} to={props.to} type='btn btn-primary btn-notification' size='small'>
                {t("generalParts.notification.work.btn")}
            </Btn>
        </div>
                    
    </div>
}