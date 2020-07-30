import React, { Component } from 'react';
import './Picture.css';




// Function to set the date back 1 day. Got help from Stack OverFlow
const changeDate = (urlString, days) => {
	let url = new URL(urlString);
	let date = new Date(url.searchParams.get('date') + 'T15:00:00.000Z');
	date.setDate(date.getDate() + days);
	url.searchParams.set('date', date.toISOString().split('T')[0]);
	return url.href;
};

// New URL that populates for the day prior.
let newUrl = changeDate(
	`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}&date=2020-07-30`,
	-1
);

console.log(newUrl);

class Picture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apod: {},
		};
	}
	componentDidMount() {
		fetch(newUrl)
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
				<img
					className='secondPic'
					src={this.state.apod.url}
					atl='more planets'
				/>
			</div>
		);
	}
}

export default Picture;
