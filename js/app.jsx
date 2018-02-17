import React from 'react';
import Header from '../js/header';
import Query from '../js/query';
import SearchResults from '../js/search_results';
import SearchListOptions from '../js/search_list_options';

export default class App extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {
			query: "",
      searchType: "All",
      songs: [],
			albums: [],
      musicVideos: [],
      movies: [],
      podcasts: [],
      audiobooks: []
    };
  	this.updateState = this.updateState.bind(this);
    this.narrowResults = this.narrowResults.bind(this);
  }

  narrowResults(searchType) {
  	return () => {
    	this.setState({ searchType });
    };
  }

  updateState(newState) {
		this.setState({
    	searchType: "All",
    	songs: newState.songs,
      query: newState.query,
      albums: newState.albums,
      musicVideos: newState.musicVideos,
      movies: newState.movies,
      podcasts: newState.podcasts,
      audiobooks: newState.audiobooks
    });
	}

  render() {
    return (
      <div>
				<Header
          updateState={ this.updateState }
          searchType={ this.state.searchType } />
				<div className="body-wrapper">
					<Query query={ this.state.query } />
        	<div className="results-body">
        	  <SearchResults state={ this.state } />
            <SearchListOptions
              show={ this.state.query.length > 0 }
              narrowResults={ this.narrowResults }
              searchType={ this.state.searchType }/>
        	</div>
				</div>
      </div>
    );
  }
}
