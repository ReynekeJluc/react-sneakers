import React, { useState } from "react";
import styles from './Card.module.scss';


function Card(props) {
	const [ isAdded, setIsAdded ] = React.useState(false);
	const [ isFavor, setIsFavor ] = React.useState(false);

	const OnclickAdd = () => {
		setIsAdded(!isAdded);
	}
	const OnclickFavor = () => {
		setIsFavor(!isFavor);
	}

	return (
		<li className={ styles.sneakers }>
			<img 
				src={ isFavor ? "/img/icons/favor_active.svg" : "/img/icons/favor_def.svg" } 
				className={ styles.sneakers__favor } 
				onClick={ OnclickFavor }
				alt="favor_icon" 
			/>
			<a href="?">
				<img 
					src={ props.image_url } 
					className={ styles.sneakers__image } 
					alt="img sneakers" 
				/>
			</a>
			<div className={ styles.sneakers__title }>
				<a href="?" >{ props.title }</a>
			</div>
			<div className={ styles.block__info }>
				<div className={ styles.block__prices }>
					<p>Цена:</p>
					<b>{ props.price }руб.</b>
				</div>
				<img 
					onClick={ OnclickAdd } 
					src={ isAdded ? "/img/icons/added_active.svg" : "/img/icons/added_def.svg" } 
					className={ styles.sneakers__added }
					alt="add_icon" 
				/>
			</div>
		</li>
	)
}

export default Card;