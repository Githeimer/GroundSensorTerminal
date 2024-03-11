import { useState, useEffect } from 'react';
import Humidity from '../components/humidity';
import Navbar from '../components/navbar';
import SurfaceLevel from '../components/surfaceLevel';
import Temperature from '../components/temperature';

export default function Landing() {
    const [temperatureValue, setTemperatureValue] = useState(null);
    const [humidityValue,setHumidityValue]=useState(null);
    const [distanceValue,setDistanceValue]=useState(null);

    async function fetchData() {
        try {
            const dataResponse = await fetch('https://backend.flap.esainnovation.com/api/sensorData/getData');
            const jsonData = await dataResponse.json();
            console.log(jsonData);
            setTemperatureValue(jsonData.temperature);
            setHumidityValue(jsonData.humidity);
            setDistanceValue(jsonData.distance);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(fetchData, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <Temperature tempValue={temperatureValue} />
            <Humidity humiValue={humidityValue} />
            <SurfaceLevel levelValue={distanceValue}/>
        </div>
    );
}
