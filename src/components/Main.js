require('../styles/style.css');

import React from 'react';
import Welcome from './Welcome';
import Status from './Status';

let codetainImage = require('../images/codetainImage.png');
let menuhomeImage = require('../images/menuhome.png');
let menustatusImage = require('../images/menustatus.png');

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: 'status'
		};
	}

	onMenuClickHome() {
		this.setState({ menu: 'home'});
	}

	onMenuClickStatus() {
		this.setState({ menu: 'status'});
	}
	
	render() {
		if(this.state.menu == 'home')
		{
			return (
				<div className="main">
					<div id="container">
						<div id="banner1">
							<img src={codetainImage} alt="Codetain" />
						</div>
						<div id="banner2" >
							<a href="#"><img src={menuhomeImage} alt="menuhomeImage" onClick={this.onMenuClickHome.bind(this)} /></a><a href="#"><img src={menustatusImage} alt="menustatusImage" onClick={this.onMenuClickStatus.bind(this)}/></a>
						</div>
						<Welcome />
						<div id="clear" ></div>
						<div id="footer" >Made by <i>Artur Waldemar Kurdyk</i> through recrutation for Jedi Aprentice 2018</div>
					</div>
				</div>
			)
		}

		if(this.state.menu == 'status')
		{
			return (
				<div className="main">
					<div id="container">
						<div id="banner1">
							<img src={codetainImage} alt="Codetain" />
						</div>
						<div id="banner2" >
							<a href="#"><img src={menuhomeImage} alt="menuhomeImage" onClick={this.onMenuClickHome.bind(this)} /></a><a href="#"><img src={menustatusImage} alt="menustatusImage" onClick={this.onMenuClickStatus.bind(this)}/></a>
						</div>
						<Status />
						<div id="clear" ></div>
						<div id="footer" >Made by <i>Artur Waldemar Kurdyk</i> through recrutation for Jedi Aprentice 2018</div>
					</div>
				</div>
			)
		}

	}
}

AppComponent.defaultProps = {
};

export default AppComponent;

