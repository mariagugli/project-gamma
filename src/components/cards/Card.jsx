import './Card.scss';

export default function Card(props) {
    return <div className={props.type ? `${props.type}` : ''}>
        {props.children}
    </div>
}

