import React, { Component } from 'react';
import Profile from './Profile';
import data from '../data';
import './App.css';

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
				<h1>DEBUG</h1>
				Active Pet: { this.state.activePet }
				
				{ data.map((x,i) => (
					<Profile
						key={i}
						profile={x}
						active={ this.state.activePet === i }
						onSelect={this.setActivePet.bind(this, i)}
						onClose={this.setActivePet.bind(this, null)}
						/>
				))}
			</div>
		);
	}

	setActivePet(profileIndex) {
		console.log('setActivePet');
		console.log(profileIndex)
		// this.setState((prev, props) => {
		// 	activePet: profileIndex
		// })
		this.setState({
			activePet: profileIndex
		})
	}
	
}

export default App;
