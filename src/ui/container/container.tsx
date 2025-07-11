import type { JSX } from 'react'
import style from './container.module.css'

const Container = ({children} : {children : JSX.Element | JSX.Element[]}) => {
	return <div className={style.container}>
		{children}
	</div>
}

export default Container