import React, { useState, useEffect } from "react";
import './Body.css';
import search_icon from './Images/search.png';
import Clear_icon from './Images/clear.png';
import Cloud_icon from './Images/cloud-computing.png';
import Drizzle_icon from './Images/drizzle.png';
import Rain_icon from './Images/rain.png';
import Snow_icon from './Images/snow.png';
import Cloud1_icon from './Images/img1.png';
import Cloud2_icon from './Images/img2.png';
import Cloud3_icon from './Images/img3.png';
import Cloud4_icon from './Images/img4.png';
import Cloud5_icon from './Images/img5.png';
import Cloud6_icon from './Images/img6.png';

function Body() 
{
    const api_key = "9d2c282833cb71d207fb02e7c7e9ce8a";

    const [wicon,setWicon] = useState(Cloud_icon);
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
    });

    const [currentDate, setCurrentDate] = useState
    ({
        day: "",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        month: "",
        dayOfWeek: "",
    });

    const search = async () => 
    {
        const element = document.getElementsByClassName("searchbar");
        if (element[0].value === "") 
        {
            return 0;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        try
        {
            let response = await fetch(url);

            if (!response.ok) 
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let data = await response.json();

            if (data.main) 
            {
                setWeatherData
                ({
                    humidity: data.main.humidity,
                    windSpeed: Math.floor(data.wind.speed),
                    temperature: Math.floor(data.main.temp),
                    location: data.name,
                    description: data.weather[0].main,
                    temp_min: Math.floor(data.main.temp_min),
                    temp_max: Math.floor(data.main.temp_max),
                    icon: data.weather[0].icon
                });
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
 


    useEffect(() => 
    {
        const currentDate = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric', };

        setCurrentDate
        ({
            day: currentDate.getDate(),
            days: currentDate.getDays(),
            month: currentDate.toLocaleDateString('en-US', { month: 'long' }),
            dayOfWeek: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),

        });
    }, []);

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
                            <h1>{weatherData.location}</h1>
                        </div>
                        <p weather-forecast-date>{currentDate.dayOfWeek}, {currentDate.month} {currentDate.day}</p>
                        <p>{weatherData.description}</p>
                    </div>
                    <div className="current-weather-info-wrapper">
                        <div className="units">{weatherData.temperature}°C</div>
                        <ul>
                            <li>Humidity: <span className="humidity-percent">{weatherData.humidity}</span>%</li>
                            <li>Wind: <span className="wind-rate">{weatherData.windSpeed}</span>km/h</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className='day-weather'>
                    <div className='cloud'>
                        <h4>Thu</h4>
                        <img src={Cloud1_icon} alt="cloud1-icon"></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                    <div className='cloud'>
                        <h4>Fri</h4>
                        <img src={Cloud2_icon}></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                    <div className='cloud'>
                        <h4>Sat</h4>
                        <img src={Cloud3_icon}></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                    <div className='cloud'>
                        <h4>Sun</h4>
                        <img src={Cloud4_icon}></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                    <div className='cloud'>
                        <h4>Mon</h4>
                        <img src={Cloud5_icon}></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                    <div className='cloud'>
                        <h4>Tue</h4>
                        <img src={Cloud6_icon}></img>
                        <div className="forecastMax-Min_temp">
                        <p> {weatherData.temp_min}</p>
                        <p> {weatherData.temp_max}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;
