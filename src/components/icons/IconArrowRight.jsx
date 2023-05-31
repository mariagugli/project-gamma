import './Icon.scss';

export default function IconArrowRight(props) {
    return <>
        <svg className={ `${props.type !== undefined ? props.type : ''} ${props.size}` } viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill} d="M0 14V18H24L13 29L15.84 31.84L31.68 16L15.84 0.160004L13 3L24 14H0Z"/>
        </svg>
        {props.children}
    </>
}