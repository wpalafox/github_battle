import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

// state
// lifescycle event 
// UI 



class App extends Component {
	render() {
		return(
			<div>
			Hello World! 
			</div>
		)
	}
}



ReactDOM.render(<App />, document.getElementById('app')
);