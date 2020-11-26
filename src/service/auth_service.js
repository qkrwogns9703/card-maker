import firebase from 'firebase';
import firebaseApp from './firebase';
class AuthService {
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
		return firebase.auth().signInWithPopup(authProvider);
	}

	logout() {
		firebase.auth().signOut();
	}

	onAuthChange(onUserChanged) {
		firebase.auth().onAuthStateChanged(user => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
