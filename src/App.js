import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
