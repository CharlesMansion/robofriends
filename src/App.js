import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './Robots';
import Searchbox from './Searchbox';

const App = () => {
	return (
		<div className="tc">
			<h1>Robofriends</h1>
			<Searchbox />
			<Cardlist robots={robots}/>
		</div>
	)
}

export default App;
