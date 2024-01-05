import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss';

import Drawer from './components/Drawer/index.jsx';
import Header from './components/Header/index.jsx';
import Slider from './components/Slider/index.jsx';
import Favor from './pages/Home/favor.jsx';
import Home from './pages/Home/home.jsx';

function App() {
	const source_main = 'http://localhost:3001/cards_info';
	const source_drawer = 'http://localhost:3001/cards_drawer';
	const source_favor = 'http://localhost:3001/cards_favor';

	const [cards_list, setCards_list] = React.useState([]);
	const [cards_drawer, setCards_drawer] = React.useState([]);
	const [cards_favor, setCards_favor] = React.useState([]);
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

	const OnAddDrawer = obj => {
		try {
			if (cards_drawer.find(item => item.id === obj.id)) {
				OnRemoveDrawer(obj.id);
			} else {
				axios.post(source_drawer, obj);
				setCards_drawer(prev => [...prev, obj]);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	const OnAddFavor = obj => {
		try {
			if (cards_favor.find(item => item.id === obj.id)) {
				OnRemoveFavor(obj.id);
			} else {
				axios.post(source_favor, obj);
				setCards_favor(prev => [...prev, obj]);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	const OnRemoveDrawer = id => {
		axios.delete(source_drawer + `/${id}`);
		setCards_drawer(prev => prev.filter(item => item.id !== id));
	};
	const OnRemoveFavor = id => {
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
					OnRemove={OnRemoveDrawer}
				/>
			) : undefined}
			<div className='wrapper'>
				<Header
					DrawerOpen={() => {
						setIsDrawer(true);
					}}
				/>
				<hr />
				<Routes>
					<Route
						path='/'
						element={
							((<Slider></Slider>),
							(
								<Home
									cards_list={cards_list}
									cards_drawer={cards_drawer}
									cards_favor={cards_favor}
									OnRemoveDrawer={OnRemoveDrawer}
									OnRemoveFavor={OnRemoveFavor}
									OnAddDrawer={OnAddDrawer}
									OnAddFavor={OnAddFavor}
								></Home>
							))
						}
					></Route>
					<Route
						path='/favorites'
						element={
							<Favor
								cards_drawer={cards_drawer}
								cards_favor={cards_favor}
								OnRemoveDrawer={OnRemoveDrawer}
								OnRemoveFavor={OnRemoveFavor}
								OnAddDrawer={OnAddDrawer}
								OnAddFavor={OnAddFavor}
							></Favor>
						}
					></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
