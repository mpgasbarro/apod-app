import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Picture from './Picture/Picture';
import Calendar from './Calendar/Calendar';
import moment from 'moment';
import ISS from "./ISS/ISS"

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

	getImage = (date) => {
		const newUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}&date=${date}`;

		fetch(newUrl)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ apod: res });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleDateSelection = (date) => {
		const newDate = moment(date).format('yyyy-MM-DD');
		this.getImage(newDate);
	};

	render() {
		return (
			<div className="background">
				<header>
					{' '}
					<Header />
				</header>
				<nav className='navComp'>
					<Link to='/'><button className="homeBtn"> Home  </button></Link>
					<Link to="/iss"><button className="issBtn"> ISS </button> </Link>
					<Calendar
						className='calendar'
						selectedDate={this.state.selectedDate}
						handleDateSelection={this.handleDateSelection}
					/>
					<Link to='/show/newpic'><button className="randomPic"> Random Picture </button> </Link>
				</nav>
				<main>
					<Route
						path='/'
						exact
						render={() => <Home apod={this.state.apod} />}
					/>
					<Route
						path='/show/newpic'
						exact
						render={(routerProp) => {
							return (
								<Picture newPic={this.state.apod} match={routerProp.match} />
							);
						}}
					/>
					<Route path="/iss" exact component={ISS} />
				</main>
			</div>
		);
	}
}

export default App;
