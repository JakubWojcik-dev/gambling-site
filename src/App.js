import React,{useState} from 'react';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Wheel from './components/Wheel';
import BottomBar from './components/BottomBar';


function App() {
  
  
  return (
    <Router>
       
    <div className="App" >
      <GlobalStyles/>
      
      {/* <Header /> */}
      <Sidebar />
      
     
     
     <Routes>
     <Route path='/' element="none"/>
     <Route path="/wheel" element={<Wheel/>}/>
      
     </Routes>
       
     {/* <Wheel/> */}

    </div>
    <BottomBar/>
    </Router>
  );
}

export default App;
