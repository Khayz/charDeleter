import React from 'react';

import classes from './ValidationComponent.module.css';

export default function ValidationComponent(props) {
	let someText = null;
	if (props.userInput.length <= 5) {
		someText = <h3 className={classes.someText}>Text too short</h3>;
	} else {
		someText = <h3 className={classes.someText}>Text long enough</h3>;
	}

	let enjoyText = null;
	if (props.userInput.length >= 1) {
		enjoyText = (
			<h3 className={classes.someText}>Now click in anyword and enjoy!</h3>
		);
	}

	return (
		<div className={classes.userInput}>
			<h3 className={classes.someText}>{props.userInput}</h3>
			{someText}
			{enjoyText}
		</div>
	);
}
