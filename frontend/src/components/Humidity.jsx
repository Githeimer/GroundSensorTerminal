import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Humidity({humiValue}) {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Run effect only once on mount

    return (
        <>
            <div className="data-container">
                <div className="top">
                    <p>Humidity</p>
                    <p>Current Time: {currentTime}</p>
                </div>

                <div className="data">
                    <h1>{humiValue}%</h1>
                    <p>humid</p>
                </div>

                <div className="graph">
                    <a href="#">Graph</a>
                </div>
            </div>
        </>
    );
}

Humidity.propTypes = {
    humiValue: PropTypes.number // Assuming temperature is a number, adjust the type accordingly
};