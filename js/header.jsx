import ajaxCall from './ajax_call.js';
import React from 'react';

class Header extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {
    	query: "",
      searchType: this.props.searchType,
      songs: [],
			albums: [],
      musicVideos: [],
      movies: [],
      podcasts: [],
      audiobooks: []
    };
  	this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillReceiveProps(newProps) {
  	if (newProps.searchType !== this.props.searchType) {
    	this.setState({ searchType: newProps.searchType });
    }
  }

  handleChange(event) {
  	this.setState({ query: event.target.value });
  }

  updateState(queryResults, field) {
  	this.setState(
      { [field]: queryResults },
      () => this.props.updateState(this.state)
    );
  }

  handleSearch(event) {
  	event.preventDefault();
    ajaxCall(this.state.query, "song", this.updateState);
    ajaxCall(this.state.query, "album", this.updateState);
    ajaxCall(this.state.query, "musicVideo", this.updateState);
    ajaxCall(this.state.query, "movie", this.updateState);
    ajaxCall(this.state.query, "podcast", this.updateState);
    ajaxCall(this.state.query, "audiobook", this.updateState);
  }

  render() {
    return (
      <div className="main-header">
				<div className="apple-container">
					<i className="fab fa-apple"></i>
				</div>
				<div className="searchbar-wrapper">
					<i className="fas fa-search"></i>
					<form onSubmit={this.handleSearch}>
						<input
							className="search-input"
							type="text"
							value={this.state.query}
							placeholder="Search"
							onChange={this.handleChange}>
						</input>
					</form>
				</div>
			</div>
    );
  }
}

export default Header;
