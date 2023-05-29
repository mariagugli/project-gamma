import './Icon.scss';

    function IconBtnText({variantbg, variantbr, icon}) {
        return (
            <>
                <span className={variantbg}>
                    <span className={variantbr}>
                        {icon}
                    </span>
                </span>
                
            </>
        )
    }

export default IconBtnText