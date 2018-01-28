import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
require('./index.css');




/*
class App extends Component {
	render() {
		return(
			<div>
			Hello World! 
			</div>
		)
	}
}
*/

var USER_DATA = {
	name: 'Will Palafox',
	img: {image:'http://i0.kym-cdn.com/entries/icons/mobile/000/025/249/fiona.jpg'},
	





	username:  'wpalafox'
}




class Badge extends React.Component {
	render(){
	 return(
	  <div>
	  	<img src={this.props.user.img} 
	  	alt='Avatar'
	  	style={{width: 100, height: 100}}
	  
		/>

	  	<h1>Name:{this.props.user.name} </h1>
	  	<h3>username:{this.props.user.username} </h3>
	  </div>				
	  )
	}
}


Badge.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
}

ReactDOM.render(
	<Badge user={USER_DATA}/>,
	document.getElementById('app')
);