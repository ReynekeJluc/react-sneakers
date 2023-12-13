import "./index.scss";

import Header from './components/Header/index.js';
import Slider from './components/Slider/index.js';
import Card from './components/Card/index.js';

function App() {
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
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
