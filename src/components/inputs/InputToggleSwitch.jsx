import './Inputs.scss';

export default function InputToggleSwitch (props) {
    return <label className={props.switch ? `switch ${props.switch}` : "switch"}>
        <input type='checkbox'></input>
        <span className={props.slider ? `slider ${props.slider}` : "slider"}></span>
    </label>
}
