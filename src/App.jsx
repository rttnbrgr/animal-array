import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<div className="profile">
				<img src="http://unsplash.it/250" alt="" className="profile__avatar"/>
				<h2>Pimienta</h2>
				<h3>Jack Rusell & Australian Cattledog</h3>
			</div>
		</div>
		);
	}
}

export default App;
