import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
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
		{
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
		{
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
	]);

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

	const addCard = card => {
		setCards([...cards, card]);
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} add={addCard} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
