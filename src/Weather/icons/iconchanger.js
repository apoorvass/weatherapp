
import Clear_icon from '../Images/clear.png';
import Cloud_icon from '../Images/cloud-computing.png';
import Drizzle_icon from '../Images/drizzle.png';
import Rain_icon from '../Images/rain.png';
import Snow_icon from '../Images/snow.png';
function Iconchanger({weathericon,seticon}) {
    if (weathericon === "01d" || weathericon=== "01n") {
        seticon(Clear_icon);
    } 
    else if (weathericon === "02d" ||  weathericon === "02n") {          
        seticon(Cloud_icon);           
    } 
    else if ( weathericon === "03d" ||  weathericon === "03n") {
        seticon(Drizzle_icon);
    }
    else if ( weathericon === "04d" ||  weathericon === "04n") {
        seticon(Drizzle_icon);
    } 
    else if ( weathericon === "09d" ||  weathericon === "09n") {
        seticon(Rain_icon);           
    } 
    else if ( weathericon === "10d" ||  weathericon === "10n") {     
        seticon(Rain_icon);    
    } 
    else if ( weathericon === "13d" ||  weathericon === "13n") {  
        seticon(Snow_icon);   
    } 
    else {
        seticon(Clear_icon);
    }
}

export {Iconchanger} ;