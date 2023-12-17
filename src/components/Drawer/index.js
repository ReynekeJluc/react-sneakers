import styles from './Drawer.module.scss';

function Drawer(props) {
	return (
		<div className={ styles.drawer_wrapper }>
			<div className={ styles.drawer_bg }>
			</div>
			<div className={ styles.drawer__block }>
				<h4>Корзина</h4>
				<div className={ styles.drawer__list }>
					
				</div>
				<div className={ styles.drawer__info }>
					<div className={ styles.drawer__prices }>
						<ul className={ styles.total }>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>21 498 руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
					</div>
					<a href="?" alt="order">
						<div className={ styles.order__block }>
							<div className={ styles.button__order }>
								<p>Оформление заказа</p>
							</div>
							<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Drawer;