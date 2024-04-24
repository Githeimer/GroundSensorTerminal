import SurfaceLevel from "../components/surfaceLevel";
import { useState, useEffect } from "react";

export default function SurfaceSafety() {
    const [distanceValue, setDistanceValue] = useState(null);

    async function fetchData() {
        try {
            const dataResponse = await fetch('https://backend.flap.esainnovation.com/api/sensorData/getData');
            const jsonData = await dataResponse.json();
            console.log(jsonData);
            setDistanceValue(jsonData.distance);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 1000); // Fetch data every second

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means effect runs only once on mount

    return (
        <>
            <div className="container">
                <SurfaceLevel levelValue={distanceValue} />
                <div className="data-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Color Index</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "red", display: "inline-block" }}></span>
                                </td>
                                <td>Unsafe Unless Very Necessary</td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "orange", display: "inline-block" }}></span>
                                </td>
                                <td>Unsafe, on hills</td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "yellow", display: "inline-block" }}></span>
                                </td>
                                <td>Unsafe, use snow tires or chains</td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "blue", display: "inline-block" }}></span>
                                </td>
                                <td>Drive slow and safely</td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "lightgreen", display: "inline-block" }}></span>
                                </td>
                                <td>Manageable, but still be cautious</td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{ width: "20px", height: "20px", backgroundColor: "green", display: "inline-block" }}></span>
                                </td>
                                <td>No Snow, Ride Safe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
