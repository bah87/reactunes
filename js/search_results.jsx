import React from 'react';
import TableView from './table_view';
import ScrollView from './scroll_view';

const SearchResults = ({ state }) => {
	switch (state.searchType) {
    case "All":
      return (
        <div className="broad-results">
          <TableView items={ state.songs.slice(0,10) } title="Songs" />
          <ScrollView styleClass="scrolling-wrapper"
            items={ state.albums } title="Albums" />
          <ScrollView styleClass="scrolling-wrapper"
            items={ state.musicVideos } title="Music Videos" />
          <ScrollView styleClass="scrolling-wrapper"
            items={ state.movies } title="Movies" />
          <ScrollView styleClass="scrolling-wrapper"
            items={ state.podcasts } title="Podcasts" />
          <ScrollView styleClass="scrolling-wrapper"
            items={ state.audiobooks } title="Audiobooks" />
        </div>
      );
    case "Songs":
      return (
        <div className="broad-results">
          <TableView items={ state.songs } title="Songs" />
        </div>
      );
    default:
      return (
        <div className="broad-results">
          <ScrollView styleClass="grid"
            items={ state[state.searchType] } title={ state.searchType } />
        </div>
      );
  }
};

export default SearchResults;
