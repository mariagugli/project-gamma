import './Icon.scss';

export default function IconDoc(props) {
    return <div className={`${props.type !== undefined ? props.type : ''} ${props.size ? props.size : "doc-small"}`}>
        <div className={props.classDoc ? `icon__doc ${props.classDoc}` : "icon__doc color-bg-blue__dark"}>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
            <span className={props.classLine ? `line__icon__doc ${props.classLine}` : "line__icon__doc color-bg-white"}></span>
        </div>
        {props.children}
    </div>
}