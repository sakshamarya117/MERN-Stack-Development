import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import AddLikeComment from './components/AddLikeComment';
import ToDo from './components/ToDo';

function App() {
  return (
    <div>
      
      <BrowserRouter>

         {/* <Link to="/login">Login</Link> <br>
         <Link to="/signup">Signup</Link> */}
         
         <Navbar/>

        <Routes>

          <Route element={<Home />} path='/' />
          <Route element={<Signup />} path='signup' />
          <Route element={<Login />} path='login' />
          <Route element={<EventHandling/>} path='/event'/>
          <Route element={<StateManagement/>} path='/state'/>
          <Route element={<AddLikeComment/>} path='/add'/>
          <Route element={<ToDo/>} path='/todo'/>
          <Route element={<NotFound />} path='*' />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
//login
//signup

export default App;
