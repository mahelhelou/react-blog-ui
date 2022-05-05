import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
	const user = true

	return (
		<div className='navbar'>
			<div className='navbar__social-icons'>
				<i className='fab fa-facebook-square'>
					<a href='#'></a>
				</i>
				<i className='fab fa-instagram-square'>
					<a href='#'></a>
				</i>
				<i className='fab fa-pinterest-square'>
					<a href='#'></a>
				</i>
				<i className='fab fa-twitter-square'>
					<a href='#'></a>
				</i>
			</div>

			<div className='navbar__links'>
				<ul className='navbar__links-list'>
					<li>
						<Link className='link' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='link' to='/'>
							About
						</Link>
					</li>
					<li>
						<Link className='link' to='/'>
							Contact
						</Link>
					</li>
					<li>
						<Link className='link' to='/write'>
							Write
						</Link>
					</li>
					{user && <li>Logout</li>}
				</ul>
			</div>
			<div className='navbar__login'>
				{user ? (
					<Link className='link' to='/settings'>
						<img src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
					</Link>
				) : (
					<ul className='navbar__links-list'>
						<li>
							<Link className='link' to='/login'>
								Login
							</Link>
						</li>
						<li>
							<Link className='link' to='/register'>
								Register
							</Link>
						</li>
					</ul>
				)}
				<i className='login__search fas fa-search'></i>
			</div>
		</div>
	)
}

export default Navbar
