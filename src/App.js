import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './Robots';
import Searchbox from './Searchbox';

class App extends Component {
	constructor() {
		super()
		this.state = {
		robots: robots,
		searchfield: ''
		}
	}
	render() {
		return (
			<div className="tc">
				<h1>Robofriends</h1>
				<Searchbox />
				<Cardlist robots={robots}/>
			</div>
		)
	}
}
export default App;
