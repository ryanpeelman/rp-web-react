import React from 'react';

export default class PageNavigatorComponent extends React.Component {
	render() {
		const pages = [
			{ name: "Home" }, 
			{ name: "Profile" }, 
			{ name: "Interact" }
		];
		const pageNavigatorItems = pages.map((page, index) =>
			<PageNavigatorItem key={`item-${index}`} page={page} />
		);

		return (
			<div className="PageNavigatorComponent">
				{pageNavigatorItems}
			</div>
		);
	}
}

class PageNavigatorItem extends React.Component {
	render() {
		const page = this.props.page;
		const isSelected = (page.name === 'Home');

		const navClassName = "page" + (isSelected ? " selected" : "");

		return (
			<div className={navClassName}>
				<div>
					{page.name}
				</div>
			</div>
		);
	}
}