import './Btn.scss';

    function Btn() {
        return (
            <>
                <div className='btn-group'>
                    <button className='btn color-bg-orange'>Enviar</button>
                    <button className='btn btn-secundary'>Enviar</button>
                    <button className='btn btn-calltoaction color-bg-purple'>Enviar</button>
                </div>
                <div className='btn-group'>
                    <a href='#' className='btn text-black color-bg-orange'>Enviar</a>
                    <a href='#' className='btn text-black color-bg-purple'>Enviar</a>
                    <a href='#' className='btn btn-calltoaction text-black color-bg-yellow'>Enviar</a>
                </div>
                
            </>
        )
    }

export default Btn