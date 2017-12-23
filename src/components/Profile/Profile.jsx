import React, { Component } from 'react';
import * as classNames from 'classnames';
import './Profile.css';
import propTypes from 'prop-types'

// Profile Info Block
const ProfileInfo = props => (
	<div className="profile__info">
		{Object.keys(props.info).map((x, i) => ([
			<h3 key="1">{x}</h3>,
			<p key="2">{props.info[x]}</p>
		]))}
	</div>
);

ProfileInfo.protoTypes = {
	info: propTypes.object.isRequired
}

// Profile
class Profile extends Component {
	
	render() {

		let { profile, onSelect, onClose, active } = this.props;
		let { name, avatar, info } = profile
		let profileClasses = classNames('profile', { 'active': active })
		const ageString = `${profile.info.age} years old`;

		return (
			<div className={profileClasses}  onClick={ active ? null : onSelect } >
				
				{/* CLOSE */}
				<a className="profile__close" onClick={onClose}>X</a>
				
				{/* HERO */}
				<div 
					className="profile__hero"
					style={{ backgroundImage: `url(${avatar})` }}
					></div>
				{/* <img
					// onClick={()=>{console.log('click hero');}}
					src={avatar}
					alt={name}
					className="profile__avatar profile__hero"
					/> */}

				{/* Profile Header */}
				<div className="profile__header">
					<h1>{name}</h1>
					<h3>{ageString}</h3>
				</div>

				{/* Profile Info */}
				<ProfileInfo info={profile.info} />				

			</div>
		)
	}

}

export default Profile;
