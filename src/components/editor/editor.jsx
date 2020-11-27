import React from 'react';
import CardAddForm from '../card_add/card_add_form';
import CardEditForm from '../card_edit/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, add, updateCard, deleteCard, FileInput }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Makrer</h1>
		{Object.keys(cards).map(key => (
			<CardEditForm
				key={key}
				FileInput={FileInput}
				card={cards[key]}
				updateCard={updateCard}
				deleteCard={deleteCard}
			/>
		))}
		<CardAddForm add={add} FileInput={FileInput} />
	</section>
);

export default Editor;
