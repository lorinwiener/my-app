import React, { Component } from 'react';

import '../styles/search-box.css';


class SearchBox extends Component {

	constructor(props) {
		
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);

		this.state = {
			isFocused: false
		}

	}

	// componentWillMount() {

	// }

	// componentWillReceiveProps(nextProps) {
	  
	// }

	// componentWillUnmount() {

	// }

	handleChange(event) {
		if(event.target.value && this.props.onSearch) {
			this.props.onSearch(event.target.value);
		} else if(this.props.onClear) {
			this.props.onClear();
		}
	}

	handleFocus() {
		this.setState({
			isFocused: true
		});
	}

	handleBlur() {
		this.setState({
			isFocused: false
		});
	}

	render() {

		return (
			<input
				className="search-box"
				value={this.props.value}
				type="text"
				placeholder="Search"
				onChange={this.handleChange}
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
			/>
		);

	}

}

export default SearchBox;
