import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import TopCities from './pages/TopCities';
import Start from './pages/Start';
import Profile from './pages/Profile';
import City from './pages/City';
import UpdateProfile from './pages/UpdateProfile';
import CompareCities from './pages/CompareCities';
import Error from './pages/Error';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<Start />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit/:id' element={<UpdateProfile />} />
        <Route path='/top-cities' element={<TopCities />} />
        <Route path='/cities/:id' element={<City />} />
        <Route path='/compare-cities' element={<CompareCities />} />
        <Route path='*' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App;
