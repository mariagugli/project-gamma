import './Card.scss';

export default function Card(props) {
    return <div className={`${props.moreclass ? props.moreclass : ''} ${props.type ? props.type : ''}`}>
        {props.children}
    </div>
}

