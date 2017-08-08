import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Example from './components/example';
import Mural from './components/mural';
import MuralDetail from './components/muralDetail';
import Exhibition from './components/exhibition';
import ExhibitionDetail from './components/exhibitionDetail';
import About from './components/about';
import Copy from './components/copy';

const App = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/mural" exact component={Mural} />
    <Route path="/muralDetail" exact component={MuralDetail} />
    <Route path="/exhibition" exact component={Exhibition} />
    <Route path="/exhibitionDetail" exact component={ExhibitionDetail} />
    <Route path="/copy" exact component={Copy} />
    <Route path="/about" exact component={About} />
    <Route path="/example" component={Example} />
  </div>
);

export default App;

