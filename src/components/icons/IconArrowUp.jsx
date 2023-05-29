import './Icon.scss';

    function IconArrowUp({ fill, size }) {
        return (
            <>
                <svg sizeicon={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill={fill} d="M18 32H14V8.00001L3 19L0.160004 16.16L16 0.320007L31.84 16.16L29 19L18 8.00001V32Z"/>
                </svg>
            </>
        )
    }

export default IconArrowUp
