import React, { useState, useEffect } from "react";
import './Body.css';
import search_icon from './Images/search.png';
import Clear_icon from './Images/clear.png';
import Cloud_icon from './Images/cloud-computing.png';
import Drizzle_icon from './Images/drizzle.png';
import Rain_icon from './Images/rain.png';
import Snow_icon from './Images/snow.png';



function Body() 
{
    const api_key = "9d2c282833cb71d207fb02e7c7e9ce8a";

    const [wicon,setWicon] = useState(Cloud_icon);
    const[mon_icon, setmonicon] = useState(Cloud_icon);
    const[tue_icon, settueicon] = useState(Cloud_icon);
    const[wed_icon, setwedicon] = useState(Cloud_icon);
    const[thu_icon, setthuicon] = useState(Cloud_icon);
    const[fri_icon, setfriicon] = useState(Cloud_icon);
    const[sat_icon, setsaticon] = useState(Cloud_icon);
    const[sun_icon, setsunicon] = useState(Cloud_icon);

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
        Mon_icon: "01d",
        Mon_max: "",
        Mon_min: "",
        Tue_icon: "01d",
        Tue_max: "",
        Tue_min: "",
        Wed_icon: "01d",
        Wed_max: "",
        Wed_min: "",
        Thu_icon: "01d",
        Thu_max: "",
        Thu_min: "",
        Fri_icon: "01d",
        Fri_max: "",
        Fri_min: "",
        Sat_icon: "01d",
        Sat_max: "",
        Sat_min: "",
        Sun_icon: "01d",
        Sun_max: "",
        Sun_min: ""
    });
    
    const [currentDate, setCurrentDate] = useState
    ({
        day: "",
        month: "",
        dayOfWeek: ""
    });

    let [i, seti] = useState(0)

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
                    // temp_min: Math.floor((data.list[i].main.temp_min)-273.15),
                    // temp_max: Math.floor((data.list[i].main.temp_max)-273.15),
                    icon: data.list[i-1].weather[0].icon,
                    Mon_icon: data.list[5].weather[0].icon,
                    Mon_max: Math.floor((data.list[5].main.temp_max)-273.15),
                    Mon_min: Math.floor((data.list[5].main.temp_min)-273.15),
                    Tue_icon: data.list[10].weather[0].icon,
                    Tue_max: Math.floor((data.list[10].main.temp_max)-273.15),
                    Tue_min: Math.floor((data.list[10].main.temp_min)-273.15),
                    Wed_icon: data.list[15].weather[0].icon,
                    Wed_max: Math.floor((data.list[15].main.temp_max)-273.15),
                    Wed_min: Math.floor((data.list[15].main.temp_min)-273.15),
                    Thu_icon: data.list[20].weather[0].icon,
                    Thu_max: Math.floor((data.list[20].main.temp_max)-273.15),
                    Thu_min: Math.floor((data.list[20].main.temp_min)-273.15),
                    Fri_icon: data.list[25].weather[0].icon,
                    Fri_max: Math.floor((data.list[25].main.temp_max)-273.15),
                    Fri_min: Math.floor((data.list[25].main.temp_min)-273.15),
                    Sat_icon: data.list[30].weather[0].icon,
                    Sat_max: Math.floor((data.list[30].main.temp_max)-273.15),
                    Sat_min: Math.floor((data.list[30].main.temp_min)-273.15),
                    Sun_icon: data.list[35].weather[0].icon,
                    Sun_max: Math.floor((data.list[35].main.temp_max)-273.15),
                    Sun_min: Math.floor((data.list[35].main.temp_min)-273.15),
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

    useEffect(() => 
    {
        if (weatherData.Mon_icon === "01d" || weatherData.Mon_icon === "01n") {
            setmonicon(Clear_icon);
        } 
        else if (weatherData.Mon_icon === "02d" || weatherData.Mon_icon === "02n") {          
            setmonicon(Cloud_icon);           
        } 
        else if (weatherData.Mon_icon === "03d" || weatherData.Mon_icon === "03n") {
            setmonicon(Drizzle_icon);
        }
        else if (weatherData.Mon_icon === "04d" || weatherData.Mon_icon === "04n") {
            setmonicon(Drizzle_icon);
        } 
        else if (weatherData.Mon_icon === "09d" || weatherData.Mon_icon === "09n") {
            setmonicon(Rain_icon);           
        } 
        else if (weatherData.Mon_icon === "10d" || weatherData.Mon_icon === "10n") {     
            setmonicon(Rain_icon);    
        } 
        else if (weatherData.Mon_icon === "13d" || weatherData.Mon_icon === "13n") {  
            setmonicon(Snow_icon);   
        } 
        else {
            setmonicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Tue_icon === "01d" || weatherData.Tue_icon === "01n") {
            settueicon(Clear_icon);
        } 
        else if (weatherData.Tue_icon === "02d" || weatherData.Tue_icon === "02n") {          
            settueicon(Cloud_icon);           
        } 
        else if (weatherData.Tue_icon === "03d" || weatherData.Tue_icon === "03n") {
            settueicon(Drizzle_icon);
        }
        else if (weatherData.Tue_icon === "04d" || weatherData.Tue_icon === "04n") {
            settueicon(Drizzle_icon);
        } 
        else if (weatherData.Tue_icon === "09d" || weatherData.Tue_icon === "09n") {
            settueicon(Rain_icon);           
        } 
        else if (weatherData.Tue_icon === "10d" || weatherData.Tue_icon === "10n") {     
            settueicon(Rain_icon);    
        } 
        else if (weatherData.Tue_icon === "13d" || weatherData.Tue_icon === "13n") {  
            settueicon(Snow_icon);   
        } 
        else {
            settueicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Wed_icon === "01d" || weatherData.Wed_icon === "01n") {
            setwedicon(Clear_icon);
        } 
        else if (weatherData.Wed_icon === "02d" || weatherData.Wed_icon === "02n") {          
            setwedicon(Cloud_icon);           
        } 
        else if (weatherData.Wed_icon === "03d" || weatherData.Wed_icon === "03n") {
            setwedicon(Drizzle_icon);
        }
        else if (weatherData.Wed_icon === "04d" || weatherData.Wed_icon === "04n") {
            setwedicon(Drizzle_icon);
        } 
        else if (weatherData.Wed_icon === "09d" || weatherData.Wed_icon === "09n") {
            setwedicon(Rain_icon);           
        } 
        else if (weatherData.Wed_icon === "10d" || weatherData.Wed_icon === "10n") {     
            setwedicon(Rain_icon);    
        } 
        else if (weatherData.Wed_icon === "13d" || weatherData.Wed_icon === "13n") {  
            setwedicon(Snow_icon);   
        } 
        else {
            setwedicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Thu_icon === "01d" || weatherData.Thu_icon === "01n") {
            setthuicon(Clear_icon);
        } 
        else if (weatherData.Thu_icon === "02d" || weatherData.Thu_icon === "02n") {          
            setthuicon(Cloud_icon);           
        } 
        else if (weatherData.Thu_icon === "03d" || weatherData.Thu_icon === "03n") {
            setthuicon(Drizzle_icon);
        }
        else if (weatherData.Thu_icon === "04d" || weatherData.Thu_icon === "04n") {
            setthuicon(Drizzle_icon);
        } 
        else if (weatherData.Thu_icon === "09d" || weatherData.Thu_icon === "09n") {
            setthuicon(Rain_icon);           
        } 
        else if (weatherData.Thu_icon === "10d" || weatherData.Thu_icon === "10n") {     
            setthuicon(Rain_icon);    
        } 
        else if (weatherData.Thu_icon === "13d" || weatherData.Thu_icon === "13n") {  
            setthuicon(Snow_icon);   
        } 
        else {
            setthuicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Fri_icon === "01d" || weatherData.Fri_icon === "01n") {
            setfriicon(Clear_icon);
        } 
        else if (weatherData.Fri_icon === "02d" || weatherData.Fri_icon === "02n") {          
            setfriicon(Cloud_icon);           
        } 
        else if (weatherData.Fri_icon === "03d" || weatherData.Fri_icon === "03n") {
            setfriicon(Drizzle_icon);
        }
        else if (weatherData.Fri_icon === "04d" || weatherData.Fri_icon === "04n") {
            setfriicon(Drizzle_icon);
        } 
        else if (weatherData.Fri_icon === "09d" || weatherData.Fri_icon === "09n") {
            setfriicon(Rain_icon);           
        } 
        else if (weatherData.Fri_icon === "10d" || weatherData.Fri_icon === "10n") {     
            setfriicon(Rain_icon);    
        } 
        else if (weatherData.Fri_icon === "13d" || weatherData.Fri_icon === "13n") {  
            setfriicon(Snow_icon);   
        } 
        else {
            setfriicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Sat_icon === "01d" || weatherData.Sat_icon === "01n") {
            setsaticon(Clear_icon);
        } 
        else if (weatherData.Sat_icon === "02d" || weatherData.Sat_icon === "02n") {          
            setsaticon(Cloud_icon);           
        } 
        else if (weatherData.Sat_icon === "03d" || weatherData.Sat_icon === "03n") {
            setsaticon(Drizzle_icon);
        }
        else if (weatherData.Sat_icon === "04d" || weatherData.Sat_icon === "04n") {
            setsaticon(Drizzle_icon);
        } 
        else if (weatherData.Sat_icon === "09d" || weatherData.Sat_icon === "09n") {
            setsaticon(Rain_icon);           
        } 
        else if (weatherData.Sat_icon === "10d" || weatherData.Sat_icon === "10n") {     
            setsaticon(Rain_icon);    
        } 
        else if (weatherData.Sat_icon === "13d" || weatherData.Sat_icon === "13n") {  
            setsaticon(Snow_icon);   
        } 
        else {
            setsaticon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        if (weatherData.Sun_icon === "01d" || weatherData.Sun_icon === "01n") {
            setsunicon(Clear_icon);
        } 
        else if (weatherData.Sun_icon === "02d" || weatherData.Sun_icon === "02n") {          
            setsunicon(Cloud_icon);           
        } 
        else if (weatherData.Sun_icon === "03d" || weatherData.Sun_icon === "03n") {
            setsunicon(Drizzle_icon);
        }
        else if (weatherData.Sun_icon === "04d" || weatherData.Sun_icon === "04n") {
            setsunicon(Drizzle_icon);
        } 
        else if (weatherData.Sun_icon === "09d" || weatherData.Sun_icon === "09n") {
            setsunicon(Rain_icon);           
        } 
        else if (weatherData.Sun_icon === "10d" || weatherData.Sun_icon === "10n") {     
            setsunicon(Rain_icon);    
        } 
        else if (weatherData.Sun_icon === "13d" || weatherData.Sun_icon === "13n") {  
            setsunicon(Snow_icon);   
        } 
        else {
            setsunicon(Clear_icon);
        }

    },[weatherData])


    useEffect(() => 
    {
        const currentDate = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric', };

        setCurrentDate
        ({
            day: currentDate.getDate(),
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
                        <p className= "weather-forecast-date">{currentDate.dayOfWeek}, {currentDate.month} {currentDate.day}</p>
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
                    
                    <button className="forecast-button"  onClick={() => {
                        return( seti(2), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Mon</h4>
                            <img src={mon_icon} height={50} alt="cloud1-icon"></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Mon_max}</p>
                            <p> {weatherData.Mon_min}</p>
                           
                            </div>
                
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(3), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Tue</h4>
                            <img src={tue_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Tue_max}</p>
                            <p> {weatherData.Tue_min}</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(4), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Wed</h4>
                            <img src={wed_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Wed_max}</p>
                            <p> {weatherData.Wed_min}</p>
                            </div>
                        </div>
                    </button>
                    
                    <button className="forecast-button" onClick={() => {
                        return( seti(5), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Thu</h4>
                            <img src={thu_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Thu_max}</p>
                            <p> {weatherData.Thu_min}</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(6), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Fri</h4>
                            <img src={fri_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Fri_max}</p>
                            <p> {weatherData.Fri_min}</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"   onClick={() => {
                        return( seti(7), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Sat</h4>
                            <img src={sat_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Sat_max}</p>
                            <p> {weatherData.Sat_min}</p>
                            </div>
                        </div>
                    </button>

                    <button className="forecast-button"  onClick={() => {
                        return( seti(8), search() );
                    }}>
                        <div className='cloud'>
                            <h4>Sun</h4>
                            <img src={sun_icon} height={50}></img>
                            <div className="forecastMax-Min_temp">
                            <p> {weatherData.Sun_max} </p>
                            <p> {weatherData.Sun_min} </p>
                            </div>
                        </div>
                    </button>  
                </div>
            </div>
        </div>
    );
}
export default Body;
