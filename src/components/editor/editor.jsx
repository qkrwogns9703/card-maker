import React from 'react';
import CardAddForm from '../card_add/card_add_form';
import CardEditForm from '../card_edit/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, add }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Makrer</h1>
		{cards.map(card => (
			<CardEditForm key={card.id} card={card} />
		))}
		<CardAddForm add={add} />
	</section>
);

export default Editor;
