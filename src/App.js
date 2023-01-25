import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [city, setCity] = useState("")
    const [cities, setCities] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    
    const getInfo = async () => {
        try{
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${city}`)
            let data = await response.json()

            if(!data.location){
                throw new Error(data.error.message)
            }
            setCities([...cities, data])
            setErrorMessage("")
        } catch(e){
            setErrorMessage(e.message)
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getInfo()
        }
    }

    return (
    <div className="app">
        <div className="input">
            <h1>Weather</h1>
            <input placeholder="Search for a city" value={city} onChange={e => setCity(e.target.value)} onKeyDown={handleKeyDown}></input>
            <i className="bi bi-search" onClick={getInfo}></i>
            <p className="error-message">{errorMessage}</p>
        </div>
        <div className="cards">
            {cities.map(item => <Card city={item}/>).reverse()}
        </div>
    </div>
    )
}

export default App;
