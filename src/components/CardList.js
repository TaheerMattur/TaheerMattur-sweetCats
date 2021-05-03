import React from 'react';
import Card from '../components/Card';

const CardList = ({ cats }) => {
	const CardComponent = cats.map((cat, i) => {
		return (
		 <Card 
			key={i} 
			id={cats[i].id} 
			name={cats[i].name} 
			email={cats[i].email} 
		 />
		);
	});

	return (
			<div>
				{CardComponent}
  			</div>
	);
}

export default CardList;