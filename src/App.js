import React from 'react';
import './App.css';

import Header from './layout/Header';
import Home from './components/Home';
import Weather from './components/Weather';

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App"> 

        <Header /> 

          {/* #all components# */}
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/weather' component={Weather}></Route>
            </Switch>
          </div>

        {/* <Footer />    */}

      </div>         
    </Router>
   
  );
}

export default App;
