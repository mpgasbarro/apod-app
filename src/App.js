import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import { Route, Link} from "react-router-dom";
import Home from "./Home/Home";
import Picture from "./Picture/Picture";
import Calendar from "./Calendar/Calendar";
import moment from "moment";

const url1 = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apod: {},
			selectedDate: null,
			
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

	handleDateSelection = (date,) => {
		const newDate = moment(date).format("yyyy-MM-DD");
		this.setState({selectedDate: newDate})
		console.log(newDate);
	}

	render() {
		return (
			<div>
				<header className='topOfMenu'>
					<Header />
				</header>
				<main>
					<Calendar className="calendar" selectedDate = {this.state.selectedDate} handleDateSelection={this.handleDateSelection} 
					/>
					<Link to='/'> Home </Link>
				</main>
				<Route path='/' exact render={() => <Home apod={this.state.apod} />} />
				<Link to='/show/:oldapod'> <Picture /> </Link>
				<Route path='/show/:oldapod' exact component={Picture} />
			</div>
		);
	}
}

export default App;
