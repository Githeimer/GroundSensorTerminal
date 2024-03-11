import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Temperature({ tempValue }) {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className="data-container">
            <div className="top">
                <p>Temperature</p>
                <p>Current Time: {currentTime}</p>
            </div>
            <div className="data">
                <h1>{tempValue !== null ? `${tempValue} °C` : 'Loading...'}</h1>
                <p>Mild</p>
            </div>
            <div className="graph">
                <a href="#">Graph</a>
            </div>                
        </div>
    );
}

Temperature.propTypes = {
    tempValue: PropTypes.number // Assuming temperature is a number, adjust the type accordingly
};
