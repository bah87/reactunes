import React from 'react';
import convertTime from './convert_time';
import Explicit from './explicit';
import SongPlay from './song_play';

const RowItem = ({ item, idx }) => {
	const previewAndName = (
  	<div className="song-name-container">
  	  <img src={ item.artworkUrl30 }></img>
      <p className="song-name clip-text">{ item.trackName }</p>
  	</div>
  );

	return (
  	<tr className="song-row-container">
      <SongPlay number={ idx + 1 } song={ item } />
      <td className="song-name-col">{ previewAndName }</td>
      <td className="song-expl-col">
        <Explicit explicitness={ item.trackExplicitness } />
      </td>
      <td className="song-artist-col clip-text">{ item.artistName }</td>
      <td className="song-album-col clip-text">{ item.collectionName }</td>
      <td className="song-time-col">{ convertTime(item.trackTimeMillis) }</td>
      <td className="song-price-col">
        <button>{ `$${item.trackPrice}` }</button>
      </td>
  	</tr>
  );
};

export default RowItem;
