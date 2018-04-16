import React from 'react';

class WelcomeComponent extends React.Component {
	render() {
		return (
			<p className="Welcome">
			<div id="clear" ></div>
				<div id="title"><h1>AasF POWER SOURCE</h1></div>
				<div id="clear" ></div>
				
				<div id="subs">
					<div id="subscol"><h1>Why our powersource?</h1> Our powersource is designed for true Jedi who want not to stuck in awkward situation where his Saber or Wehicle goes powerless. Choose us!!!</div>
					<div id="subscol"><h1>Need new LightSaber?</h1> Unleas we are the best PowerSource producent we are also undefeated leader in production of the PremiumClass Sabers.</div>
					<div id="subscol"><h1>Mobile app?</h1>Try our mobile app to stay up to date with your Saber and Vehicle power level. Remember! Use only best and recomended PowerSource.</div>
				</div>
		
			</p>
		);
	}
}

export default WelcomeComponent;