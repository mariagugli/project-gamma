import './Icon.scss';

export default function IconSearch(props) {
    return <>
        <svg className={`${props.type !== undefined ? props.type : ''} ${props.size}`} viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
            <path className={props.fill} d="M13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.22 24.82 19.18 22.88 21.46L23.42 22H25L35 32L32 35L22 25V23.42L21.46 22.88C19.18 24.82 16.22 26 13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0ZM13 4C8 4 4 8 4 13C4 18 8 22 13 22C18 22 22 18 22 13C22 8 18 4 13 4Z"/>
        </svg>
        {props.children}
    </>
}