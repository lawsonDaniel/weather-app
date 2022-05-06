
import './App.css';
import Mainarea from './components/Mainarea';
import Sidebar from './components/Sidebar';
import axios, { Axios } from 'axios';
import { useState } from 'react';

function App() {
  
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
        const woeid = weatherInfo[0].woeid 
        
      
        axios.get(`https://lawblazecorsproxy.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
        .then((res) => {
           const getWeather = res.data.consolidated_weather
            console.log(getWeather)
            
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
      {/* <button onClick={GetLocation}>Show location</button> */}
    <Sidebar />
    <Mainarea weather={GetLocation}/>
    <div onClick={GetLocation}>click</div>
 
  
    </div>
  );
}

export default App;
