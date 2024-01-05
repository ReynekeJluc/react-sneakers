import React from 'react';
import Card from '../../components/Card/index.jsx';
import styles from './Home_and_favor.module.scss';

function Home({
	cards_list,
	cards_drawer,
	cards_favor,
	OnAddDrawer,
	OnAddFavor,
	OnRemoveDrawer,
	OnRemoveFavor,
}) {
	const [search_input, setSearch_input] = React.useState('');

	const ChangeInput = e => {
		setSearch_input(e.target.value);
	};
	return (
		<div className={styles.wrapper__content}>
			<div className={styles.content}>
				<div className={styles.content__title}>
					<h2>
						{search_input
							? `Поиск по запросу "${search_input}"`
							: 'Все кроссовки'}
					</h2>
					<div className={styles.content__search}>
						<img
							src='/img/icons/search.svg'
							className={styles.search__btn}
							alt='search'
						/>
						<input
							onChange={ChangeInput}
							value={search_input}
							type='search'
							placeholder='Поиск...'
						/>
						{search_input && (
							<img
								onClick={() => setSearch_input('')}
								src='/img/icons/clear.png'
								className={styles.clear__btn}
								alt='clear'
							/>
						)}
					</div>
				</div>
				<ul className={styles.list__sneakers}>
					{cards_list
						.filter(item =>
							item.name.toLowerCase().includes(search_input.toLowerCase())
						)
						.map(item => (
							<Card
								key={item.id}
								id={item.id}
								image_url={item.imageUrl}
								title={item.name}
								price={item.price}
								OnPlus={obj => OnAddDrawer(obj)}
								OnFavor={obj => OnAddFavor(obj)}
								OnRemoveDrawer={obj => OnRemoveDrawer(obj.id)}
								OnRemoveFavor={obj => OnRemoveFavor(obj.id)}
								added={cards_drawer.some(obj => obj.id === item.id)}
								favorited={cards_favor.some(obj => obj.id === item.id)}
							/>
						))}
				</ul>
			</div>
		</div>
	);
}

export default Home;
