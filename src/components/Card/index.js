import styles from './Card.module.scss';


function Card(props) {
	return (
		<li className={ styles.sneakers }>
			<a href="?">
				<img src="/img/icons/favor_def.svg" className={ styles.sneakers__favor } alt="favor_icon" />
			</a>
			<a href="?">
				<img src="/img/sneakers1.jpg" className={ styles.sneakers__image } alt="image sneakers" />
			</a>
			<div className={ styles.sneakers__title }>
				<a href="?" >Мужские кроссовки Nike Blazer Mid Suede</a>
			</div>
			<div className={ styles.block__info }>
				<div className={ styles.block__prices }>
					<p>Цена:</p>
					<b>12990руб.</b>
				</div>
				<a href="?">
					<img src="/img/icons/added_def.svg" className={styles.sneakers__added } alt="add" />
				</a>
			</div>
		</li>
	)
}

export default Card;