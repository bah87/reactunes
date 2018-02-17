import React from 'react';
import RowItem from './row_item';

const TableView = ({ items, title }) => {
	const rowItems = items.map((item, idx) => {
     return (
			 <RowItem
         key={ idx }
         idx={ idx }
         item={ item }
      />
     );
  });

	if (rowItems.length === 0) {
		return <div></div>;
	} else {
		return (
			<div>
				<h2>{ title }</h2>
				<table>
					<tbody>
						<tr className="header-row">
							<th></th>
							<th>NAME</th>
							<th></th>
							<th>ARTIST</th>
							<th>ALBUM</th>
							<th>TIME</th>
							<th>PRICE</th>
						</tr>
						{ rowItems }
					</tbody>
				</table>
			</div>
		);
	}
};

export default TableView;
