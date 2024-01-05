import React from 'react';
import Card from '../../components/Card/index.jsx';
import styles from './Home_and_favor.module.scss';

function Favor({
	cards_drawer,
	cards_favor,
	OnAddDrawer,
	OnAddFavor,
	OnRemoveDrawer,
}) {
	return (
		<div className={styles.wrapper__content}>
			<div className={styles.content}>
				<div className={styles.content__title}>
					<h2>То что вам понравилось</h2>
				</div>
				<ul className={styles.list__sneakers}>
					{cards_favor.map(item => (
						<Card
							key={item.id}
							id={item.id}
							image_url={item.image_url}
							title={item.title}
							price={item.price}
							OnPlus={obj => OnAddDrawer(obj)}
							OnFavor={obj => OnAddFavor(obj)}
							OnRemove={obj => OnRemoveDrawer(obj.id)}
							added={cards_drawer.some(obj => obj.id === item.id)}
							favorited={cards_favor.some(obj => obj.id === item.id)}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Favor;
