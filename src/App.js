import React, { Component } from 'react';
import './App.css';

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
      api:{},
    };
	}
	componentDidMount() {    
    fetch(url) 
			.then((res) => res.json())
			.then((res) => {
				this.setState({api: res });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
    console.log(this.state.api);
		return (
			<div >
				<p>Hello</p>
			</div>
		);
	}
}

export default App;
