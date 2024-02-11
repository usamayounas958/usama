import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#105F86";
      showAlerts("Dark mode is activated", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlerts("Light mode is activated", "Success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="USAMA" aa="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route exact path="/" element={  <TextForm showAlerts={showAlerts} heading="Enter your text here" mode={mode}/>}>
          
          </Route>
      </Routes>
    
      </div>
      </Router>
    </>
  );
}

export default App;
