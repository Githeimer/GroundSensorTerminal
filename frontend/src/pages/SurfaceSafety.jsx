import SurfaceLevel from "../components/SurfaceLevel";

export default function SurfaceSafety()
{

    
    return(
        <>
        <div className="container">
        <SurfaceLevel></SurfaceLevel>
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