import React, { Component } from 'react';

let url=""
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
			`http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
		)
			.then((response) => response.json())
			.then((response) => {
			console.log(response.results[0].locations[0].mapUrl);
				this.setState({ isspic: response.results[0].locations[0].mapUrl });
			})
			.catch((err) => {
				console.error(err);
			});
	};
	;
	render() {
		console.log(this.state.iss.latitude);
		console.log(this.state.iss.longitude);
		console.log(this.state.isspic);
		return (
			<div>
				<img src={this.state.isspic} />
			</div>
		);
	}
}

export default ISS;
