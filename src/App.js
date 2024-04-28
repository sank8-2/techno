import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Events from './components/Events';
import EventInfo from './components/EventInfo';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/event/:id' element={<EventInfo/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App