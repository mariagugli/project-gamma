import './Card.scss';

export default function Card(props) {
    return <>
        <div className={props.card ? `${props.card}` : ''}>{props.children}</div>
    </>
}

