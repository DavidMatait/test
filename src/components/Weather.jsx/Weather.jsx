import React from 'react';


const Weather=(props)=> {

// const {location}=props


  return (
    <div >
 {/* <h2>Location: {loc.location.name}</h2> */}
 <h2>Temperature: {}</h2>
 <h2>Humidity: {}</h2>
 <h2>Minimum temperature at the moment: {}</h2>
 <h2>Maximum temperature at the moment: {}</h2>
    </div>
  );
}

export default Weather;