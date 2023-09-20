import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Compunent/Home/Home';
import AddData from './Compunent/AddData/AddData';
import Navbar from './Compunent/Navbar/Navbar';
import UpdateUser from './Compunent/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addUser' element={<AddData />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
