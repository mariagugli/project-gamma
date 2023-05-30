import './Inputs.scss';

export default function Input (props) {
    return (
        <div className={`${props.type} ${props.size ? props.size : "input-default"}`}>
            {props.children ? props.children : 
                <>
                    <label>{props.label !== undefined ? props.label : ''}</label>
                    <input 
                        className={props.inputclass !== undefined ? `input ${props.inputclass}` : "input"}
                        type={props.inputtype !== undefined ? props.inputtype : "text"}
                        placeholder={props.placeholder !== undefined ? props.placeholder : ''}
                    >
                    </input>
                </>
                
            }
        </div>
    )
}