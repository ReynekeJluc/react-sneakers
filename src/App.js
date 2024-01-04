import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

import Drawer from './components/Drawer/index.js';
import Header from './components/Header/index.js';
import Slider from './components/Slider/index.js';
import Card from './components/Card/index.js';

function App() {
	const source = "http://localhost:3001/cards_info";
	const [ cards_list, setCards_list ] = React.useState([]);
	const [ search_input, setSearch_input ] = React.useState('');
	const [ isDrawer, setIsDrawer ] = React.useState(false);

	useEffect(() => {
		axios.get(source).then((data) => {
			setCards_list(data.data);
		}).catch((error) => {
			console.log(error.message);
		})
	}, []);
	const ChangeInput = (e) => {
		setSearch_input(e.target.value);
	}

	return (
		<div className="App">
			{ isDrawer ? <Drawer DrawerOpen={() => { setIsDrawer(false) }} /> : undefined }
			<div className="wrapper">
				<Header DrawerOpen={() => { setIsDrawer(true) }} />
				<hr />
				<div className="wrapper__content">
					<Slider></Slider>
					<div className="content">
						<div className="content__title">
							<h2>{ search_input ? `Поиск по запросу "${ search_input }"` : "Все кроссовки" }</h2>
							<div className="content__search">
								<img src="/img/icons/search.svg" className="search__btn" alt="search" />
								<input 
									onChange={ ChangeInput } 
									value={ search_input } 
									type="search" 
									placeholder="Поиск..." 
								/>
								{ search_input && <img onClick={ () => setSearch_input('') } src="/img/icons/clear.png" className="clear__btn" alt="clear" />}
							</div>
						</div>
						<ul className="list__sneakers">
							{
								cards_list.filter((item) => item.name.toLowerCase().includes(search_input.toLowerCase())).map((obj, key) => (
									<Card 
										image_url={ obj.imageUrl } 
										title={ obj.name } 
										price={ obj.price }
										key={ key }
									/>
								)) 
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
