
import './App.css';
import Mainarea from './components/Mainarea';
import Sidebar from './components/Sidebar';
import axios, { Axios } from 'axios';
import { useState } from 'react';

function App() {
  
  const [weather, setweather] = useState([]);
  const [weatherl, setweatherl] = useState('');
  //get users current location
  const GetLocation = ()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
      alert('Device not supported')
    }
  }
  

  
  const ShowPosition = (position)  => {
    const lat = position.coords.latitude; 
    const long = position.coords.longitude ;  
    //putting the users information in a state

    axios.get(`https://lawblazecorsproxy.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
      .then(function (response) {
        // handle success
        
        //storing info 
        const weatherInfo = response.data
        const woeid = weatherInfo[5].woeid 
        
      
        axios.get(`https://lawblazecorsproxy.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
        .then((res) => {
          setweatherl(res.data.title)
           const getWeather = res.data.consolidated_weather
            setweather(getWeather)
            
        })
        .catch(err => console.log(err))

  
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

          

  }

  return (
    <div className="App">
    <Sidebar weather={weather} weatherl={weatherl} />
    <Mainarea weather={weather} />
    <div onClick={GetLocation}>click</div>
    {console.log(weather)}

    {/* air_pressure: 1008
    applicable_date: "2022-05-07  "
    created: "2022-05-07T17:50:26.137080Z"
    humidity: 35
    id: 6651961236520960
    max_temp: 39.75
    min_temp: 27.25
    predictability: 70
    the_temp: 39.175
    visibility: 10.629486300007954
    weather_state_abbr: "lc"
    weather_state_name: "Light Cloud"
    wind_direction: 267.0176065695496
    wind_direction_compass: "W"
    wind_speed: 7.713472424462471 */}
    </div>
  );
}

export default App;
