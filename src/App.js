
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark")
      document.body.style.backgroundColor = "#A37C27";
      showMessage("Dark mode enabled", "Success");
      document.title = "Text Editor - Dark Mode";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      showMessage("Light mode enabled", "Success");
      document.title = "Text Editor - Light Mode";
    }

  }

  const colorblue = () => {
    document.body.style.backgroundColor = "blue";
  }


  return (
    <>
      {/* <div>
        <Navbar title="Text Information" mode={mode} toggleMode={toggleMode} colorblue={colorblue} />
        <Alert alert={alert} />
        <div className="container my-4 " >
          <About /> 
          <TextForm heading="ANALYZE YOUR PARAGRAPH" mode={mode} showMessage={showMessage} />
        </div>
      </div> */}

      <div>
        <Router>
        <Navbar title="Text Information" mode={mode} toggleMode={toggleMode} colorblue={colorblue} />
        <Alert alert={alert}/>
          <Routes>
            
            <Route path="/about" element={<About/>} />
            <Route path="/Home" element={<TextForm heading="ANALYZE YOUR PARAGRAPH" mode={mode} showMessage={showMessage} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
