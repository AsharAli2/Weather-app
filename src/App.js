import { useState } from 'react';
import './App.css';
import { WEATHER_API_URL,WEATHER_API_KEY } from './api';
import Search from './components/Search';
import Currentweather from './components/weather/Currentweather';
import Forecast from './components/forecast/Forecast';
import Default from './components/Background/Default';
import Background from './components/Background/Background';
// import Default from './components/Default';


function App() {
const [currentweather, setCurrentWeather] = useState(null)
const [forecast, setForecast] = useState(null)

  const handleOnSearchChange=(searchData)=>{
  console.log(searchData);
    const [lat,lon]=searchData.value.split(" ")
    const currentweatherfetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastfetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  
    Promise.all([currentweatherfetch,forecastfetch])
    .then(async (Response)=>{
      const weatherresponse = await Response[0].json();
      const forecastresponse = await Response[1].json();

      setCurrentWeather({city:searchData.label,...weatherresponse})
      setForecast({city:searchData.label,...forecastresponse})

    })
    .catch((err)=>console.log(err))
  }
  console.log(currentweather);
  console.log(forecast);
  return (
    <>
    {currentweather?<Default/>:<Background data={currentweather}/>}
    <Search onSearchChange={handleOnSearchChange}/>
    {currentweather && <Currentweather data={currentweather}/>}
    {forecast &&<Forecast data={forecast}/>}
    
    </>
  );
}

export default App;
