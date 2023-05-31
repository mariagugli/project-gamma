import './Icon.scss';

export default function IconSun(props) {
    return <>
        <svg className={ `${props.type !== undefined ? props.type : ''} ${props.size}` } viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill} d="M5.1 36.18L7.92 39L11.52 35.42L8.68 32.58M22 10C15.38 10 10 15.38 10 22C10 28.62 15.38 34 22 34C28.62 34 34 28.62 34 22C34 15.36 28.62 10 22 10ZM38 24H44V20H38M32.48 35.42L36.08 39L38.9 36.18L35.32 32.58M38.9 8L36.08 5.2L32.48 8.78L35.32 11.62M24 0H20V6H24M11.52 8.78L7.92 5.2L5.1 8L8.68 11.62L11.52 8.78ZM0 24H6V20H0M24 38H20V44H24"/>
        </svg>
        {props.children}
    </>
}