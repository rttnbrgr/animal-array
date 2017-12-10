import React, { Component } from 'react';

import * as classNames from 'classnames';
import './Profile/Profile.css';

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
	info: PropTypes.object.isRequired
}

export default ProfileInfo;
