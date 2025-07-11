
import { NavLink } from 'react-router'
import style from './navigation.module.css'


const Navigation = () => {

	return 	<nav className={style.navigation}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/start'>Start</NavLink>
			<NavLink to='/services'>Services</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/news'>News</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
			
	</nav>
	
}

export default Navigation