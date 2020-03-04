import React from 'react';

import './CharComponent.css';

export default function CharComponent(props) {
	return (
		<div onClick={props.deleteChar} className='Char'>
			{props.char}
		</div>
	);
}
