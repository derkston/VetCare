import Button from '../../../../ui/button/button'
import Container from '../../../../ui/container/container'
import style from './successStory.module.css'

export const SuccessStory = () => {
	return <section className={style.successStory}>
		<Container>
			<div className={style.successStory__content}>
				<img className={style.icon} src="/public/img/home/successStory/element-1.svg"/>
				<div className={style.successStory__content_text}>
					<div className={style.successStory__title}>
						<h3>Our Success Story</h3>
						<h2>Experience Vet Clinic
								And Services
						</h2>
					</div>
					<p>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.</p>

					<ul className={style.successStory__list}>
							<li
							 className={style.successStory__list_item}>
								Donec commodo scelerisque laoreet nibh hendrerit
							</li>
							<li
							 className={style.successStory__list_item}>
								In aliquet magna nec lobortis maximus. Etiam a dolor placerat
							</li>
							<li
							 className={style.successStory__list_item}>
								Etiam dolor nec elementum ipsum convall Maecenas
							</li>
					</ul>
					<Button isLink={true} href='/about'>Know More About Us</Button>
				</div>
				<div
				 className={style.successStory__images}>
						<img src="/public/img/home/successStory/Object-14.png"/>
						<img className={style.successStory__images_icon} src="/public/img/home/successStory/element-2.svg"/>
						<img className={style.successStory__images_icon} src="/public/img/home/successStory/element-3.svg"/>
						<img className={style.successStory__images_icon} src="/public/img/home/successStory/element-4.svg"/>
				 </div>
			</div>
		</Container>
	</section>
}