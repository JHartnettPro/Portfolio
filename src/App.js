import React from 'react';
import ReactDOM from 'react-dom'


 


import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import home from './Pages/home'



function App() {
  return (
    <div class="wrapper" >
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
