import React, { Component } from 'react';


class Popular extends React.Component {
  


/*
  constructor() {
  	super(props);
  	this.state = {
		selectedLanguage: 'All'
	};
}	

updateLanguage(lang){
	this.setState(function(){
		return(
			selectedLanguage: lang

			)



	});
}
*/
render () {
		
		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
		
		return(
			<ul className='languages'>
				{languages.map(function(lang) {
					return (
					  <li key={lang}>
					  	{lang}	
					  </li>
						)
				})}
			</ul>
		
		)
	}
}




module.exports = Popular;