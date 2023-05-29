import './Icon.scss';

    function IconMinus({ fill, size }) {
        return (
            <>
                <svg sizeicon={size} viewBox="0 0 28 4" xmlns="http://www.w3.org/2000/svg">
                    <path fill={fill}  d="M28 4H0V0H28V4Z" />
                </svg>
            </>
        )
    }

export default IconMinus
