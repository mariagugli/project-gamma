import './Icon.scss';

    function IconArrowDown({ fill, size }) {
        return (
            <>
                <svg sizeicon={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill={fill} d="M14 0H18V24L29 13L31.84 15.84L16 31.68L0.16 15.84L3 13L14 24V0Z"/>
                </svg>
            </>
        )
    }

export default IconArrowDown