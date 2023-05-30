import './Tag.scss';

export default function Tag(props) {
    return <>
        <div className={`${props.type} ${props.size}`}>{props.type}</div>
    </>
}
