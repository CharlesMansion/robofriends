import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';

import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
		robots: [],
		searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(yolo => this.setState({robots : yolo}));
}
	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value})
		
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? 
			<h1>Loading</h1> : 
		(
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<Searchbox searchChange = {this.onSearchChange} />
				<Scroll>
				<Cardlist robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}
export default App;
