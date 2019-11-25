import React from 'react';
import './App.css';
import About from './Components/About';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import Home from './Components/Home'
import ItemDetail from './Components/ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path= "/about"  component = {About} />
        <Route path= "/shop" exact component = {Shop} />
        <Route path= "/shop/:id" component = {ItemDetail} />
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;
