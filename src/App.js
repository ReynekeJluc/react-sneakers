import Header from './components/Header';
import Card from './components/Card';

function App() {
	return (
		<div className="wrapper">

			<div style={{ display: 'none' }} class="overlay">
				<div class="drawer">
					<h2>Корзина</h2>
					<div class="drawer-items">
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/1.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/2.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
						<div class="cart-item">
							<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
							<div>
								<span>Мужские Кроссовки Nike Air Max 270</span>
								<b>12999 руб.</b>
							</div>
							<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
						</div>
					</div>
					<div className="total-block">
						<ul class="drawer-order">
							<li>
								<span>Итого:</span>
								<div></div>
								<b>21498 руб.</b>
							</li>
							<li>
								<span>Налог 5%</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<a href="#" className="green-btn">Оформить заказ<img src="/img/icons/arrow.svg" alt="arrow" /></a>
					</div>
				</div>
			</div>

			<Header />

			<div className="content">
				<h1>Все Кроссовки</h1>
				<div className="cards">
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/1.png" alt="sneakers" />
						<div>
							<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card-price">
								<div>
									<span>Цена: </span>
									<b>12999 руб.</b>
								</div>
								<button>
									<img src="/img/plus.png" alt="add" />
								</button>
							</div>
						</div>
					</div>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

		</div>
	);
}

export default App;