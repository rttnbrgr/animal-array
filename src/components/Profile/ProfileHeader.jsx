import React from 'react';
// import propTypes from 'prop-types'

const ProfileHeader = props => {
	let ageString = `${props.age} years old`;
	return (
		<div className="profile__header">
			<h2>{props.name}</h2>
			<span>{`${props.age} years old`}</span>
		</div>
	)
}

ProfileHeader.protoTypes = {
	name: propTypes.string.isRequired,
	age: propTypes.string.isRequired
}

export default ProfileHeader;
