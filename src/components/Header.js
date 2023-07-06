function Header() {
	return (
		<header>
				<div className="header-left">
					<a href="?">
						<img width={40} height={40} src="/img/logo.png" alt="logo" /> 
					</a>
					<a href="?">
						<div>
							<h3>react sneakers</h3>
							<p>Магазин лучших кросовок</p>
						</div>
					</a>
				</div>
				<ul className="header-right">
					<li>
						<a href="cart">
							<img width={20} height={20} src="/img/icons/cart.svg" alt="cart" /> 
							<span>1205 руб.</span>
						</a>
					</li>
					<li>
						<a href="favor">
							<img width={20} height={20} src="/img/icons/favor.svg" alt="favor" /> 
						</a>
					</li>
					<li>
						<a href="user">
							<img width={20} height={20} src="/img/icons/user.svg" alt="user" /> 
						</a>
					</li>
				</ul>
			</header>
	)
}

export default Header;