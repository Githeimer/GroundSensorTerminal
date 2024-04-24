import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import Landing from "./pages/landing";
import SurfaceSafety from "./pages/surfaceSafety";
import GlacierSafety from "./pages/glacierSafety";

function App() {
  return (
    <Router> {/* Wrap your Routes in Router component */}
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/safety" element={<SurfaceSafety />} />
        <Route path="/glacier" element={<GlacierSafety/>} />
      </Routes>
    </Router>
  )
}

export default App;
