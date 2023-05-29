import Searcher from '../searcher/Searcher';
import Weather from '../weather/Weather';
import './SidebarWeather.scss';

    function SidebarWeather({ className }) {
        return (
            <>
                <div className={className ? `sidebar__message ${className}` : "sidebar__weather"}>
                    <Searcher />
                    <Weather />
                </div>
            </>
        )
    }

export default SidebarWeather