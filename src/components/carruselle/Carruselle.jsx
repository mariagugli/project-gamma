import './Carruselle.scss';

export default function Carruselle(props) {
    return <div className={props.type ? `card ${props.type}` : "card"}>
        {props.children}
    </div>
}
