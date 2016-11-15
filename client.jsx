import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'grommet/scss/vanilla/index.scss';
import routes from './routes/routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />,
  document.getElementById('root'));

document.body.classList.remove('loading');
