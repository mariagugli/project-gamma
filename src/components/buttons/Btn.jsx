import './Btn.scss';

export default   function Btn(props) {
        return <button className={`btn ${props.type} ${props.size}`}> 
            {props.children}
        </button>
                
            
        
    }

