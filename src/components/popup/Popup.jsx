import './Popup.scss';

export default function Popup(props) {
    return <>
        <div className={`${props.className ? props.className : ''} ${props.type ? `popup popup-${props.type}` : 'popup'} ${props.size ? `popup-${props.size}` : ''}`}>{props.children}</div>
    </>
}