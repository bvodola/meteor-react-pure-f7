import React , {Component} from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'
import { RouteTransition } from 'react-router-transition';

import TransitionLayout from './layouts/TransitionLayout.jsx';
import Loading from './layouts/LoadingLayout.jsx';
import Main from './layouts/MainLayout.jsx';
import HomeContainer from './containers/HomeContainer.jsx';

import About from './components/About.jsx';



// =================
// Routes Definition
// =================
const Routes = (
	<Route path='/' component={TransitionLayout}>
		<IndexRoute component={HomeContainer} />
		<Route path='about' component={About} />
	</Route>
);

// =============
// App Component
// =============
class App extends Component {

	componentDidMount() {
		let app = new Framework7({
	    router: false
		});
	}

	render() {
		return (<Router history={browserHistory} routes={Routes} />);
	}
}

export default App;
export { Routes };
