import React, { Component } from 'react';
import './Home.css';
import YouTube from 'react-youtube';

class Home extends Component {
	_onReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	render() {
		const opts = {
			height: '740',
			width: '940',
		};
		if (this.props.apod.media_type === 'video') {
			return (
				<div>
					<h2 className='apodTitle'> {this.props.apod.title} </h2>
					<h5 className='copyright'>
						{' '}
						Copyright: {this.props.apod.copyright}{' '}
					</h5>
					<div className='picAndDesYoutube'>
						<YouTube
							className='youtube'
							videoId={this.props.apod.url.split('/embed/')[1]}
							opts={opts}
							onReady={this._onReady}
						/>
						<p className='apodYouTubeDescription'>
							{' '}
							{this.props.apod.explanation}{' '}
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h2 className='apodTitle'> {this.props.apod.title} </h2>
					<h5 className='copyright'>
						{' '}
						Copyright: {this.props.apod.copyright}{' '}
					</h5>
					<div className='picAndDes'>
						<img
							className='pictureOfDay'
							src={this.props.apod.url}
							alt={this.props.apod.explanation}
						/>
						<p className='apodDescription'> {this.props.apod.explanation} </p>
					</div>
				</div>
			);
		}
	}
}

export default Home;
