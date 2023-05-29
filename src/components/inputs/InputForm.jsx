import './Inputs.scss';

    function InputForm ({ variant, size, type, className, label, placeholder }) {
        return (
            <div className={variant} sizeinput={size ? size : "default"}>
                <label>{label}</label>
                <input 
                    className={className ? `input ${className}` : "input"}
                    type={type}
                    placeholder={placeholder}
                >
            
                </input>
            </div>
        )
    }

export default InputForm