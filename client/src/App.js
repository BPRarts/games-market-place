import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import MainHome from './components/MainHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainHome/>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
