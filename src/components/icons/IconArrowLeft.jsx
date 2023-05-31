import './Icon.scss';

export default function IconArrowLeft(props) {
    return <>
        <svg className={ `${props.type !== undefined ? props.type : ''} ${props.size}` } viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill} d="M32 14V18H8L19 29L16.16 31.84L0.32 16L16.16 0.160004L19 3L8 14H32Z"/>
        </svg>
        {props.children}
    </>
}