import './Icon.scss';

export default function IconMinus(props) {
    return <>
        <svg className={`${props.type !== undefined ? props.type : ''} ${props.size}`} viewBox="0 0 28 4" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill}  d="M28 4H0V0H28V4Z" />
        </svg>
        {props.children}
    </>
}
