import "./Card.css"
import sun from "../assets/sun.png"

const Card = ({city}) => {
    const cardTime = Number(`${city.location.localtime[11]}${city.location.localtime[12]}`)

    if(7 <= cardTime && cardTime <= 18){
        return(
            <div className="card-day">
                <div className="left">
                    <div className="city">{city.location.name}</div>
                    <div className="region">{city.location.region}</div>
                    <div className="localtime">{city.location.localtime}</div>
                </div>
                <div className="right">
                    <div className="sun"><img src={sun} alt=""/></div>
                    <div className="temp_c">{city.current.temp_c}ºC</div>
                    <div className="temp_f">{city.current.temp_f}ºF</div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="card-night">
                <div className="left">
                    <div className="city">{city.location.name}</div>
                    <div className="region">{city.location.region}</div>
                    <div className="localtime">{city.location.localtime}</div>
                </div>
                <div className="right">
                    <div className="sun"><img src={sun} alt=""/></div>
                    <div className="temp_c">{city.current.temp_c}ºC</div>
                    <div className="temp_f">{city.current.temp_f}ºF</div>
                </div>
            </div>
        )
    }
}

export default Card