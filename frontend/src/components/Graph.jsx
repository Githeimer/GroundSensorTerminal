import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { useGraphContext } from "../hooks/use.graph.context";

export default function Graph({ rawData }) {

    const { data } = useGraphContext();

    const [userGraphData, setUserGraphData] = useState({
        labels: [],
        datasets: [
            {
                label: "humidity",
                data: []
            },
            {
                label: "temperature",
                data: []
            },
            {
                label: "distance",
                data: []
            }
        ]
    });

    useEffect(() => {
        setUserGraphData(prevState => ({
            ...prevState,
            labels: data.map(timeData => timeData.createdAt),
            datasets: [
                {
                    ...prevState.datasets[0],
                    data: data.map(humiData => humiData.humidity)
                },
                {
                    ...prevState.datasets[1],
                    data: data.map(tempData => tempData.temperature)
                },
                {
                    ...prevState.datasets[2],
                    data: data.map(distData => distData.distance)
                }
            ]
        }));
    }, [data]);

    // console.log(data);

    return (
        <Line data={userGraphData} />
    )
}

Graph.propTypes = {
    rawData: PropTypes.object
}