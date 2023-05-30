import IconSearch from '../icons/IconSearch';
import InputForm from '../inputs/InputForm';
import './Searcher.scss';

export default function Searcher(props) {
    return <>
        <div className={props.className ? `searcher ${props.className}` : "searcher"}>
            <InputForm type="searcher__bar" inputtype='text'/>
            <button>
                <IconSearch size="xx-small" fill='white'/>
            </button>
        </div>
    </>
}
