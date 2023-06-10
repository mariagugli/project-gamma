import IconSearch from '../icons/IconSearch';
import Input from '../inputs/Input';
import './Searcher.scss';

export default function Searcher(props) {
    return <>
        <div className={props.className ? `searcher ${props.className}` : "searcher"}>
            <Input 
                isInputForm={true} 
                type="searcher__bar" 
                inputtype='text' 
                placeholder={props.placeholder}
                inputvalue={props.inputvalue !== undefined ? props.inputvalue : ''}
                onChange={props.onChange !== undefined ? props.onChange : ''}
                onKeyPress={props.onKeyPress !== undefined ? props.onKeyPress : ''}
            />
                
            <button onClick={props.handleClick}>
                <IconSearch size="icon-x-small" fill='fill-white'/>
            </button>
        </div>
    </>
}
