import { NavLink } from 'react-router'
import './button.css'
type TButton = {
	children : string,
	isLink? : boolean,
	href? : string,
	backgroundColor? : string,
}

const Button = (
	{children  ,
	isLink = false ,
	href = '', 
	backgroundColor = 'red'
	} : TButton ) => {


// Функция устанавливает цвет кнопки в зависимости от параметра - backgroundColor . Может иметь 3 класса - red , green , white
		function classButtonColor(bgc : string) : string {
			let color = 'button.red';
			switch (bgc){
				case 'red' :{
					color = 'button red'
					break
				};
				case 'green':{
					color = 'button green'
					break
				};
				case 'white': {
					color = 'button white'
					break
				};
			}
			return color
		}


	return isLink
	 ? <NavLink
	  	className={classButtonColor(backgroundColor)}
			to={href}
			>
			{children}
		</NavLink> 
	: <button className={classButtonColor(backgroundColor)}>{children}</button>
}

export default Button