import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import MyProgress from './components/pages/MyProgress'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import SignUp from './components/pages/SignUp'
import YogaCards from './components/pages/YogaCards';
import FlexibilityCards from './components/pages/FlexibilityCards';
import BeginnersYoga from './components/pages/YogaPages/BeginnersYoga';
import VinyasaYoga from './components/pages/YogaPages/VinyasaYoga';
import BackPainYoga from './components/pages/YogaPages/BackPainYoga';
import BeginnerFlex from './components/pages/FlexibilityPages/BeginnerFlex';
import AdvancedFlex from './components/pages/FlexibilityPages/AdvancedFlex';
import Favorites from './components/pages/Favorites';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/MyProgress' exact component={MyProgress} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/yoga-cards' exact component={YogaCards} />
          <Route path='/flexibility-cards' exact component={FlexibilityCards} />
          <Route path='/beginner-yoga' exact component={BeginnersYoga} />
          <Route path='/vinyasa-yoga' exact component={VinyasaYoga} />
          <Route path='/back-pain-yoga' exact component={BackPainYoga} />
          <Route path='/beginner-flex' exact component={BeginnerFlex} />
          <Route path='/advanced-flex' exact component={AdvancedFlex} />
          <Route path='/favorites' exact component={Favorites} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
