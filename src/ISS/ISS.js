import React, { Component } from 'react';
import "./ISS.css"

class ISS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iss: {},
			isspic: {},
		};
	}
	componentDidMount() {
		fetch('https://api.wheretheiss.at/v1/satellites/25544')
			.then((res) => res.json())
			.then((res) => {
				this.setState({ iss: res });
			})
			.then((res) => this.getImage())
			.catch((err) => {
				console.error(err);
			});
	}

	getImage = () => {
		const longitude = `${this.state.iss.longitude}`;
		const latitude = `${this.state.iss.latitude}`;
		fetch(
			`http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${latitude},${longitude}`
		) 



			.then((response) => response.json())
			.then((response) => {
				this.setState({ isspic: response.results[0].locations[0].mapUrl });
			})
			.catch((err) => {
				console.error(err);
			});
	};
	;
	render() {
		return (
			<div>
				<main>  
				<img src={this.state.isspic} className="issPic" />
				</main>
				
			</div>
		);
	}
}

export default ISS;
