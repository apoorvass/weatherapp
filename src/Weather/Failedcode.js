// import {useState,useEffect}from "react";
// import './Body.css';
// import search_icon from './Images/search.png'
// import Cloud_icon from './Images/cloud-computing.png';
// import Cloud1_icon from './Images/img1.png';
// import Cloud2_icon from './Images/img2.png';
// import Cloud3_icon from './Images/img3.png';
// import Cloud4_icon from './Images/img4.png';
// import Cloud5_icon from './Images/img5.png';
// import Cloud6_icon from './Images/img6.png';

// function Body()
// { 
//     let api_key = "9d2c282833cb71d207fb02e7c7e9ce8a";



//     const search = async () => {
//         const element =document.getElementsByClassName("searchbar")
//         if(element[0].value==="")
//         {
//             return 0;
//         }
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}London&units=Metric&appid=${api_key}`;
        
//         let response = await fetch(url);
//         let data = await response.json();
//         let humidity =document.getElementsByClassName("humidity-percent");
//         let wind = document.getElementsByClassName("wind-rate");
//         let temprature = document.getElementsByClassName("weather-temp");
//         let location = document.getElementsByClassName("weather-location");

//         humidity[0].innerHTML = data.main.humidity;
//         wind[0].innerHTML = data.wind.speed;
//         temprature[0].innerHTML = data.main.temp;
//         location[0].innerHTML = data.name;
//     }

//     return(
//         <div className='main-container'>
//             <div className='frontpage'>
//                 <div className="search">
//                     <input className='searchbar'  type='text' placeholder='Search '></input>
//                     <img src={search_icon} className="search-icon" onClick={()=>{search()}}></img>
//                 </div>
//                 <div className='main'>
//                     <img src={Cloud_icon} className='current-weather-icon'></img>
//                     <div className='style1'>
//                         <div className="weather-location"><h3>London</h3></div>
//                         <p weather-forecast-date>17:09, Mon Jan 23</p>
//                         <p> Overcast clouds</p>
//                     </div>
//                     <div className="current-weather-info-wrapper">
//                         <div className="units">°C</div>
//                     <ul>
//                         <li>Humidity: <span id="humidity" className="humidity-percent"></span>%</li>
//                         <li>Wind: <span id="wind" className="wind-rate"></span>km/h</li>
//                     </ul>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className='day-weather'>
//                 <div className='cloud'>
//                     <h4>Thu</h4>
//                     <img src={Cloud1_icon} ></img>
//                 </div>
//                 <div className='cloud'>
//                     <h4>Fri</h4>
//                     <img src={Cloud2_icon}></img>
//                 </div>
//                 <div className='cloud'>
//                     <h4>Sat</h4>
//                     <img src={Cloud3_icon}></img>
//                 </div>
//                 <div className='cloud'>
//                     <h4>Sun</h4>
//                     <img src={Cloud4_icon}></img>
//                 </div>
//                 <div className='cloud'>
//                     <h4>Mon</h4>
//                     <img src={Cloud5_icon}></img>
//                 </div>
//                 <div className='cloud'>
//                     <h4>Tue</h4>
//                     <img src={Cloud6_icon}></img>
//                 </div>
//                 </div>
//             </div>

//         </div>
        
        
//     );
// }
// export default Body;


// import React, { useState } from "react";
// import './Body.css';
// import search_icon from './Images/search.png';
// import Cloud_icon from './Images/cloud-computing.png';
// import Cloud1_icon from './Images/img1.png';
// import Cloud2_icon from './Images/img2.png';
// import Cloud3_icon from './Images/img3.png';
// import Cloud4_icon from './Images/img4.png';
// import Cloud5_icon from './Images/img5.png';
// import Cloud6_icon from './Images/img6.png';

// function Body() {
//     const api_key = "9d2c282833cb71d207fb02e7c7e9ce8a";
//     const [weatherData, setWeatherData] = useState({
//         humidity: "",
//         windSpeed: "",
//         temperature: "",
//         location: "",
//     });

//     const search = async () => {
//         const element = document.getElementsByClassName("searchbar");
//         if (element[0].value === "") {
//             return 0;
//         }

//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

//         try {
//             let response = await fetch(url);

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             let data = await response.json();

//             if (data.main) {
//                 setWeatherData({
//                     humidity: data.main.humidity,
//                     windSpeed: data.wind.speed,
//                     temperature: data.main.temp,
//                     location: data.name,
//                 });
//             } else {
//                 console.error("Unexpected data format:", data);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return (
//         <div className='main-container'>
//             <div className='frontpage'>
//                 <div className="search">
//                     <input className='searchbar' type='text' placeholder='Search'></input>
//                     <img src={search_icon} className="search-icon" alt="search-icon" onClick={search}></img>
//                 </div>
//                 <div className='main'>
//                     <img src={Cloud_icon} className='current-weather-icon' alt="current-weather-icon"></img>
//                     <div className='style1'>
//                         <div className="weather-location">
//                             <h3>{weatherData.location}</h3>
//                         </div>
//                         <p weather-forecast-date>17:09, Mon Jan 23</p>
//                         <p> Overcast clouds</p>
//                     </div>
//                     <div className="current-weather-info-wrapper">
//                         <div className="units">{weatherData.temperature}°C</div>
//                         <ul>
//                             <li>Humidity: <span className="humidity-percent">{weatherData.humidity}</span>%</li>
//                             <li>Wind: <span className="wind-rate">{weatherData.windSpeed}</span>km/h</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className='day-weather'>
//                     <div className='cloud'>
//                         <h4>Thu</h4>
//                         <img src={Cloud1_icon} alt="cloud1-icon"></img>
//                     </div>
                //     <div className='cloud'>
                //      <h4>Fri</h4>
                //     <img src={Cloud2_icon}></img>
                //  </div>
                //  <div className='cloud'>
                //      <h4>Sat</h4>
                //      <img src={Cloud3_icon}></img>
                //  </div>
                //  <div className='cloud'>
                //      <h4>Sun</h4>
                //      <img src={Cloud4_icon}></img>
                //  </div>
                //  <div className='cloud'>
                //      <h4>Mon</h4>
                //      <img src={Cloud5_icon}></img>
                //  </div>
                //  <div className='cloud'>
                //   <h4>Tue</h4>
                //   <img src={Cloud6_icon}></img>
                // </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Body;







{/* <div className='day-weather'>
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
</div> */}
// ! This is a brief description of
        // who we are and what our application is about.
        // function getRandomCloudImage() {
        //     const cloudImages = [Cloud1_icon, Cloud2_icon, Cloud3_icon, Cloud4_icon, Cloud5_icon, Cloud6_icon];
        //     const randomIndex = Math.floor(Math.random() * cloudImages.length);
        //     return cloudImages[randomIndex];