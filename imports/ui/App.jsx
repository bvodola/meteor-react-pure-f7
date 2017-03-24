import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Loading from './layouts/LoadingLayout.jsx';
import Main from './layouts/MainLayout.jsx';
import HomeContainer from './containers/HomeContainer.jsx';

// =================
// Routes Definition
// =================
const Routes = (
	<Route>
		<Route path='/' component={HomeContainer} />
	</Route>
);

// =============
// App Component
// =============
class App extends Component {

	componentDidMount() {
		let myApp = new Framework7({
	    pushState: true,
			pushStateSeparator: '/'
		});

		let mainView = myApp.addView('.view-main', {
			domCache: true,
			url: '/',
			main: true
		});
	}

	render() {
		return (<HomeContainer />);
	}
}

export default App;
export { Routes };
