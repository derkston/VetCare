import { NavLink } from 'react-router'
import Button from '../../ui/button/button'
import Container from '../../ui/container/container'
import Logo from '../../ui/logo/logo'
import style from './footer.module.css'

const Footer = () => {
	return <footer className={style.footer}>
		<Container>
			<div className={style.footer__content}>
					<div className={style.footer__help}>
						<Logo/>
						<p>Quisque id leo non dolor tempor elementum quis ac urna. Nam pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin</p>

						<form action="#" className={style.help}>
							<input type='email' required placeholder='Email address'/>
							<Button>Subscribe</Button>
						</form>
					</div>
					<ul className={style.list}>
							<h3>Address</h3>
							<li><a href="tel:+79089078760">	  +79089078760</a>
							</li>
							<li><a href="mailto:stepaarkadevich2019@gmail.com"></a>stepaarkadevich2019@gmail.com</li>
							<li>123 king street, Melbrown
Victoria 3000, Australia</li>
					</ul>
					<ul className={style.list}>
						<h3>Links</h3>
							<li><NavLink to='/about'>About Us</NavLink></li>
							<li><NavLink to='/groomers'></NavLink>Groomers</li>
							<li><NavLink to='/contact'></NavLink>Contact Us</li>
							<li><NavLink to='/privacy'>Privacy Policy</NavLink></li>
							<li><NavLink to='/tearms'>Tearms</NavLink></li>
					</ul>
					<ul className={style.list}>
						<h3>Opening Hours</h3>
						<li>Monday-Tuesday 09:00-18:00</li>
						<li>Wednesday 09:00-18:00</li>
						<li>Thrusday-Friday 09:00-18:00</li>
						<li>Saturday 10:00-17:00</li>
						<li>Sunday 10:30-16:00</li>
					</ul>
			</div>
			<p className={style.copy}>© Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights Reserved</p>
		</Container>
	</footer>
}

export default Footer