import { Link } from 'react-router-dom';
import './Btn.scss';

export default function Btn(props) {
    return <>
        {props.isLink ? 
            <Link 
                to={props.to} 
                target={props.target ? props.target : '_self'} 
                className={`linkbtn ${props.type} ${props.size ? `btn-${props.size}` : "btn-default" }`}>

                {props.icon ? props.icon : ''}
                {props.text ? props.text : ''}
                {props.children}

            </Link>
        :
            <button 
                value={props.value}
                onClick={props.onClick}
                className={`btn ${props.type} ${props.size ? `btn-${props.size}` : "btn-default" }`} 
                type="button" 
                disabled={props.status === 'disable' ? true : false}>

                {props.icon ? props.icon : ''}
                {props.text ? props.text : ''}
                {props.children}

            </button>
        }
    </>
}



