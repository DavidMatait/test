import Weather from './components/Weather.jsx'
import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz'
const App=()=> {

  const[loc, setLoc] = useState({});

  useEffect(()=>{
    fetch("http://api.weatherapi.com/v1/current.json?key=1e120df75eff421fb0c105154212607&q=London&aqi=no")
    .then(res => res.json())
    .then(data => setLoc(data));
  }, []);
console.log(loc);

  return (
    <div >
<Quiz />
{/* <Weather location={location}/> */}
    </div>
  );
}

export default App;
