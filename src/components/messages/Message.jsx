import './Message.scss';

export default function Message(props) {
    return <>
        <div className={`${props.type} ${props.size}`}>{props.children}</div>
    </>
}
