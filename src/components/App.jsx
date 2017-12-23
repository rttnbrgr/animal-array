import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import data from '../data';
import './App.css';
import Typekit from 'react-typekit';
import FlipMove from 'react-flip-move';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			activePet: null
			// activePet: 0
		}
		// this.setActivePet = this.setActivePet.bind(this);
		this.getFlipStyles = this.getFlipStyles.bind(this);
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	}

	componentDidUpdate(prevProps) {
		console.error('componentDidUpdate');
		console.log('STATE:', this.state)
		if (this.state.activePet !== null) {
			const node  = document.getElementsByClassName('profile')[this.state.activePet];
			let newBox = node.getBoundingClientRect();
			console.log('newBox', newBox);
			
			const first = this.state.oldBox;
			const last = newBox;
			console.log('oldBox', first);
			// const deltaX = first.left - last.left;
			// const deltaY = first.top - last.top;
			const deltaX = first.left;
			const deltaY = first.top;
			const deltaW = first.width / last.width;
			const deltaH = first.height / last.height;
			console.log(`
				deltaX: ${deltaX}, 
				deltaY: ${deltaY}, 
				deltaW: ${deltaW}, 
				deltaH: ${deltaH}`);

			requestAnimationFrame( () => {
				console.log('hi');
				// style before!
				// node.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
				
				// node.style.transform = `translate(0px, ${deltaY}px)`;
				// node.style.transition = `transform 0s, all 0s`;
				// styles after
				requestAnimationFrame(() => {
					console.log('hi again');
					// node.style.transform = ``;
					// node.style.transition = `transform 3s, all 3s`;
					// node.style.transition = `transform 300ms, all 300ms`;
				});
			});

		}

	}

	render() {
		return (
			// <div className={`app ${this.state.activePet !== null ? 'active' : ''}`}>
			<div className="app">
				
				<Header/>

				{data.map((x,i) => (
					<Profile
						key={i}
						profile={x}
						active={ this.state.activePet === i }
						onSelect={ this.setActivePet.bind(this, i) }
						onClose={this.setActivePet.bind(this, null)}
						/>
				))}

				{/* <div 
					className="sample"
					style={this.getFlipStyles()}
					>
					sample
				</div> */}
				
				<Typekit kitId="vcz4wqp" />
			</div>
		);
	}



	// setActivePet = profileIndex => {
	setActivePet(profileIndex) {
		console.log(`setActivePet(${profileIndex})`);
		console.log(`this.state.activePet: ${this.state.activePet}`);
		
		
		if (profileIndex !== null) {
			// get first node,
			console.log('GETNODE');
			let node = document.getElementsByClassName('profile')[profileIndex];
			console.log(node);
			let nodeBox = node.getBoundingClientRect();
			console.log(nodeBox);
			
			// safe it to sate
			this.setState((prev, props) => ({
				oldBox: nodeBox,
				activePet: profileIndex === prev.activePet ? null : profileIndex
			}));

		}

		else {

			this.setState((prev, props) => ({
				activePet: profileIndex === prev.activePet ? null : profileIndex
			}));
		}

		

	}

	getRef(e) { console.log('getref'); }
	
	getFlipStyles() {
		let first = {
			bottom: 433,
			height: 353,
			left: 16,
			right: 359,
			top: 80,
			width: 343,
			x: 16,
			y: 80
		}

		const last = { 
			x: 0, 
			y: 0, 
			width: 375, 
			height: 667, 
			top: 0,
			bottom: 667,				
			left: 0,
			right: 375,
		}

		const deltaX = first.left - last.left;
		const deltaY = first.top - last.top;
		const deltaW = first.width - last.width;
		const deltaH = first.height- last.height;
		
		// const transformStart = {

		// }
		
		// elm.animate([{
		// 	transformOrigin: 'top left',
		// 	transform: `
		// 		// translate(${deltaX}px, ${deltaY}px)
		// 		// scale(${deltaW}, ${deltaH})
		// 		translate(100px, 100px)
		// 	`
		// }, {
		// 	transformOrigin: 'top left',
		// 	transform: 'none'
		// }], {
		// 	duration: 300,
		// 	easing: 'ease-in-out',
		// 	fill: 'both'
		// });

		// elm.animate([{
		// 	transformOrigin: 'top left',
		// 	transform: `translate(100px, 100px)`
		// }, {
		// 	transformOrigin: 'top left',
		// 	transform: 'none'
		// }], {
		// 		duration: 300,
		// 		easing: 'ease-in-out',
		// 		fill: 'both'
		// 	});

		return {}
	}
	
}

export default App;

// class ProfileGroup extends Component {
// 	render(
// 		<div>
// 			{this.props.children}
// 		</div>
// 	)
// }
