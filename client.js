import React from "react"
import ReactDOM from "react-dom"
import { Router, browserHistory } from 'react-router'
import routes from './routes/routes';
import * as styles from 'grommet/scss/vanilla/index';

ReactDOM.render(<Router history={browserHistory} routes={routes} />,
  	document.getElementById('root'))

document.body.classList.remove('loading');
