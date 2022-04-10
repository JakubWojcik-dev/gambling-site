import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Wheel from './components/Wheel';

function App() {
  
  return (
    <Router>
    <div className="App" >
      <GlobalStyles/>
      
      <Header/>
      <Sidebar/>
     
     
     <Routes>
     <Route path='/' element="none"/>
     <Route path="/wheel" element={<Wheel/>}/>
      
     </Routes>
       
     

    </div>
    </Router>
  );
}

export default App;
