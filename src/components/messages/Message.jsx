import './Message.scss';

    function Message({ variant, size, text }) {
        return (
            <>
                <div className={variant} sizemessage={size}>{text}</div>
            </>
        )
    }

export default Message