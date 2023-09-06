import { useState } from 'react';
import axios from 'axios';
import IconSun from '../icons/IconSun';
import Searcher from '../searcher/Searcher';
import './Weather.scss';
import { useTranslation } from 'react-i18next';

export default function Weather(props) {
    const apiKey = "3f2a410bf310fbbdf994fd9be0582395"
    const [ data, setData ] = useState({})
    const [ location, setLocation ] = useState ('')
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`

    const searchLocation = (event) => {
        if(event.key === 'Enter') {
            axios.get(apiUrl).then((Response) => {
                setData(Response.data)
                console.log(Response.data)
            })
        }
    }
    const handleSearchLocation = () => {
        axios.get(apiUrl).then((Response) => {
            setData(Response.data)
            console.log(Response.data)
        })
    }

    const { t } = useTranslation();

    return <article className='weather__app'>
        <Searcher 
            placeholder="Busca una ciudad"
            inputvalue={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            handleClick={handleSearchLocation}
        />

        {data.name !== undefined && 
            <div className={props.className ? `weather__info ${props.className}` : "weather__info"}>
                <div className='weather__info--text'>
                    <h2 className='weather__city'>{data.name}</h2>
                    {data.main 
                    ?  
                        <p className="weather__temp">{data.main.temp}°C</p> 
                    : null}
                
                    <div className='weather__info--extratext'>
                        {data.weather 
                        ? 
                            <div className='weather__extratext--brief'>
                                <img className="weather__icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icono del tiempo" />
                                <p className="weather__description">{data.weather[0].main}</p>
                            </div>
                        
                        : null}
                        
                        {data.main 
                        ? 
                            <p className="weather__humidity">{t("generalParts.notification.weather.humidity")}: {data.main.humidity}%</p> 
                        : null}
                        
                        {data.wind 
                        ? 
                            <p className="weather__wind">{t("generalParts.notification.weather.windSpeed")}: {data.wind.speed}km/h</p> 
                        : null}
                    </div>
                </div>
            </div>
        }
        
    </article>
}
