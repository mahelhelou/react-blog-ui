// Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Single from './pages/Single'
import Write from './pages/Write'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	const currentUser = true

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/posts'>
					<Home />
				</Route>
				<Route path='/register'>{currentUser ? <Home /> : <Register />}</Route>
				<Route path='/login'>{currentUser ? <Home /> : <Login />}</Route>
				<Route path='/post/:id'>
					<Single />
				</Route>
				<Route path='/write'>{currentUser ? <Write /> : <Login />}</Route>
				<Route path='/settings'>{currentUser ? <Settings /> : <Login />}</Route>
			</Switch>
		</Router>
	)
}

export default App
