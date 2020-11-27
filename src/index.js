import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
);

const cardRepository = new CardRepository();

ReactDOM.render(
	<App
		authService={authService}
		FileInput={FileInput}
		cardRepository={cardRepository}
	/>,
	document.getElementById('root')
);
