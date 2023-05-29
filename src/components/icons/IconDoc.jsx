import './Icon.scss';

    function IconDoc({ classDoc, classLine, size, text }) {
        return (
            <div sizeicondoc={size}>
                <div className={classDoc ? `icon__doc ${classDoc}` : "icon__doc color-bg-blue__dark"}>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                    <span className={classLine ? `line__icon__doc ${classLine}` : "line__icon__doc color-bg-white"}></span>
                </div>
                {text}
            </div>
        )
    }

export default IconDoc