import Button from '../../../../ui/button/button'
import Container from '../../../../ui/container/container'
import style from './prices.module.css'

export const Prices = () => {
	return <section className={style.prices}>
		<img src="/public/img/home/prices/element-1.svg"  className={style.icon} /><img src="/public/img/home/prices/element-2.svg"  className={style.icon} />
		<Container>
			<ul className={style.prices__list}>
					<li className={style.prices__list_item}>
						<div className={style.prices__item_title}>
								<h4>Regular Pack</h4>
								<h2>3 Days</h2>
						</div>
						<ul className={style.prices__item_list}>
								<li>
										Pet Shower
								</li>
								<li>
										Fitness Checkup
								</li>
								<li>
										Pet Grooming
								</li>
								<li>
										Hair and Nail Cut
								</li>
								<li>
										Control Hair Falling
								</li>
						</ul>
						<h4 className={style.price }> <span>$150</span>Per Visit</h4>
						<Button isLink={true} href='/services'>Purchase Pack</Button>
					</li>
					<li className={style.prices__list_item}>
						<div className={style.prices__item_title}>
								<h4>Exclusive Pack</h4>
								<h2>10 Days</h2>
						</div>
						<ul className={style.prices__item_list}>
								<li>
										Pet Shower
								</li>
								<li>
										Fitness Checkup
								</li>
								<li>
										Pet Grooming
								</li>
								<li>
										Hair and Nail Cut
								</li>
								<li>
										Control Hair Falling
								</li>
								<li>Brush & Blow Dry</li>
								<li>Pet Park And Games</li>
						</ul>
						<h4 className={style.price}> <span className={style.price}>$350</span>Per Visit</h4>
						<Button isLink={true} href='/services'>Purchase Pack</Button>
					</li>
					<li className={style.prices__list_item}>
						<div className={style.prices__item_title}>
								<h4>Premium Pack</h4>
								<h2>30 Days</h2>
						</div>
						<ul className={style.prices__item_list}>
								<li>
										Pet Shower
								</li>
								<li>
										Fitness Checkup
								</li>
								<li>
										Pet Grooming
								</li>
								<li>
										Hair and Nail Cut
								</li>
								<li>
										Control Hair Falling
								</li>
								
						</ul>
						<h4 className={style.price}> <span className={style.price}>$550</span>Per Visit</h4>
						<Button isLink={true} href='/services'>Purchase Pack</Button>
					</li>
			</ul>
		</Container>
	</section>
}