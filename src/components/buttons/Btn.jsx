import './Btn.scss';

    function Btn() {
        return (
            <>
                <div className='btn-group'>
                    <button className='btn color-bg-blue'>Enviar</button>
                    <button className='btn btn-secundary'>Enviar</button>
                    <button className='btn btn-calltoaction color-bg-blueviolet'>Enviar</button>
                </div>
                <div className='btn-group'>
                    <a href='#' className='btn color-black color-bg-blue'>Enviar</a>
                    <a href='#' className='btn color-black color-bg-blueviolet'>Enviar</a>
                    <a href='#' className='btn btn-calltoaction color-black color-bg-yellow'>Enviar</a>
                </div>
                
            </>
        )
    }

export default Btn