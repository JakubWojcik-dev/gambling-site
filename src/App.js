import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar';
function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
     <Sidebar/>
    </div>
  );
}

export default App;
