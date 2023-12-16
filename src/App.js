import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

import Header from './components/Header/index.js';
import Slider from './components/Slider/index.js';
import Card from './components/Card/index.js';

function App() {
	const [ cards_list, setCards_list ] = React.useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/cards_info").then((data) => {
			setCards_list(data.data);
		}).catch((error) => {
			console.log(error.message);
		})
	}, [cards_list]);

	return (
		<div className="App">
			<div className="wrapper">
				<Header></Header>
				<hr />
				<div className="wrapper__content">
					<Slider></Slider>
					<div className="content">
						<div className="content__title">
							<h2>Все кроссовки</h2>
							<div className="content__search">
								<img src="/img/icons/search.svg" alt="search" />
								<input type="search" placeholder="Поиск..." />
							</div>
						</div>
						<ul className="list__sneakers">
							{
								cards_list.map((obj) => (
									<Card image_url={ obj.imageUrl } title={ obj.name } price={ obj.price }></Card>
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
