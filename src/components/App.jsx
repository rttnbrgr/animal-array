import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import data from '../data';
import './App.css';
import Typekit from 'react-typekit';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			activePet: null
		}
	}

	render() {
		return (
			<div className="App">
				
				<Header>
					{/* 
					<h1>DEBUG</h1>
					Active Pet: { this.state.activePet }
					<div className="temp1"></div>
					 */}
					<h1>animalArray</h1>
				</Header>

				{ data.map((x,i) => (
					<Profile
						key={i}
						profile={x}
						active={ this.state.activePet === i }
						onSelect={this.setActivePet.bind(this, i)}
						onClose={this.setActivePet.bind(this, null)}
						/>
				))}
				
				<Typekit kitId="vcz4wqp" />
			</div>
		);
	}

	// setActivePet = profileIndex => {
	setActivePet(profileIndex) {
		console.log('setActivePet');
		console.log(profileIndex)
		this.setState((prev, props) => ({
			activePet: profileIndex === prev.activePet ? null : profileIndex
		}));
	}

	flip(node) {
		const first = node.getBoundingClientRect();
		// const last = node.
	}
	
}

export default App;
