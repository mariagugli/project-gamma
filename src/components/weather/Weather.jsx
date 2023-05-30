import './Weather.scss';

export default function Weather(props) {
    return <div className={props.className ? `weather ${props.className}` : "weather"}>
        <h2 className='city'>Valencia</h2>
        <div className="temp">30°C</div>
        <img src="" alt="" />
        <div className="description">Sunny</div>
        <div className="humidity">Humedad: 40%</div>
        <div className="wind">Velocidad del viento: 3.4km/h</div>
    </div>
}
