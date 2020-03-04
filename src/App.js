import React, { Fragment, Component } from 'react';

import classes from './App.module.css';

import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
	state = {
		userInput: ''
	};

	lengthHandler = event => {
		this.setState({ userInput: event.target.value });
	};

	deleteCharHandler = charIndex => {
		const text = this.state.userInput.split('');
		text.splice(charIndex, 1);
		this.setState({ userInput: text.join('') });
	};

	render() {
		let someText = null;
		if (this.state.userInput) {
			someText = (
				<Fragment>
					{this.state.userInput.split('').map((char, index) => (
						<CharComponent
							deleteChar={() => this.deleteCharHandler(index)}
							key={Math.random()}
							char={char}
						/>
					))}
				</Fragment>
			);
		}

		return (
			<div className={classes.App}>
				<div>
					<input
						onChange={this.lengthHandler}
						placeholder='Type Something'
						value={this.state.userInput}
						type='text'
					/>
				</div>
				<ValidationComponent userInput={this.state.userInput} />
				<div className={classes.listChars}>{someText}</div>
			</div>
		);
	}
}

export default App;
