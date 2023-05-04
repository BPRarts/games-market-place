import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import MainHome from './components/MainHome';
import XboxHome from './components/XboxHome';
import Nav from './components/Nav';
import SwitchHome from './components/SwitchHome';
import PsHome from './components/PsHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path = '/' element = {<MainHome/>}/>
          <Route path = '/XboxHome' element ={<XboxHome/>}/>
          <Route path = '/SwitchHome' element = {<SwitchHome/>}/>
          <Route path = '/PlaystationHome' element = {<PsHome/>}/>
        </Routes>


      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
