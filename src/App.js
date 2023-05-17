import React from 'react';

import Taskbar from './Taskbar/Taskbar';
import "./App.css";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import { Projects }   from './Taskbar/Pages/Projects';
import  { Videos } from './Taskbar/Pages/Videos';
import { About } from './Taskbar/Pages/About';
import { Home } from './Taskbar/Pages/Home';
import { Login } from './Taskbar/Pages/Login';

function App() {
  return (
    <>
  <Router>
<Taskbar /> 
<div className='pages'>
<Routes>
  <Route exact path='/' Taskbar={Home}/>
  <Route exact path='/about' Taskbar={About}/>
  <Route exact path='/Projects' Taskbar={Projects}/>
  <Route exact path='/videos' Taskbar={Videos}/>
  <Route exact path='/login' Taskbar={Login}/>
  </Routes>

</div>
</Router>
</>
   
  );
}

export default App;
