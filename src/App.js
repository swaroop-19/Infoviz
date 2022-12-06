import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/info" element={<Explore />} />
        <Route path="/help" element={<Statistics />}/>
        <Route path="/dataset" element={<Settings />} />
      </Routes>
      </main>
     
    </div>
  );
}

export default App;
