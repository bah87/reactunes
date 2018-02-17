import React from 'react';

const ScrollItem = ({ item, type }) => {
	let title; let price; let name;
  if (type === "Albums" || type === "Podcasts" || type === "Audiobooks") {
  	title = item.collectionName;
    price = type === "Podcasts" ?
    <button className="empty-btn"></button> :
      <button>{ `$${item.collectionPrice}` }</button>;
    name = item.artistName;
  } else if (type === "Music Videos") {
  	title = item.trackName;
    price = item.trackPrice === -1 ?
    <button className="empty-btn"></button> :
      <button>{ `$${item.trackPrice}` }</button>;
    name = item.artistName;
  } else if (type === "Movies") {
  	title = item.trackName;
    price = null;
    name = item.primaryGenreName;
  }

	return (
    <div className="album-item-wrapper">
      <div className="album-item">
        <img src={ item.artworkUrl100 }></img>
        <div className="album-name-rating">
          <div className="album-title clip-text">{ title }</div>
          <Explicit explicitness={ item.collectionExplicitness } />
        </div>
        <div className="album-artist clip-text">{ name }</div>
        <div className="album-price">{ price }</div>
      </div>
    </div>
  );
};

export default ScrollItem;
