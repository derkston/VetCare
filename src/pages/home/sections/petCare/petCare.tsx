import Button from '../../../../ui/button/button'
import Container from '../../../../ui/container/container'
import style from './petCare.module.css'

export const PetCare = () => {
	return <section className={style.petCare}>
		<Container>
			<div className={style.petCare__content}>
				<div className={style.petCare__text}>
					<h2>Professional Pet Care</h2>
					<p>Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.</p>
					<Button isLink={true} href='/contact'>Contact Us Now</Button>
				</div>
				<div className={style.petCare__images}>
						<img src="img/home/petCare/dog.png" className={style.petCare__images_dog} />
				</div>
			</div>
		</Container>
	</section>
}