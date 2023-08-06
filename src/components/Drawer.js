function Drawer(props) {
	return (
		<div className="overlay">
			<div onClick={props.OnCloseDrawer} className="block__cancel"></div>
			<div className="drawer">
				<div className="drawer__title">
					<h2>Корзина</h2>
					<button onClick={props.OnCloseDrawer}>
						<img src="./img/cancel.png" width={15} height={15} alt="cancel" />
					</button>
				</div>
				<div className="drawer-items">
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/1.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/2.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
					<div className="cart-item">
						<img width={70} height={70} src="/img/sneakers/3.png" alt="your sneakers" />
						<div>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<b>12999 руб.</b>
						</div>
						<img className="btn-remove" src="/img/icons/remove.svg" alt="remove" />
					</div>
				</div>
				<div className="total-block">
					<ul className="drawer-order">
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
	)
}

export default Drawer;