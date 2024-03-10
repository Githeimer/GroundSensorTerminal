import Humidity from '../components/humidity';
import Navbar from '../components/navbar';
import SurfaceLevel from '../components/surfaceLevel';
import Temperature from '../components/temperature';


export default function Landing(){

    return(
        <>
        <div className='container'>
      <Navbar></Navbar>
      <Temperature></Temperature>
      <Humidity></Humidity>
      <SurfaceLevel></SurfaceLevel>
      </div>
        </>
    )

}