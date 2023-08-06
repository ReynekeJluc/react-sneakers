import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {

	const [cards, setCards] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [drawerOpened, setdrawerOpened] = React.useState(false);

	const onChangeSearch = (event) => {
		setSearchValue(event.target.value);
	}

	React.useEffect(() => {
		axios.get('https://64c5c9dac853c26efadaf012.mockapi.io/sneakers'
		).then((response) => {
			let data = response.data;
			setCards(data);
		}).catch((error) => {
			console.log(error.message);
		})
	}, []);

	return (
		<div className="wrapper">
			<Header OnClickDrawer = { () => setdrawerOpened(true) } />
			{drawerOpened ? <Drawer OnCloseDrawer = { () => setdrawerOpened(false) } /> : null}
			<div className="content">
				<div className="content__title">
					<h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
					<div className="search__block">
						<img src="/img/icons/search.svg" alt="search"/>
						<input onChange={onChangeSearch} value={searchValue} type="search" placeholder="Поиск..."></input>	
					</div>
				</div>
				<div className="cards">
					{cards.filter(item => String(item.name).includes(String(searchValue))).map((obj, index) => (
						<Card
							key = { index }
							name = { obj.name }
							price = { obj.price }
							imageUrl = { obj.imageUrl }
						/>
					))}
				</div>
			</div>
		</div>
	);
	
}

export default App;