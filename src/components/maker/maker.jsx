import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService, FileInput }) => {
	const [cards, setCards] = useState({
		1: {
			id: '1',
			name: 'JaeHun',
			company: 'PeaceMinusOne',
			theme: 'light',
			title: 'Software Engineer',
			email: 'jaehunb350@gmail.com',
			message: 'go for it',
			fileName: 'jaehun',
			fileURL: null,
		},
		2: {
			id: '2',
			name: 'JaeHun',
			company: 'PeaceMinusOne',
			theme: 'dark',
			title: 'Software Engineer',
			email: 'jaehunb350@gmail.com',
			message: 'go for it',
			fileName: 'jaehun',
			fileURL: null,
		},
		3: {
			id: '3',
			name: 'JaeHun',
			company: 'PeaceMinusOne',
			theme: 'colorful',
			title: 'Software Engineer',
			email: 'jaehunb350@gmail.com',
			message: 'go for it',
			fileName: 'jaehun',
			fileURL: null,
		},
	});

	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange(user => {
			if (!user) {
				history.push('/');
			}
		});
	});

	const createOrUpdateCard = card => {
		const updated = { ...cards };
		updated[card.id] = card;
		setCards(updated);
	};

	const deleteCard = card => {
		const updated = { ...cards };
		delete updated[card.id];
		setCards(updated);
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
					FileInput={FileInput}
					cards={cards}
					add={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
