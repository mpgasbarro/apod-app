import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header"

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apod: {},
		};
	}
	componentDidMount() {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ apod: res });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		console.log(this.state.apod);
		return (
			<div>
				<header>
					<Header />
				</header>
				<p></p>
			</div>
		);
	}
}

export default App;
