import './Card.scss';

export default function Card(props) {
    return <div className={props.type ? `card ${props.type}` : "card"}>
        {props.children}
    </div>
}

