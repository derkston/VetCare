import Container from '../../../../ui/container/container'
import style from './whatWeDo.module.css'

export const WhatWeDo = () => {
	return <section className={style.whatWeDo}>
			<Container>
				<div className={style.whatWeDo__content}>
						<div className={style.whatWeDo__title}>
								<h3>Care For Your Pet</h3>
								<h2>What We Do</h2>
						</div>
						<ul className={style.whatWeDo__list}>
								<li className={style.whatWeDo__list_item}>
									<img src="/public/img/home/whatWeDo/Union.svg"/>
									<h4>Pet Grooming</h4>	
									<p>There are many variatio of passage of Lorem for a Ipsum available</p>
								</li>
								<li className={style.whatWeDo__list_item}>
									<img src="/public/img/home/whatWeDo/Union-1.svg"/>
									<h4>Veterinary</h4>	
									<p>There are many variatio of passage of Lorem for a Ipsum available</p>
								</li>
								<li className={style.whatWeDo__list_item}>
									<img src="/public/img/home/whatWeDo/Union-2.svg"/>
									<h4>Dog Setting</h4>	
									<p>There are many variatio of passage of Lorem for a Ipsum available</p>
								</li>
								<li className={style.whatWeDo__list_item}>
									<img src="/public/img/home/whatWeDo/Union-3.svg"/>
									<h4>Healthy Meals</h4>	
									<p>There are many variatio of passage of Lorem for a Ipsum available</p>
								</li>
						</ul>
				</div>
			</Container>
	</section>
}

