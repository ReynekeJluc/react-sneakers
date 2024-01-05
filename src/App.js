import axios from 'axios';
import React, { useEffect } from 'react';
import './index.scss';

import Card from './components/Card/index.js';
import Drawer from './components/Drawer/index.js';
import Header from './components/Header/index.js';
import Slider from './components/Slider/index.js';

function App() {
	const source_main = 'http://localhost:3001/cards_info';
	const source_drawer = 'http://localhost:3001/cards_drawer';
	const source_favor = 'http://localhost:3001/cards_favor';

	const [cards_list, setCards_list] = React.useState([]);
	const [cards_drawer, setCards_drawer] = React.useState([]);
	const [cards_favor, setCards_favor] = React.useState([]);
	const [search_input, setSearch_input] = React.useState('');
	const [isDrawer, setIsDrawer] = React.useState(false);

	useEffect(() => {
		async function fetchData() {
			const cardItems = await axios.get(source_main);
			const cardDrawer = await axios.get(source_drawer);
			const cardFavor = await axios.get(source_favor);

			setCards_list(cardItems.data);
			setCards_drawer(cardDrawer.data);
			setCards_favor(cardFavor.data);
		}

		fetchData();
	}, []);

	const ChangeInput = e => {
		setSearch_input(e.target.value);
	};

	const onAddDrawer = obj => {
		try {
			if (cards_drawer.find(item => item.id === obj.id)) {
				onRemoveDrawer(obj.id);
			} else {
				axios.post(source_drawer, obj);
				setCards_drawer(prev => [...prev, obj]);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	const onRemoveDrawer = id => {
		axios.delete(source_drawer + `/${id}`);
		setCards_drawer(prev => prev.filter(item => item.id !== id));
	};
	const onAddFavor = obj => {
		axios.post(source_favor, obj);
		setCards_favor(prev => [...prev, obj]);
	};
	const onRemoveFavor = id => {
		axios.delete(source_favor + `/${id}`);
		setCards_favor(prev => prev.filter(item => item.id !== id));
	};

	return (
		<div className='App'>
			{isDrawer ? (
				<Drawer
					items={cards_drawer}
					DrawerOpen={() => {
						setIsDrawer(false);
					}}
					OnRemove={onRemoveDrawer}
				/>
			) : undefined}
			<div className='wrapper'>
				<Header
					DrawerOpen={() => {
						setIsDrawer(true);
					}}
				/>
				<hr />
				<div className='wrapper__content'>
					<Slider></Slider>
					<div className='content'>
						<div className='content__title'>
							<h2>
								{search_input
									? `Поиск по запросу "${search_input}"`
									: 'Все кроссовки'}
							</h2>
							<div className='content__search'>
								<img
									src='/img/icons/search.svg'
									className='search__btn'
									alt='search'
								/>
								<input
									onChange={ChangeInput}
									value={search_input}
									type='search'
									placeholder='Поиск...'
								/>
								{search_input && (
									<img
										onClick={() => setSearch_input('')}
										src='/img/icons/clear.png'
										className='clear__btn'
										alt='clear'
									/>
								)}
							</div>
						</div>
						<ul className='list__sneakers'>
							{cards_list
								.filter(item =>
									item.name.toLowerCase().includes(search_input.toLowerCase())
								)
								.map(item => (
									<Card
										id={item.id}
										image_url={item.imageUrl}
										title={item.name}
										price={item.price}
										OnPlus={obj => onAddDrawer(obj)}
										OnFavor={obj => onAddFavor(obj)}
										OnRemove={obj => onRemoveDrawer(obj.id)}
										added={cards_drawer.some(obj => obj.id === item.id)}
									/>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
