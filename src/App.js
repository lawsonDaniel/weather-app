
import './App.css';
import Mainarea from './components/Mainarea';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import { useState,useEffect } from 'react';


function App() {
  
  const [weather, setweather] = useState([]);
  const [weatherl, setweatherl] = useState('');
  const [unit,setunit] = useState(false)
  const [location,setlocation] = useState([])
  const [search, setsearch] = useState(false);





  //get users current location
  const GetLocation = ()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
      alert('Device not supported')
    }
  }
    
  const  SearchForLocation =(location)=>{
   
    if(location){

      axios.get(`https://lawblazecorsproxy.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`).then((res)=>{
        
      if(res.data.length === 0){
          alert('No Data on location')
        }else{
          const datalocation = res.data
          setlocation(datalocation)
        }
       
      })
    }else{
      alert('please enter a location')
    }
   
  }

  const onClickedSearchLocation = (clickedloc)=>{
    axios.get(`https://lawblazecorsproxy.herokuapp.com/https://www.metaweather.com/api/location/${clickedloc}`)
    .then((res) => {
      setweatherl(res.data.title)
       const getWeather = res.data.consolidated_weather
        setweather(getWeather)
        
    })
    .catch(err => console.log(err))
    
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
        const woeid = weatherInfo[1].woeid 
        
    
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
        alert('Network Error')
      })

          

  }


  const ce = ()=>{
    if(!unit == true ){
      setunit(true)
    }
   
  }

  const fe = ()=>{
    if(unit == true ){
      setunit(!true)
    }
   
  }



  return (
    <div className="App">
     
    <Sidebar search={search} setsearch={setsearch}  location={location} onClickedSearchLocation={onClickedSearchLocation}  SearchForLocation={ SearchForLocation} weather={weather} weatherl={weatherl} unit={unit} />
    <Mainarea weather={weather} ce={ce} fe={fe} unit={unit} />
    {
      useEffect(()=>{
        GetLocation()
      },[])
    }
   


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
