import React, { Component } from 'react';
import * as classNames from 'classnames';
import './Profile/Profile.css';

class Profile extends Component {
	
	render() {
		let { 
			profile, 
			onSelect,
			onClose,
			active
		} = this.props;
		
		let profileClasses = classNames('profile', { 'active': active })

		return (
			<div className={profileClasses}>
				<a 
					className="profile__close"
					onClick={onClose}
					>X</a>
				<div className="profile__card" onClick={onSelect}>
					<img 
						// src={`assets/${profile.avatar}`} 
						src={profile.avatar}
						alt={profile.name} 
						className="profile__avatar" 
						/>
					
					<div className="profile__header">
						<h2>{profile.name}</h2>
						<span>{`${profile.info.age} years old`}</span>
					</div>
				</div>

				<ProfileInfo info={profile.info} />

			</div>
		)
	}
}

export default Profile;

const ProfileInfo = props => {
	
	let { info } = props;

	return (
		<div className="profile__info">
			{Object.keys(info).map((x, i) => {
				
				// don't need the name
				if (x === 'name') { return; }
				
				return ([
					<h3 key="1">{x}</h3>,
					<p key="2">{info[x]}</p>
				])
			})}
		</div>
	)
}
