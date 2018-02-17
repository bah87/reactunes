import React from 'react';

const Query = ({ query }) => {
	if (query.length === 0) {
		return <div></div>;
	} else {
		return <h1>{ `Showing results for "${query}"` }</h1>;
	}
};

export default Query;
