import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import '../containers/App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cats : [],
			searchfield : ''
		}	
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
		return response.json();
		})
		.then(users => {
			this.setState({cats : users})
		});
	}

 	onSearchChange = (event) => {
 		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { cats, searchfield } = this.state;
		const filteredCats = cats.filter( cat => {
			return cat.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (!cats.length) {
			return <h1 className='tc'>Loading</h1>
		} else {
			return (
				<div className= 'tc'>
					<h1 className= "f1">SWEET CATS</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
						 <CardList cats={filteredCats}/>
						</ErrorBoundry>
					</Scroll>
					
				</div>
			);
		}

	}
}

export default App;