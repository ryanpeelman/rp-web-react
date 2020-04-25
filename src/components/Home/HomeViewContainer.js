import React from 'react';

import HomeView from './HomeView';
import NavigationComponent from '../Navigation/NavigationComponent';

export default class HomeViewContainer extends React.Component {
	render() {
		return (
			<div className="HomeViewContainer">
				<NavigationComponent />
				<HomeView />
			</div>
		);
	}
}