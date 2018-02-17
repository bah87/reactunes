import React from 'react';

const SearchListOptions = ({ show, narrowResults, searchType }) => {
	if (show) {
  	return (
    	<ul className="search-list-options">
        <li
          className={ searchType === "All" ? "active" : "nonactive" }
          onClick={ narrowResults("All") }>
          All
        </li>
        <li
          className={ searchType === "Songs" ? "active" : "nonactive" }
          onClick={ narrowResults("Songs") }>
          Songs
        </li>
        <li
          className={ searchType === "albums" ? "active" : "nonactive" }
          onClick={ narrowResults("albums") }>
          Albums
        </li>
        <li
          className={ searchType === "musicVideos" ? "active" : "nonactive" }
          onClick={ narrowResults("musicVideos") }>
          Music Videos
        </li>
        <li
          className={ searchType === "movies" ? "active" : "nonactive" }
          onClick={ narrowResults("movies") }>
          Movies
        </li>
        <li
          className={ searchType === "podcasts" ? "active" : "nonactive" }
          onClick={ narrowResults("podcasts") }>
          Podcasts
        </li>
        <li
          className={ searchType === "audiobooks" ? "active" : "nonactive" }
          onClick={ narrowResults("audiobooks") }>
          Audiobooks
        </li>
      </ul>
    );
  } else {
  	return null;
  }
};

export default SearchListOptions;
