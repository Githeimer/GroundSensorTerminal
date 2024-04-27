import { useState, useEffect } from 'react';
import Humidity from '../components/Humidity';
import Navbar from '../components/Navbar';
import SurfaceLevel from '../components/SurfaceLevel';
import Temperature from '../components/Temperature';
import Graph from '../components/Graph';

import { useGraphContext } from '../hooks/use.graph.context';

export default function Landing() {
    const [temperatureValue, setTemperatureValue] = useState(null);
    const [humidityValue,setHumidityValue]=useState(null);
    const [distanceValue, setDistanceValue] = useState(null);
    const [graphData, setGraphData] = useState({});

    const { dispatch } = useGraphContext();

    async function fetchData() {
        try {
            const dataResponse = await fetch('https://backend.flap.esainnovation.com/api/sensorData/getData');
            const jsonData = await dataResponse.json();
            setTemperatureValue(jsonData.temperature);
            setHumidityValue(jsonData.humidity);
            setDistanceValue(jsonData.distance);

            const updatedGraphData = {
                temperature: jsonData.temperature,
                humidity: jsonData.humidity,
                distance: jsonData.distance,
                createdAt: jsonData.createdAt
            };

            setGraphData(updatedGraphData);

            dispatch({ type: 'STORE', payload: updatedGraphData });
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
            <SurfaceLevel levelValue={distanceValue} />
            <Graph rawData={graphData}/>
        </div>
    );
}