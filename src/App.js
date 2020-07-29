import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import { Route, Link} from "react-router-dom";
import Home from "./Home/Home"

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
		return (
			<div>
				<header>
					<Header />
				</header>
				<main> 
					<Link to="/"> Home </Link>
				</main>
				<Route path="/" exact render={() => <Home apod={this.state.apod} /> 
				} />
			</div>
		);
	}
}

export default App;
