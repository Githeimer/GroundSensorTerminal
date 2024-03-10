import { useState, useEffect } from "react";
import PropTypes from 'prop-types';


export default function Temperature() {

    //actual data
    // const temperatureValue=props.temp;

    const [tempo, setTempo] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const tempInterval = setInterval(() => {
            const randomTemp = (Math.random() * (30 - 18) + 18).toFixed(2);
            setTempo(randomTemp);
        }, 1000);

        const timeInterval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(tempInterval);
            clearInterval(timeInterval);
        };
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <>
            <div className="data-container">
                <div className="top">
                    <p>Temperature</p>
                    <p>Current Time: {currentTime}</p>
                </div>

                <div className="data">
                <h1>{tempo}&deg;C</h1>
                <p>Mild</p>
                </div>

                <div className="graph">
                    <a href="#">Graph</a>
                </div>                
            </div>
        </>
    );
}
