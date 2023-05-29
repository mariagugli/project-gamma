import './Icon.scss';

    function IconArrowRight({fill, size}) {
        return (
            <>
                <svg sizeicon={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill={fill ? fill : "black"} d="M0 14V18H24L13 29L15.84 31.84L31.68 16L15.84 0.160004L13 3L24 14H0Z"/>
                </svg>
                
            </>
        )
    }

export default IconArrowRight