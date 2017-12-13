import React, { Component } from 'react';
import * as classNames from 'classnames';
import './Profile.css';
import {ProfileHeader, ProfileInfo} from './ProfileBits'

class Profile extends Component {
	
	render() {
		let { profile, 
			onSelect,
			onClose,
			active
		} = this.props;
		console.log(`${profile.name} is active? ${active}`);
		let profileClasses = classNames('profile', { 'active': active })

		return (
			<div className={profileClasses} 
				// onClick={ active ? null : onClose }
				onClick={ active ? null : onSelect }
				>
				
				{/* CLOSE */}
				<a className="profile__close" onClick={onClose}>X</a>
				
				{/* HERO */}
				<img
					onClick={()=>{console.log('click hero');}}
					src={profile.avatar}
					alt={profile.name}
					className="profile__avatar profile__hero"
					/>

				<ProfileHeader name={profile.name} age={profile.info.age} />
				<ProfileInfo info={profile.info} />				

			</div>
		)
	}
}

export default Profile;

// const ProfileHeader = props => {
// 	let ageString = `${props.age} years old`; 
// 	return (
		
// 		<div className="profile__header">
// 			<div className="profile__header-inner">
// 				<h2>{props.name}</h2>
// 				<span>{`${props.age} years old`}</span>
// 			</div>
// 		</div>
// 	)
// }
