import './Tag.scss';

    function Tag({ variant, size }) {
        return (
            <>
                <div className={variant} sizetag={size}>{variant}</div>
            </>
        )
    }

export default Tag