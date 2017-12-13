import React from 'react';
// import * as classNames from 'classnames';
import propTypes from 'prop-types'

const ProfileHeader = props => {
	let ageString = `${props.age} years old`;
	return (

		<div className="profile__header">
			<div className="profile__header-inner">
				<h2>{props.name}</h2>
				<span>{`${props.age} years old`}</span>
			</div>
		</div>
	)
}

ProfileHeader.protoTypes = {
	name: propTypes.string.isRequired,
	age: propTypes.string.isRequired
}

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

ProfileInfo.protoTypes = {
	info: propTypes.object.isRequired
}

export {
	ProfileInfo,
	ProfileHeader
}
