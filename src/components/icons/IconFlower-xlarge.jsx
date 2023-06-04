import './Icon.scss';

export default function IconFlowerXlarge(props) {
    return <div className={`${props.type !== undefined ? props.type : ''} ${props.size ? props.size : "icon-100"}`}>
        <svg className={ props.svgtype ? props.svgtype : "" } viewBox="0 0 315 66" xmlns="http://www.w3.org/2000/svg">
            <path d="M315 21.229C315 9.50426 304.308 0 291.12 0H290.711H23.4537C10.4652 0.218682 1.40874e-05 9.63042 1.40874e-05 21.229C-0.00158367 25.4417 1.39591 29.5529 4.00275 33.0042C1.3927 36.4541 -0.00511912 40.5662 1.40874e-05 44.7794C1.40874e-05 56.378 10.4471 65.8065 23.4355 66H290.711H291.12C304.308 66 315 56.4957 315 44.771C315.002 40.5569 313.601 36.4449 310.988 32.9958C313.596 29.5476 314.996 25.4397 315 21.229Z" className={props.fill}/>
        </svg>
        {props.children}
    </div>
}


