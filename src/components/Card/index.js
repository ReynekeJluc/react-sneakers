import React from 'react';
import styles from './Card.module.scss';

function Card({
	id,
	title,
	image_url,
	price,
	added = false,
	favorited = false,
	OnPlus,
	OnFavor,
}) {
	const [isAdded, setIsAdded] = React.useState(added);
	const [isFavor, setIsFavor] = React.useState(favorited);

	const OnclickAdd = () => {
		OnPlus({ id, title, image_url, price });
		setIsAdded(!isAdded);
	};
	const OnclickFavor = () => {
		OnFavor({ id, title, image_url, price });
		setIsFavor(!isFavor);
	};

	return (
		<li className={styles.sneakers}>
			<img
				src={
					isFavor ? '/img/icons/favor_active.svg' : '/img/icons/favor_def.svg'
				}
				className={styles.sneakers__favor}
				onClick={OnclickFavor}
				alt='favor_icon'
			/>
			<a href='?'>
				<img
					src={image_url}
					className={styles.sneakers__image}
					alt='img sneakers'
				/>
			</a>
			<div className={styles.sneakers__title}>
				<a href='?'>{title}</a>
			</div>
			<div className={styles.block__info}>
				<div className={styles.block__prices}>
					<p>Цена:</p>
					<b>
						{new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'RUB',
							minimumFractionDigits: 0,
						}).format(price)}
					</b>
				</div>
				<img
					onClick={OnclickAdd}
					src={
						isAdded ? '/img/icons/added_active.svg' : '/img/icons/added_def.svg'
					}
					className={styles.sneakers__added}
					alt='add_icon'
				/>
			</div>
		</li>
	);
}

export default Card;
