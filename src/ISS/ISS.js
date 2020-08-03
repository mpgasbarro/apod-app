import React, { Component } from 'react';


class ISS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iss: {},
			isspic:{},
		};
	}
	componentDidMount() {
		fetch('https://api.wheretheiss.at/v1/satellites/25544')
			.then((res) => res.json())
			.then((res) => {
				this.setState({ iss: res });
			}).then((res) => this.getImage())
			.catch((err) => {
				console.error(err);
			});
	}

	getImage = () => {
		const  longitude = `${this.state.iss.longitude}`; 
		const latitude = `${this.state.iss.latitude}`;
		fetch(`https://api.wheretheiss.at/v1/coordinates/${latitude},${longitude}`)
			.then((response) => response.json())
			.then((response) => {
				this.setState({isspic: response});
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		console.log(this.state.iss.latitude);
		console.log(this.state.iss.longitude);
		console.log(this.state.isspic);
		return (
			<div>

			</div>
		);
	}
}

export default ISS;
