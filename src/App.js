import './App.css';
import {Route,Routes}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './common/Navbar';
import Home from './Pages/Home';
import CardForm from './common/CardForm';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddCard' element={<CardForm/>}/>
      </Routes>
    </>
    
  );
}

export default App;
