import React from 'react';
import Taskbar from './Taskbar/Taskbar';
import "./App.css";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Projects   from './Taskbar/Pages/Projects';
import  Videos from './Taskbar/Pages/Videos';
import About from './Taskbar/Pages/About';
import  Home from './Taskbar/Pages/Home';
import Login from './Taskbar/Pages/Login';

function App() {
  return (
    <>
  <Router>
<Taskbar /> 
<div className='pages'>
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/about' element={<About />} />
  <Route exact path='/Projects' element={<Projects />} />
  <Route exact path='/videos' element={<Videos />} />
  <Route exact path='/login' element={<Login />}  />
  </Routes>
  </div>
</Router>
</>
    );
}

export default App;
