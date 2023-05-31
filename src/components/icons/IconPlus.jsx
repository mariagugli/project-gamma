import './Icon.scss';

export default function IconPlus(props) {
    return <>
        <svg className={ `${props.type !== undefined ? props.type : ''} ${props.size}` } viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill} d="M28 16H16V28H12V16H0V12H12V0H16V12H28V16Z"/>
        </svg>
    </>
}


