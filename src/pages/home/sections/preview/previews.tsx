import Button from '../../../../ui/button/button'
import Container from '../../../../ui/container/container'
import style from './previews.module.css'
export const Preview = () => {
	return <section className={style.preview}>
		<img
		 src="img/home/element-1.svg" className={style.icon}
		/>
		<Container>
			<div className={style.preview__content}>
					<div className={style.previews__text}>
								<h1>For Your Pet’s Natural Life & Care
								</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing 		elit,sed do eiusmod tempor incididunt
								</p>
								<div className={style.button__group}>
										<Button
										 isLink={true}
										 href='/services'
										>
											Our Services
										</Button>
										<Button
										 isLink={true}
										 href='/contact'
										 backgroundColor='green'
										>
											Make Appointment
										</Button>
								</div>
					</div>
					<div className={style.preview__dog}>
							<img
							 src="img/home/dog.png"
							 alt="dog"
							/>
							<img src="img/home/element-3.svg" 
							className={style.icon_dog} />
							<img src="img/home/element-9.svg" 
							className={style.icon_dog} />
							<img src="img/home/element-6.svg" 
							className={style.icon_dog} />
					</div>
			</div>
		</Container>
	</section>
}
