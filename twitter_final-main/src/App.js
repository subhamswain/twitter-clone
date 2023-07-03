
import './App.css';
import {Routes, Route} from 'react-router-dom';
import SignUp from './Components/Pages/SignupPage/SignupPage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import { useNavigate } from 'react-router-dom';
// import {Provider} from 'react-redux'
// import store from './Components/Redux/store';
import { useSelector } from 'react-redux';
import PrivateRouting from './Components/Routing/PrivateRouting';

function App() {
  const navigate = useNavigate()
  

  const values = useSelector(state=>state.localData)
  const {isLoggedIn1} = values
  console.log(isLoggedIn1)
  return (
    <div className="App">
      
       <Routes>
       <Route path='/' element={<LoginPage/>}/>
    
        <Route path='/signup' element={<SignUp/>}/>
        
        <Route
          path="/home"
          element={
            <PrivateRouting>
              <HomePage />
            </PrivateRouting>
          }
        /></Routes>
       
    </div>
  );
}

export default App;
