import './Icon.scss';

export default function IconBtnText(props) {
    return <span className={props.bg}>
        <span className={props.br}>
            {props.children}
        </span>
    </span>
}