import React, { Component } from 'react';
import "./Home.css"


class Home extends Component {
    render() {
        return (
					<div>
                        <h2 className="apodTitle"> {this.props.apod.title} </h2>
                        <h5 className="copyright"> Copyright: {this.props.apod.copyright} </h5>
                        <div className="picAndDes"> 
						<img className="pictureOfDay" src={this.props.apod.url} alt={this.props.apod.explanation} />
                        <p className="apodDescription"> {this.props.apod.explanation} </p>
                        </div>
					</div>
				);
    }
}

export default Home;