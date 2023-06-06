import './Message.scss';

export default function Message(props) {
    return <>
        <div className={`${props.className ? props.className : ''} ${props.type ? `ms-${props.type}` : ''} ${props.size ? `ms-${props.size}` : ''}`}>{props.children}</div>
    </>
}
