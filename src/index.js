import React from 'react';
import ReactDOM from 'react-dom';

import { App }  from './containers/AppContainer';
import sounds from './sounds';

import './css/font-awesome.css';
import './css/index.css';

ReactDOM.render(
  <App sounds={sounds} />, 
  document.getElementById('root')
);



