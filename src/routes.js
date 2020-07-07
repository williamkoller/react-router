import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/sobre-empresa' component={Empresa} />
				<Route path='/contato' component={Contato} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
