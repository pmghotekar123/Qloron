import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import World from './components/world/World';
import Cards from './components/cards/Cards';
import Creative from './components/creative/Creative';
import Help from './components/help/Help';
import Statistics from './components/statistics/Statistics';
import Company from './components/company/Company';
import StandOut from './components/standout/StandOut';
import GetInTouch from './components/getintouch/GetInTouch';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
    <Header/>
    <Slider/>
    <World />
    <Cards />
    <Creative /> 
    <Help />
    <Statistics />
    <Company />
    <StandOut />
    <GetInTouch />
    <Footer />
    </div>
  );
}

export default App;
