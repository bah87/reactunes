import React from 'react';
import ScrollItem from './scroll_item';

const ScrollView = ({ items, title, styleClass }) => {
  const type = title === "musicVideos" ? "Music Videos" :
  title[0].toUpperCase() + title.slice(1);

	const scrollItems = items.map((item, idx) => {
		return (
			<ScrollItem
				key={ idx }
				item={ item }
        type={ type }
			/>
		);
	});

	if (scrollItems.length === 0) {
		return <div></div>;
	} else {
		return (
			<div>
				<h2>{ type }</h2>
				<div className={ styleClass }>
					{ scrollItems }
				</div>
			</div>
		);
	}
};

export default ScrollView;
