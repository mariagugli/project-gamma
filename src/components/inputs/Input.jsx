import './Inputs.scss';

export default function Input (props) {
    
    return (
        <div className={`${props.type} ${props.size ? props.size : "input-default"}`}>
            {props.isToggle ? 

                <label className={props.switch ? `switch ${props.switch}` : "switch"}>
                    <input type='checkbox'onChange={props.onChange}></input>
                    <span className={props.slider ? `slider ${props.slider}` : "slider"}></span>

                </label>
            
            : props.isInputForm ? 
                <>
                    <label>{props.label !== undefined ? props.label : ''}</label>
                    <input 
                        className={props.inputclass !== undefined ? `input ${props.inputclass}` : "input"}
                        type={props.inputtype !== undefined ? props.inputtype : "text"}
                        placeholder={props.placeholder !== undefined ? props.placeholder : ''}
                    >
                    </input>
                </>

            : props.children
                
            }
        </div>
    )
}