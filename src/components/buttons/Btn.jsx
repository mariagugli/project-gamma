import './Btn.scss';

    function Btn({ icon, text, variant, size }) {
        return (
            <>
                <button 
                    className={variant ? `btn ${variant}` : "btn"}
                    sizebtn={size ? size : "default"}
                >
                    {icon}
                    {text}
                </button>
                
            </>
        )
    }

export default Btn