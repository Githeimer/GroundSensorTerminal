import React, { useState, useEffect } from "react";

export default function Humidity({humiValue}) {
    const humi = 80;
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
