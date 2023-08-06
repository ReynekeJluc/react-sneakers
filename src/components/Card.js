function Card(props) {
	return (
		<div className="card">
			<button className="favor_btn">
				<img src="/img/icons/favor.svg" alt="favor"/>
			</button>
			<img width={133} height={112} src={props.imageUrl} alt="sneakers" />
			<div>
				<p>{ props.name }</p>
				<div className="card-price">
					<div>
						<span>Цена: </span>
						<b>{ props.price } руб.</b>
					</div>
					<button className="add_btn">
						<img src="/img/plus.png" alt="add" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card;