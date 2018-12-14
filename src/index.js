import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './../public/assets/css/reset.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './nav/index';
import List from './list/index';
import Detail from './detail/index';
import Edit from './edit/index';

ReactDOM.render(
	<Router>
		<div>
			<Nav></Nav>
			<div className="box">
				<Route path="/" exact component={List} />
				<Route path="/detail/" component={Detail} />
				<Route path="/edit/" component={Edit} />
			</div>
			
		</div>
	</Router>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
