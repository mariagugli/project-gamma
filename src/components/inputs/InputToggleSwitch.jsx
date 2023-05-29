import './Inputs.scss';

    function InputToggleSwitch ({ variant, slider }) {
        return (
            <div>
                <label className={variant ? `switch ${variant}` : "switch"}>
                    <input type='checkbox'></input>
                    <span className={slider ? `slider ${slider}` : "slider"}></span>
                </label>

            </div>
            
        )
    }

export default InputToggleSwitch