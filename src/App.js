import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import { Route, Link} from "react-router-dom";
import Home from "./Home/Home";
import Picture from "./Picture/Picture";
import Calendar from "./Calendar/Calendar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const url1 = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apod: {},
			
		};
	}
	componentDidMount() {
		fetch(url1)
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
					<Calendar />
				</header>
				<main>
					<Link to='/'> Home </Link>
				</main>
				<Route path='/' exact render={() => <Home apod={this.state.apod} />} />
				<Link to="/show/:oldapod"> More Pictures!</Link>
				<Route path='/show/:oldapod' exact component={Picture}
				/>
			</div>
		);
	}
}

export default App;
