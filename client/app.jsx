import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Antd from './components/antd';
import Example from './components/example';

const App = () => (
  <div>
    <Route path="/" exact component={Antd} />
    <Route path="/example" component={Example} />
  </div>
);

export default App;

