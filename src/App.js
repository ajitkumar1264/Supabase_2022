import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Entry from './component/Entry';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './component/Update';
import Sign from './component/Sign';
import Sucess from './component/Sucess';
import Login from './component/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <header className="App-header">
    <Routes>
      
     <Route path='/' element={<Home/>}/> 
     <Route path='/login' element={<Sign/>}/> 
     <Route path='/loginwin' element={<Login/>}/> 
 
     <Route path='/sign' element={<Sucess/>}/> 
     <Route path='/new' element={<Entry/>}/> 
     <Route path='/:id' element={<Update/>}/> 
    
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
