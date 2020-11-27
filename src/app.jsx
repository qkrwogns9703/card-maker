import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';
function App({ authService, FileInput }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login authService={authService} />
					</Route>
					<Route path='/maker'>
						<Maker authService={authService} FileInput={FileInput} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
