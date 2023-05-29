import IconSearch from '../icons/IconSearch';
import InputForm from '../inputs/InputForm';
import './Searcher.scss';

    function Searcher({ className }) {
        return (
            <>
                <div className={className ? `searcher ${className}` : "searcher"}>
                    <InputForm type='text' className='searcher__bar'/>
                    <button>
                        <IconSearch fill='white'/>
                    </button>
                </div>
            </>
        )
    }

export default Searcher