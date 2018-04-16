import React from 'react';
import axios from 'axios';

require('../styles/style.css');

let falconImage = require('../images/falcon.png');
let saberImage = require('../images/saber.png');

class StatusComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textAlign: 'center',
			powerFalcon: 0,
			powerSaber: 0,
			sumaPower: 0,
			bgColorFalcon: 'white',
			bgColorSaber: 'white',
			width:'160px',
			height: '140px',
			textAlign: 'center',
			borderRadius: '80px',
			borderColorFalcon: 'yellow',
			borderColorSaber: 'yellow',
			borderFalcon: '4px solid gray',
			borderSaber: '4px solid gray',
			paddingTop: '20px',
			currentCount: 2,
			priorized: 0
		};
	}
	
	onButtonClickFalcon() {
		if(this.state.priorized==1){
			this.setState({ bgColorFalcon: 'white'});
			this.setState({ bgColorSaber: 'white'});
			this.setState({ priorized: 0});
		}
		
		if(this.state.priorized==2 || this.state.priorized==0){
			this.setState({ bgColorFalcon: 'yellow'});
			this.setState({ bgColorSaber: 'white'});
			this.setState({ priorized: 1});
		}
	}
	
	onButtonClickSaber() {
		if(this.state.priorized==2){
			this.setState({ bgColorFalcon: 'white'});
			this.setState({ bgColorSaber: 'white'});
			this.setState({ priorized: 0});
		}
		
		if(this.state.priorized==1 || this.state.priorized==0){
			this.setState({ bgColorFalcon: 'white'});
			this.setState({ bgColorSaber: 'yellow'});
			this.setState({ priorized: 2});
		}
	}
	
	randomNumber= (max, min) => {
		let num = Math.floor(Math.random() * (max - min +1)) + min;
		return num;
	}
	
	timer() {
		if(this.state.currentCount % 11 == 0){
			this.setState({
				currentCount: 1
			});

			if(this.state.priorized==0) this.setState({link: 'https://challenge.codetain.com/api/v1/charging_status'});
			if(this.state.priorized==1) this.setState({link: 'https://challenge.codetain.com/api/v1/charging_status?priority=falcon'});
			if(this.state.priorized==2) this.setState({link: 'https://challenge.codetain.com/api/v1/charging_status?priority=lightsaber'});

			axios.get(this.state.link).then(res => {
				this.setState({ powerFalcon: res.data.charging_status.falcon, powerSaber: res.data.charging_status.lightsaber });
				this.setState({sumaPower: this.state.powerFalcon + this.state.powerSaber});
				if(this.state.powerFalcon>0) this.setState({ borderFalcon: '4px solid green' });
				if(this.state.powerFalcon==0) this.setState({ borderFalcon: '4px solid gray' });
				if(this.state.powerSaber>0) this.setState({ borderSaber: '4px solid green' });
				if(this.state.powerSaber==0) this.setState({ borderSaber: '4px solid gray' });
				this.setState({
					currentCount: this.state.currentCount + 1
				});
			});
		}
		
		this.setState({sumaPower: this.state.powerFalcon + this.state.powerSaber});
		if(this.state.powerFalcon>0) this.setState({ borderFalcon: '4px solid green' });
		if(this.state.powerFalcon==0) this.setState({ borderFalcon: '4px solid gray' });
		if(this.state.powerSaber>0) this.setState({ borderSaber: '4px solid green' });
		if(this.state.powerSaber==0) this.setState({ borderSaber: '4px solid gray' });
		this.setState({
			currentCount: this.state.currentCount + 1
		});
	}

	componentDidMount() {
		this.intervalId = setInterval(this.timer.bind(this), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
		
	render() {
		return (
			<div className="status">
				<div id="clear">
					<h1>TOTAL POWER: {this.state.sumaPower} kW</h1>
				</div>
				
				<div id="statuscol">
					<div id="statuscolright">
						<div className="statusfalcon">
							<div style={{backgroundColor:this.state.bgColorFalcon,width:this.state.width,height:this.state.height,borderRadius:this.state.borderRadius,textAlign:this.state.textAlign,paddingTop:this.state.paddingTop,border:this.state.borderFalcon}}>
								<div onClick={this.onButtonClickFalcon.bind(this)}><img src={falconImage} alt="falconImage" /></div>
							</div>
						</div>
						<h1> {this.state.powerFalcon} kW</h1>
					</div>
				</div>
				<div id="statuscol">
					<div id="statuscolleft">
						<div className="statussaber">
							<div style={{backgroundColor:this.state.bgColorSaber,width:this.state.width,height:this.state.height,borderRadius:this.state.borderRadius,textAlign:this.state.textAlign,paddingTop:this.state.paddingTop,border:this.state.borderSaber}}>
								<div onClick={this.onButtonClickSaber.bind(this)}><img src={saberImage} alt="falconImage" /></div>
							</div>
						</div>
						<h1> {this.state.powerSaber} kW</h1>
					</div>
				</div>
			</div>
		);
	}
}
export default StatusComponent;