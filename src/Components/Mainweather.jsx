import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Mainweather = ({weatherData}) => {

    const temperatureCelsius = weatherData?.main?.temp || 'N/A';
    const weatherDescription = weatherData?.weather?.[0]?.description || 'N/A';
    const cityName = weatherData?.name || 'city not available';
    const countryName = weatherData?.sys?.country || 'country not available';
    const timestamp = weatherData?.dt || null;

    const currentDate = timestamp ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
        weekday: 'long', day: 'numeric', month: 'short'
    }) : "Date not available";

    const renderTemperatureIcon = () => {
        if (temperatureCelsius > 23) {
            return <WbSunnyIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'orange' }} />
        } else if (temperatureCelsius < 10) {
            return <AcUnitIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'red' }} />
        } else {
            return <CloudIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'gray' }} />
        }
    }

    return (
        <div style={{ backgroundColor: 'DeepSkyBlue', color: 'black', borderRadius: '0.5rem', width: '270px', padding: '30px' }}>
            <div style={{ fontSize: '20px' }}>Now</div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '35px', fontWeight: 'bold' }}>{temperatureCelsius}°C
                {renderTemperatureIcon()}
            </div>
            
            <div  style={{fontsize:'15px', marginTop:'8px' , fontWeight:'50'}}>{weatherDescription}</div>
            <div style={{marginTop:'1rem'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                <CalendarMonthIcon />
                    {currentDate}
                </div>
                <div style={{margin:'4px',display:'flex', alignItems:'center'}}>
                <LocationOnIcon/>
                    {cityName},{countryName}
                </div>
    
            </div>
            
        </div>
    )
}

export default Mainweather;
