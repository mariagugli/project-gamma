import './Btn.scss';

    function BtnText({ icon, text, variant, size }) {
        return (
            <>
                <button 
                    sizebtn={size ? size : "default"} 
                    className={variant ? `btn ${variant}` : "btn"}
                >
                    {icon}
                    {text}

                </button>
                
            </>
        )
    }

export default BtnText