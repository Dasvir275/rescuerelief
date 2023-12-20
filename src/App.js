
import {Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import HomePage from './pages/home/HomePage';
import Main from './pages/main/Main';
import GetStarted from './pages/getstarted/GetStarted';
function App() {
  return (
    
    <div className="App">
    <Routes>
    <Route path='/' element={<GetStarted/>}/>
     <Route path='/home' element={<HomePage/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/weather' element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;