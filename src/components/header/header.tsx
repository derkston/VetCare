import Button from '../../ui/button/button'
import Container from '../../ui/container/container'
import Logo from '../../ui/logo/logo'
import Navigation from '../../ui/navigation/navagation'
import style from './header.module.css'

const Header = () => {
	return <header
	 className={style.header}
	 >
		<Container>
			<div className={style.header__content}>
				<Logo/>
				<Navigation/>
				<Button>
						89089078760
				</Button>
			</div>
		</Container>
	</header>
}

export default Header