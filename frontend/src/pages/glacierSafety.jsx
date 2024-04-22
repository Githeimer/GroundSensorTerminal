import React, { useState, useEffect } from "react";

export default function GlacierSafety() {
    const [distanceValues, setDistanceValues] = useState(null);

    useEffect(() => {
        const fetchDataInterval = setInterval(async () => {
            try {
                const dataResponse = await fetch('https://backend.flap.esainnovation.com/api/sensorData/getData');
                const jsonData = await dataResponse.json();
                console.log(jsonData);
                setDistanceValues(jsonData.distance);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 1000); // Fetch data every second

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(fetchDataInterval);
    }, []); // Empty dependency array means effect runs only once on mount
    let status;
    const groundLevel = 79.22;
    const level = distanceValues !== null ? Math.abs(groundLevel - distanceValues).toFixed(2) : 'Loading...';

    if (level>=10)
    {
        status="There's a rise in the glacier level so glacier outburst can occur";
    }else{
        status="Glacier Lake is in normal condition"
    }

    return (
        <>
            <div className="container">
                <div className="data-container">
                    <div className="top">
                        <p>Glacier Level</p>
                        {/* <p>Current Time: {currentTime}</p> */}
                    </div>

                    <div className="data">
                        <h1>{level}cm</h1>

                        <p className="glacier">{status}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
