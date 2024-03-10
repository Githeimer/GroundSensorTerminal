import React, { useState, useEffect } from "react";

export default function SurfaceLevel() {
    const level = 0; // cm
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            setCurrentTime(formattedTime);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Run effect only once on mount

    let status;
    let color;

    if (level > 30) {
        status = "Unsafe Unless Very Necessary";
        color = "red";
    } else if (level > 20 && level <= 30) {
        status = "Unsafe, on hills";
        color = "orange";
    } else if (level > 15 && level <= 20) {
        status = "Unsafe, use snow tires or chains";
        color = "yellow";
    } else if (level > 10 && level <= 15) {
        status = "Drive slow and safely";
        color = "blue";
    } else if (level <= 10) {
        status = "Manageable, but still be cautious";
        color = "lightgreen";
    } else if (level === 0) {
        status = "No Snow, Ride Safe";
        color = "green";
    }

    const colorStyle = {
        width: "20px", // Adjust the width of the color rectangle
        height: "20px", // Adjust the height of the color rectangle
        backgroundColor: color,
        display: "inline-block",
        marginRight: "5px" // Adjust spacing between color rectangle and text
    };

    return (
        <>
            <div className="data-container">
                <div className="top">
                    <p>Snow Level</p>
                    <p>Current Time: {currentTime}</p>
                </div>

                <div className="data">
                    <h1>{level}</h1>
                    <p style={{ color }}>
                        {status}
                    </p>
                </div>
            </div>
        </>
    );
}
