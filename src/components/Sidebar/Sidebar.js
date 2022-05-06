import { Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar() {
	return (
		<div className='site-sidebar'>
			<div className='site-sidebar__item'>
				<span className='site-sidebar__item-title'>About Me</span>
				<img src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg' alt='' />
				<p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.</p>
			</div>
			<div className='site-sidebar__item'>
				<span className='site-sidebar__item-title'>Categories</span>
				<ul className='site-sidebar__list'>
					<li>
						<Link className='link' to='/posts?cat=Life'>
							Life
						</Link>
					</li>
					<li>
						<Link className='link' to='/posts?cat=Music'>
							Music
						</Link>
					</li>
					<li>
						<Link className='link' to='/posts?cat=Sport'>
							Sport
						</Link>
					</li>
					<li>
						<Link className='link' to='/posts?cat=Style'>
							Style
						</Link>
					</li>
					<li>
						<Link className='link' to='/posts?cat=Tech'>
							Tech
						</Link>
					</li>
					<li>
						<Link className='link' to='/posts?cat=Cinema'>
							Cinema
						</Link>
					</li>
				</ul>
			</div>
			<div className='site-sidebar__item'>
				<span className='site-sidebar__item-title'>Follow Us</span>
				<div className='site-sidebar__social'>
					<i className='fab fa-facebook-square'></i>
					<i className='fab fa-instagram-square'></i>
					<i className='fab fa-pinterest-square'></i>
					<i className='fab fa-twitter-square'></i>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
