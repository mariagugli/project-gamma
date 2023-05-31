import { useState } from 'react';
import './Inputs.scss';
import { Link } from 'react-router-dom';


export default function InputToggleSwitch (props) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        
        if (!checked === true) {
            <Link to="/" />
        } else return
    }


    return <label className={props.switch ? `switch ${props.switch}` : "switch"}>
        <input type='checkbox'onChange={handleChange}></input>
        <span className={props.slider ? `slider ${props.slider}` : "slider"}></span>
    </label>
}
