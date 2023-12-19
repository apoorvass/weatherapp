import React, { useState, useEffect } from "react";
import './Body.css';
import search_icon from './Images/search.png';
import Location_icon from './Images/location.png';
import Clear_icon from './Images/clear.png';
import Cloud_icon from './Images/cloud-computing.png';
import Drizzle_icon from './Images/drizzle.png';
import Rain_icon from './Images/rain.png';
import Snow_icon from './Images/snow.png';
import {Iconchanger} from './icons/iconchanger'

function Body() 
{
    const api_key = "9d2c282833cb71d207fb02e7c7e9ce8a";

    const [wicon,setWicon] = useState(Cloud_icon);
    const[mon_icon, setmonicon] = useState(Cloud_icon);
    const[tue_icon, settueicon] = useState(Cloud_icon);
    const[wed_icon, setwedicon] = useState(Cloud_icon);
    const[thu_icon, setthuicon] = useState(Cloud_icon);
    const[fri_icon, setfriicon] = useState(Cloud_icon);

    const [weatherData, setWeatherData] = useState
    ({
        humidity: "",
        windSpeed: "",
        temperature: "",
        location: "",
        description: "",
        temp_min: "",
        temp_max: "",
        icon: "01d",
        date: {},

        Mon_icon: "01d",
        Mon_temp: "",
        Mon_dt:{},
        
        Tue_icon: "01d",
        Tue_temp: "",
        Tue_dt:{},
        
        Wed_icon: "01d",
        Wed_temp: "",
        Wed_dt:{},
        
        Thu_icon: "01d",
        Thu_temp: "",
        Thu_dt:{},
        
        Fri_icon: "01d",
        Fri_temp: "",
        Fri_dt:{},
    });
    
    const [currentDate, setCurrentDate] = useState
    ({
        day: "",
        month: "",
        dayOfWeek: ""
    });

    let [i, seti] = useState(1)

    console.log(i)

    const search = async () => 
    {
        const element = document.getElementsByClassName("searchbar");
        if (element[0].value === "") 
        {
            return 0;
        }

        const url = `https://api.openweathermap.org/data/2.5/forecast/?q=${element[0].value}&appid=${api_key}`;
        

        try
        {
            let response = await fetch(url);

            if (!response.ok) 
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let data = await response.json();

            console.log(data)

            if (data) 
            {
            setWeatherData
                ({
                    location: data.city.name,
                    humidity: data.list[i].main.humidity,
                    windSpeed: Math.floor(data.list[i].wind.speed),
                    temperature:Math.floor((data.list[i].main.temp)-273.15) ,
                    description: data.list[i].weather[0].main,
                    icon: data.list[i].weather[0].icon,
                    date : DTCheck(data.list[i].dt_txt),

                    Mon_icon: data.list[5].weather[0].icon,
                    Mon_temp: Math.floor((data.list[5].main.temp)-273.15),  
                    Mon_dt: DTCheck(data.list[5].dt_txt),
                    
                    Tue_icon: data.list[13].weather[0].icon,
                    Tue_temp: Math.floor((data.list[13].main.temp)-273.15),
                    Tue_dt: DTCheck(data.list[13].dt_txt),
                    
                    Wed_icon: data.list[21].weather[0].icon,
                    Wed_temp: Math.floor((data.list[21].main.temp)-273.15),
                    Wed_dt: DTCheck(data.list[21].dt_txt),
                    
                    Thu_icon: data.list[29].weather[0].icon,
                    Thu_temp: Math.floor((data.list[29].main.temp)-273.15),
                    Thu_dt: DTCheck(data.list[29].dt_txt),
                    
                    Fri_icon: data.list[37].weather[0].icon,
                    Fri_temp: Math.floor((data.list[37].main.temp)-273.15),
                    Fri_dt: DTCheck(data.list[37].dt_txt),   
                })
            }
            else
            {
                console.error("Unexpected data format:", data);
            }
        }
        catch (error) 
        {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => 
    {
        if (weatherData.icon === "01d" || weatherData.icon === "01n") {
            setWicon(Clear_icon);
        } 
        else if (weatherData.icon === "02d" || weatherData.icon === "02n") {
            setWicon(Cloud_icon);
        } 
        else if (weatherData.icon === "03d" || weatherData.icon === "03n") {
            setWicon(Drizzle_icon);
        }
        else if (weatherData.icon === "04d" || weatherData.icon === "04n") {
            setWicon(Drizzle_icon);
        } 
        else if (weatherData.icon === "09d" || weatherData.icon === "09n") {
            setWicon(Rain_icon);
        } 
        else if (weatherData.icon === "10d" || weatherData.icon === "10n") {
            setWicon(Rain_icon);
        } 
        else if (weatherData.icon === "13d" || weatherData.icon === "13n") {
            setWicon(Snow_icon);
           
        } 
        else {
            setWicon(Clear_icon);
        }

    },[weatherData])

    
    useEffect(()=>{
        Iconchanger({weathericon:weatherData.Mon_icon,seticon : setmonicon});
        Iconchanger({weathericon:weatherData.Tue_icon,seticon : settueicon});
        Iconchanger({weathericon:weatherData.Wed_icon,seticon : setwedicon});
        Iconchanger({weathericon:weatherData.Thu_icon,seticon : setthuicon});
        Iconchanger({weathericon:weatherData.Fri_icon,seticon : setfriicon});
    },[weatherData])


    useEffect(() => 
    {
        const currentDate = new Date(
            "2023-11-23 09:00:00"
        );
        const options = { weekday: 'long', month: 'long', day: 'numeric', };

        setCurrentDate
        ({
            day: currentDate.getDate(),
            month: currentDate.toLocaleDateString('en-US', { month: 'long' }),
            dayOfWeek: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),

        });
    }, []);

    function DTCheck(dt){
        const currentDate = new Date(
           dt
        );  
        let dT =
        {
            day: currentDate.getDate(),
            month: currentDate.toLocaleDateString('en-US', { month: 'long' }),
            dayOfWeek: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),

        };

        return dT;
    }

    return (
        <div className='main-container'> 
            <div className='frontpage'>

               <div className="search">
                    <input className='searchbar' type='text' placeholder='Search'></input>
                    <img src={search_icon} className="search-icon" alt="search-icon" onClick={search}></img>
                </div>

                <div className='main'>
                    <img src={wicon} className='current-weather-icon' alt="current-weather-icon"></img>
                    <div className='style1'>
                        <div className="weather-location">
                            <img src={Location_icon} className="location-icon"></img>
                            <h1>{weatherData.location}</h1>
                        </div>

                        <div className= "weather-forecast-date">
                            <p> {weatherData.date.dayOfWeek} {weatherData.date.day} {weatherData.date.month}</p>
                            <p>{weatherData.description}</p>
                        </div>
                    </div>

                    <div className="current-weather-info-wrapper">
                        <div className="units">{weatherData.temperature}°C</div>
                        <ul>
                            <li>Humidity: <span className="humidity-percent">{weatherData.humidity}</span>%</li>
                            <li>Wind: <span className="wind-rate">{weatherData.windSpeed}</span>km/h</li>
                        </ul>
                    </div>
                </div>
                <hr className="hrline"></hr>
                <div className='day-weather'>
                    
                    <button className="forecast-button"  onClick={() => {
                        return( seti(5), search() );
                    }}>
                        <div className='cloud'>
                            <h4>{weatherData.Mon_dt.day}</h4>
                            <img src={mon_icon} height={60} alt="cloud1-icon"></img>
                            <div className="forecast-temp">
                                <p>{weatherData.Mon_temp}°C</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(13), search() );
                    }}>
                        <div className='cloud'>
                            <h4>{weatherData.Tue_dt.day}</h4>
                            <img src={tue_icon} height={60}></img>
                            <div className="forecast-temp">
                                <p>{weatherData.Tue_temp}°C</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(21), search() );
                    }}>
                        <div className='cloud'>
                            <h4>{weatherData.Wed_dt.day}</h4>
                            <img src={wed_icon} height={60}></img>
                            <div className="forecast-temp">
                            <p>{weatherData.Wed_temp}°C</p>
                            </div>
                        </div>
                    </button>
                    
                    <button className="forecast-button" onClick={() => {
                        return( seti(29), search() );
                    }}>
                        <div className='cloud'>
                            <h4>{weatherData.Thu_dt.day}</h4>
                            <img src={thu_icon} height={60}></img>
                            <div className="forecast-temp">
                                <p>{weatherData.Thu_temp}°C</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(37), search() );
                    }}>
                        <div className='cloud'>
                            <h4>{weatherData.Fri_dt.day}</h4>
                            <img src={fri_icon} height={60}></img>
                            <div className="forecast-temp">
                             <p>{weatherData.Fri_temp}°C</p>
                            </div>
                        </div>
                    </button>    
                </div>
            </div>
        </div>
    );
}
export default Body;
