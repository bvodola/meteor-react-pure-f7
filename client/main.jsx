import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App, { Routes } from '../imports/ui/App.jsx';

import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
import 'framework7/dist/js/framework7.js';

// =====================
// Server Side Rendering
// =====================
// import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

/*
	To add SSR, uncomment the line above and add the react-router-ssr package
	with the command: meteor add reactrouter:react-router-ssr.
	Use this before launching your app to production
*/

Meteor.startup(() => {

	let enableSSR = false;
	let enableHMR = !enableSSR;

	// If the Hot Module Replacement is enabled
	if(enableHMR) {
		render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

		if (module.hot) {
			module.hot.accept('../imports/ui/App.jsx', () => {
				const NextApp = require('../imports/ui/App.jsx').default;
				render(
					<AppContainer>
						<NextApp />
					</AppContainer>,
					document.getElementById('root')
				);
			});
		}

	}

	// If the Hot Module Replacement is not enabled
	else {
		ReactRouterSSR.Run(Routes, {rootElement: 'root'});

	}

});
