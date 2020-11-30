import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService, FileInput, cardRepository }) => {
	const historyState = useHistory();
	const [cards, setCards] = useState({});
	const [userId, setUserId] = useState(historyState && historyState.id);
	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCards(userId, cards => {
			setCards(cards);
		});
		return () => {
			stopSync();
		};
	}, [userId, cardRepository]);

	useEffect(() => {
		authService.onAuthChange(user => {
			if (user) {
				setUserId(user.uid);
			} else {
				history.push('/');
			}
		});
	}, [userId, authService, history]);

	const createOrUpdateCard = card => {
		const updated = { ...cards };
		updated[card.id] = card;
		setCards(updated);
		cardRepository.saveCard(userId, card);
	};

	const deleteCard = card => {
		const updated = { ...cards };
		delete updated[card.id];
		setCards(updated);
		cardRepository.removeCard(userId, card);
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
