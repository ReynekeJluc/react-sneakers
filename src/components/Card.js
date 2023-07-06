function Card() {
	return (
		<div className="card">
			<img width={133} height={112} src="/img/sneakers/2.png" alt="sneakers" />
			<div>
				<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
				<div className="card-price">
					<div>
						<span>Цена: </span>
						<b>12999 руб.</b>
					</div>
					<button className="button">
						<img src="/img/plus.png" alt="add" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card;