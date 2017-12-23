import React from 'react';
import './Header.css';

const catRawSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cat-face</title><g id="cat-face"><path d="M23,15H20.94A8.26,8.26,0,0,0,21,14V1L15,6H9L3,1V14a8.26,8.26,0,0,0,.06,1H1a1,1,0,0,0,0,2H3.52c.08.21.16.42.25.63L1.8,18A1,1,0,0,0,2,20l.2,0,2.65-.53a9,9,0,0,0,14.3,0L21.8,20l.2,0a1,1,0,0,0,.2-2l-2-.39c.09-.21.17-.42.25-.63H23a1,1,0,0,0,0-2ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm4,5L9,15h6Zm4-5a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z" /></g></svg>
const dogRawSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dog-face</title><g id="dog-face"><path d="M20,1a4,4,0,0,0-4,4H8A4,4,0,0,0,0,5v7.5a1.5,1.5,0,0,0,3,0V5A1,1,0,0,1,5,5V15a4.94,4.94,0,0,0-1,3,5,5,0,0,0,5,5h6a5,5,0,0,0,5-5,4.94,4.94,0,0,0-1-3V5a1,1,0,0,1,2,0v7.5a1.5,1.5,0,0,0,3,0V5A4,4,0,0,0,20,1ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm4,5c-1.38,0-2.5-.67-2.5-1.5S10.62,15,12,15s2.5.67,2.5,1.5S13.38,18,12,18Zm4-5a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z" /></g></svg>

const AnimalSvg = props => (
	<span className="svg" style={{ flexBasis: '24px'}}>
		{props.cat ? catRawSVG : dogRawSVG}
	</span>
)

const Header = props => (
	<header className="header">
		<AnimalSvg cat/>
		<h1>animalArray</h1>
		<AnimalSvg />
	</header>
)

export default Header;
