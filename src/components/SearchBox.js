import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div>
		<input className="ph3 pv3 ma1 br2 mb3 ba b--blue b-lightest-blue" type="search" placeholder="Search Cats" 
		onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;