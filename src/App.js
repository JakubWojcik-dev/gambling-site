import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wheel from './components/Wheel';
function App() {
  
  return (
    <Router>
    <div className="App">
      <GlobalStyles/>
      <Header/>
     <Sidebar/>
     <Routes>
       <Route path='/wheel' component={Wheel}/>
     </Routes>

    </div>
    </Router>
  );
}

export default App;
