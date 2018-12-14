import React, { Component } from 'react';
import './index.scss';
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<div className="nav-wrap">
				<Link to="/"><img src={require("./../../public/assets/img/me.jpeg")}  alt="123" className="head-pic"/></Link>
				<p className="name">商盼盼</p>
				<p className="saying">WELCOME</p>
				<Link to="/edit/" className="add-artucle">+</Link>
			</div>
		);
	}
}


export default Nav;
